const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');

const TARGET_URL = 'https://ulasim.canakkale.bel.tr/rehber/hatlar-otobus-saatleri/';

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
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

    const weekdayLink = links.find(l => l.text.toLowerCase().includes('hafta içi'))?.url;
    const weekendLink = links.find(l => l.text.toLowerCase().includes('hafta sonu'))?.url;

    console.log("Bulunan Hafta İçi Linki:", weekdayLink);
    console.log("Bulunan Hafta Sonu Linki:", weekendLink);

    let schedule = {};
    if (fs.existsSync('schedule.json')) {
      schedule = JSON.parse(fs.readFileSync('schedule.json', 'utf8'));
    }

    const oldWeekday = schedule.metadata?.pdfWeekdayUrl;
    const oldWeekend = schedule.metadata?.pdfWeekendUrl;

    let hasChange = false;
    if (weekdayLink && weekdayLink !== oldWeekday) {
      console.log(`🚨 DEĞİŞİKLİK TESPİT EDİLDİ! Yeni Hafta İçi PDF: ${weekdayLink}`);
      hasChange = true;
    }
    if (weekendLink && weekendLink !== oldWeekend) {
      console.log(`🚨 DEĞİŞİKLİK TESPİT EDİLDİ! Yeni Hafta Sonu PDF: ${weekendLink}`);
      hasChange = true;
    }

    if (!hasChange) {
      console.log("✅ Saatlerde herhangi bir değişiklik yok. Mevcut tarife geçerli.");
    } else {
      console.log("🔄 Yeni PDF'ler indirilip saatler yeniden işlenebilir.");
    }
  } catch (err) {
    console.error("Hata:", err.message);
  }
}

check();
