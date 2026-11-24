const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');

const TARGET_URL = 'https://ulasim.canakkale.bel.tr/rehber/hatlar-otobus-saatleri/';

const MONTHS_MAP = {
  'ocak': 1, 'şubat': 2, 'mart': 3, 'nisan': 4, 'mayıs': 5, 'haziran': 6,
  'temmuz': 7, 'ağustos': 8, 'eylül': 9, 'ekim': 10, 'kasım': 11, 'aralık': 12
};

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

function extractDateScore(trText) {
  const match = trText.match(/(\d{1,2})\s*(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/);
  if (!match) return 0;
  const day = parseInt(match[1], 10);
  const month = MONTHS_MAP[match[2]] || 0;
  return month * 100 + day;
}

function selectBestPdfLink(links, keyword) {
  const candidates = links
    .map((link, index) => {
      const trText = link.text.toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ').trim();
      return { ...link, trText, index };
    })
    .filter(item => item.trText.includes(keyword));

  if (candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];

  // Birden fazla link varsa: "itibariyle" içeren ve en güncel tarihli olanı öne al
  candidates.sort((a, b) => {
    const aItibariyle = a.trText.includes('itibariyle') ? 1 : 0;
    const bItibariyle = b.trText.includes('itibariyle') ? 1 : 0;
    if (bItibariyle !== aItibariyle) return bItibariyle - aItibariyle;

    const aDate = extractDateScore(a.trText);
    const bDate = extractDateScore(b.trText);
    if (bDate !== aDate) return bDate - aDate;

    // Eşitlik durumunda sayfada daha sonra (altta) eklenen linki seç
    return b.index - a.index;
  });

  return candidates[0];
}

async function check() {
  console.log(`[${new Date().toLocaleString('tr-TR')}] Çanakkale Belediyesi Ulaşım sayfası taranıyor...`);
  try {
    const html = await fetchHtml(TARGET_URL);
    const regex = /<a[^>]+href=["']([^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const links = [];
    while ((match = regex.exec(html)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
      links.push({ url: match[1], text });
    }

    const bestWeekday = selectBestPdfLink(links, 'hafta içi');
    const bestWeekend = selectBestPdfLink(links, 'hafta sonu');

    const weekdayLink = bestWeekday?.url;
    const weekendLink = bestWeekend?.url;

    console.log("Seçilen Hafta İçi Linki:", bestWeekday?.text, "->", weekdayLink);
    console.log("Seçilen Hafta Sonu Linki:", bestWeekend?.text, "->", weekendLink);

    let schedule = {};
    if (fs.existsSync('schedule.json')) {
      schedule = JSON.parse(fs.readFileSync('schedule.json', 'utf8'));
    }

    const oldWeekday = schedule.metadata?.pdfWeekdayUrl;
    const oldWeekend = schedule.metadata?.pdfWeekendUrl;

    let hasChange = false;

    if (weekdayLink && weekdayLink !== oldWeekday) {
      console.log(`🚨 DEĞİŞİKLİK TESPİT EDİLDİ! Yeni Hafta İçi PDF indiriliyor: ${weekdayLink}`);
      await downloadFile(weekdayLink, 'hafta-ici.pdf');
      hasChange = true;
    }

    if (weekendLink && weekendLink !== oldWeekend) {
      console.log(`🚨 DEĞİŞİKLİK TESPİT EDİLDİ! Yeni Hafta Sonu PDF indiriliyor: ${weekendLink}`);
      await downloadFile(weekendLink, 'hafta-sonu.pdf');
      hasChange = true;
    }

    if (hasChange) {
      console.log("🔄 Yeni PDF'ler işleniyor (build_schedule.js çalıştırılıyor)...");
      execSync('node build_schedule.js', {
        stdio: 'inherit',
        env: {
          ...process.env,
          NEW_WEEKDAY_URL: weekdayLink || '',
          NEW_WEEKEND_URL: weekendLink || ''
        }
      });

      const updatedSchedule = fs.readFileSync('schedule.json', 'utf8');
      let appJs = fs.readFileSync('app.js', 'utf8');
      appJs = appJs.replace(
        /const EMBEDDED_SCHEDULE = \{[\s\S]*?\};\s*let scheduleData = EMBEDDED_SCHEDULE;/,
        'const EMBEDDED_SCHEDULE = ' + updatedSchedule + ';\nlet scheduleData = EMBEDDED_SCHEDULE;'
      );
      fs.writeFileSync('app.js', appJs, 'utf8');
      console.log("✅ Saatler başarıyla güncellendi ve app.js içine işlendi!");

      // Service Worker cache sürümünü güncelle
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const newCacheName = `ulasim-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
      let swCode = fs.readFileSync('sw.js', 'utf8');
      swCode = swCode.replace(/const CACHE_NAME = ['"][^'"]+['"];/, `const CACHE_NAME = '${newCacheName}';`);
      fs.writeFileSync('sw.js', swCode, 'utf8');
      console.log(`✅ Service Worker cache versiyonu güncellendi: ${newCacheName}`);
    } else {
      console.log("✅ Saatlerde herhangi bir değişiklik yok. Mevcut tarife geçerli.");
    }
  } catch (err) {
    console.error("Hata:", err.message);
  }
}

check();