const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

async function getPageItems(doc, pageNum) {
  const page = await doc.getPage(pageNum);
  const content = await page.getTextContent();
  return content.items.map(it => ({
    str: it.str.trim(),
    x: Math.round(it.transform[4]),
    y: Math.round(it.transform[5])
  })).filter(it => it.str);
}

// Gece 00:00 - 04:59 seferlerini gün sonuna (24:00+) göre doğru sıralar
function sortBusTimes(times) {
  const toMinutes = (t) => {
    const [h, m] = t.split(':').map(Number);
    return (h < 5 ? h + 24 : h) * 60 + m;
  };
  return Array.from(new Set(times)).sort((a, b) => toMinutes(a) - toMinutes(b));
}

function filterTimesInXRange(items, minX, maxX, minY = -Infinity, maxY = Infinity) {
  const times = items
    .filter(it =>
      it.x >= minX &&
      it.x <= maxX &&
      it.y >= minY &&
      it.y <= maxY &&
      /^\d{2}:\d{2}$/.test(it.str)
    )
    .map(it => it.str);
  return sortBusTimes(times);
}

// PDF 1. sayfasından "UYGULAMAYA BAŞLAMA TARİHİ: 23/11/2026" tarihini çeker
function extractTariffDate(page1Items, fallback) {
  const fullText = page1Items.map(it => it.str).join(' ');
  const match = fullText.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  if (!match) return fallback;
  const day = parseInt(match[1], 10);
  const monthName = MONTHS_TR[parseInt(match[2], 10) - 1];
  const year = match[3];
  return `${day} ${monthName} ${year}`;
}

