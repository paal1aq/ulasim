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

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
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

      // Embed into app.js
      const updatedSchedule = fs.readFileSync('schedule.json', 'utf8');
      let appJs = fs.readFileSync('app.js', 'utf8');
      appJs = appJs.replace(
        /const EMBEDDED_SCHEDULE = \{[\s\S]*?\};\s*let scheduleData = EMBEDDED_SCHEDULE;/,
        'const EMBEDDED_SCHEDULE = ' + updatedSchedule + ';\nlet scheduleData = EMBEDDED_SCHEDULE;'
      );
      fs.writeFileSync('app.js', appJs, 'utf8');
      console.log("✅ Saatler başarıyla güncellendi ve app.js içine işlendi!");
    } else {
      console.log("✅ Saatlerde herhangi bir değişiklik yok. Mevcut tarife geçerli.");
    }
  } catch (err) {
    console.error("Hata:", err.message);
  }
}

check();