async function main() {
  const weekdayData = fs.readFileSync('hafta-ici.pdf');
  const weekendData = fs.readFileSync('hafta-sonu.pdf');

  const pWeekday = new PDFParse({ data: weekdayData });
  const docWeekday = await pWeekday.load();

  const pWeekend = new PDFParse({ data: weekendData });
  const docWeekend = await pWeekend.load();

  // Mevcut schedule.json varsa PDF linklerini koru (check_updates.js üzerinden gelen)
  let existingMeta = {};
  if (fs.existsSync('schedule.json')) {
    try {
      existingMeta = JSON.parse(fs.readFileSync('schedule.json', 'utf8')).metadata || {};
    } catch (_) {}
  }

  const p1WeekdayItems = await getPageItems(docWeekday, 1);
  const p1WeekendItems = await getPageItems(docWeekend, 1);

  const activeTariffDate = extractTariffDate(p1WeekdayItems, existingMeta.activeTariffDate || "23 Kasım 2026");
  const weekendTariffDate = extractTariffDate(p1WeekendItems, existingMeta.weekendTariffDate || "14 Kasım 2026");

  // --- Ç10 HAFTA İÇİ (Page 11) ---
  // Sayfa 11 ortasında "ARDES YURDU KALKIŞ" başlığı ile tablo yönleri değişiyor!
  const p11Items = await getPageItems(docWeekday, 11);
  const splitHeader = p11Items.find(it => it.str.includes('ARDES YURDU KALKIŞ'));
  const splitY = splitHeader ? splitHeader.y : 450; // Bulamazsa güvenli orta nokta

  // 1) Üst tablo (splitY üstü): Sol sütun = Nusrat Kalkış (07:45 - 10:30)
  const c10_nusrat_top = filterTimesInXRange(p11Items, 115, 145, splitY + 1, Infinity);
  // 2) Alt tablo (splitY altı): Sağ sütun = Nusrat Kalkış (11:00 - 14:00)
  const c10_nusrat_bottom = filterTimesInXRange(p11Items, 335, 365, -Infinity, splitY - 1);
  // 3) Alt tablo (splitY altı): Sol sütun = Ardes Kalkış (10:45 - 16:45)
  const c10_ardes = filterTimesInXRange(p11Items, 115, 145, -Infinity, splitY - 1);

  const c10_nusrat = sortBusTimes([...c10_nusrat_top, ...c10_nusrat_bottom]);

  // --- Ç8 HAFTA İÇİ (Page 9) ---
  const p9Items = await getPageItems(docWeekday, 9);
  const c8_w_huseyin = filterTimesInXRange(p9Items, 150, 175);
  const c8_w_nusrat = filterTimesInXRange(p9Items, 335, 360);

  // --- Ç8 HAFTA SONU (Page 7) ---
  const p7WeekendItems = await getPageItems(docWeekend, 7);
  const c8_we_huseyin = filterTimesInXRange(p7WeekendItems, 135, 155);
  const c8_we_nusrat = filterTimesInXRange(p7WeekendItems, 345, 365);

  // --- Ç960 TOKİ HAFTA İÇİ (Page 12) ---
  const p12Items = await getPageItems(docWeekday, 12);
  const c960_w_park17 = filterTimesInXRange(p12Items, 150, 170);
  const c960_w_nusrat = filterTimesInXRange(p12Items, 360, 380);

  // --- Ç960 TOKİ HAFTA SONU (Page 9) ---
  const p9WeekendItems = await getPageItems(docWeekend, 9);
  const c960_we_nusrat = filterTimesInXRange(p9WeekendItems, 145, 165);
  const c960_we_park17 = filterTimesInXRange(p9WeekendItems, 345, 370);

  const schedule = {
    metadata: {
      generatedAt: new Date().toISOString(),
      city: "Çanakkale",
      activeTariffDate,
      weekendTariffDate,
      officialSourceUrl: "https://ulasim.canakkale.bel.tr/rehber/hatlar-otobus-saatleri/",
      pdfWeekdayUrl: process.env.NEW_WEEKDAY_URL || existingMeta.pdfWeekdayUrl || "https://ulasim.canakkale.bel.tr/wp-content/uploads/2018/02/23-KASIM-2.pdf",
      pdfWeekendUrl: process.env.NEW_WEEKEND_URL || existingMeta.pdfWeekendUrl || "https://ulasim.canakkale.bel.tr/wp-content/uploads/2018/02/14-KASIM-8.pdf"
    },
    lines: {
      "c10": {
        id: "c10",
        code: "Ç-10",
        name: "Nusrat Yurdu - Terzioğlu Kampüs",
        priority: 1,
        hasWeekend: false,
        directions: [
          {
            id: "nusrat_to_campus",
            title: "Nusrat Yurdu'ndan Kalkış",
            subTitle: "Mühendislik / Terzioğlu Kampüs Yönü",
            weekday: c10_nusrat,
            weekend: []
          },
          {
            id: "ardes_to_nusrat",
            title: "Kampüs / Ardes'ten Kalkış",
            subTitle: "Nusrat Yurdu Yönü",
            weekday: c10_ardes,
            weekend: []
          }
        ]
      },
      "c8": {
        id: "c8",
        code: "Ç-8",
        name: "Nusrat Yurdu - Hüseyin Elbi Yurdu",
        priority: 2,
        hasWeekend: true,
        directions: [
          {
            id: "nusrat_to_huseyin",
            title: "Nusrat Yurdu'ndan Kalkış",
            subTitle: "İskele / Hüseyin Elbi Yurdu Yönü",
            weekday: c8_w_nusrat,
            weekend: c8_we_nusrat
          },
          {
            id: "huseyin_to_nusrat",
            title: "Hüseyin Elbi'den Kalkış",
            subTitle: "Araştırma Hastanesi / Nusrat Yurdu Yönü",
            weekday: c8_w_huseyin,
            weekend: c8_we_huseyin
          }
        ]
      },
      "c960": {
        id: "c960",
        code: "Ç-960 TOKİ",
        name: "Park 17 - 960 TOKİ - Nusrat Yurdu",
        priority: 3,
        hasWeekend: true,
        directions: [
          {
            id: "nusrat_to_park17",
            title: "Nusrat Yurdu'ndan Kalkış",
            subTitle: "Cuma Pazarı / Park 17 Yönü",
            weekday: c960_w_nusrat,
            weekend: c960_we_nusrat
          },
          {
            id: "park17_to_nusrat",
            title: "Park 17'den Kalkış",
            subTitle: "Yeni Hastane / Nusrat Yurdu Yönü",
            weekday: c960_w_park17,
            weekend: c960_we_park17
          }
        ]
      }
    }
  };

  fs.writeFileSync('schedule.json', JSON.stringify(schedule, null, 2), 'utf8');
  console.log("Successfully generated schedule.json!");
  console.log(`Tariff Dates -> Weekday: ${activeTariffDate} | Weekend: ${weekendTariffDate}`);
  console.log("Ç10 Nusrat departures (weekday):", c10_nusrat.length, c10_nusrat);
  console.log("Ç10 Ardes departures (weekday):", c10_ardes.length, c10_ardes);
  console.log("Ç8 Nusrat departures (weekday/weekend):", c8_w_nusrat.length, c8_we_nusrat.length);
  console.log("Ç8 Hüseyin Elbi departures (weekday/weekend):", c8_w_huseyin.length, c8_we_huseyin.length);
  console.log("Ç960 Nusrat departures (weekday/weekend):", c960_w_nusrat.length, c960_we_nusrat.length);
  console.log("Ç960 Park 17 departures (weekday/weekend):", c960_w_park17.length, c960_we_park17.length);
  
  const updatedSchedule = fs.readFileSync('schedule.json', 'utf8');
let appJs = fs.readFileSync('app.js', 'utf8');
appJs = appJs.replace(
  /const EMBEDDED_SCHEDULE = \{[\s\S]*?\};\s*let scheduleData = EMBEDDED_SCHEDULE;/,
  'const EMBEDDED_SCHEDULE = ' + updatedSchedule + ';\nlet scheduleData = EMBEDDED_SCHEDULE;'
);
fs.writeFileSync('app.js', appJs, 'utf8');
}

main().catch(console.error);