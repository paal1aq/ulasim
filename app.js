// State
const EMBEDDED_SCHEDULE = {
  "metadata": {
    "generatedAt": "2026-11-24T12:04:38.696Z",
    "city": "Çanakkale",
    "activeTariffDate": "24 Kasım 2026",
    "weekendTariffDate": "28 Kasım 2026",
    "officialSourceUrl": "https://ulasim.canakkale.bel.tr/rehber/hatlar-otobus-saatleri/",
    "pdfWeekdayUrl": "https://ulasim.canakkale.bel.tr/wp-content/uploads/2018/02/24-KASIM-9.pdf",
    "pdfWeekendUrl": "https://ulasim.canakkale.bel.tr/wp-content/uploads/2018/02/28-KASIM-3.pdf"
  },
  "lines": {
    "c10": {
      "id": "c10",
      "code": "Ç-10",
      "name": "Nusrat Yurdu - Terzioğlu Kampüs",
      "priority": 1,
      "hasWeekend": false,
      "directions": [
        {
          "id": "nusrat_to_campus",
          "title": "Nusrat Yurdu'ndan Kalkış",
          "subTitle": "Mühendislik / Terzioğlu Kampüs Yönü",
          "weekday": [
            "07:45",
            "08:00",
            "08:10",
            "08:20",
            "08:30",
            "08:40",
            "08:50",
            "09:05",
            "09:15",
            "09:25",
            "09:35",
            "09:45",
            "10:00",
            "10:15",
            "10:30",
            "11:00",
            "11:25",
            "11:50",
            "12:20",
            "12:50",
            "13:20",
            "13:35",
            "14:00",
            "14:10",
            "14:30",
            "14:50",
            "15:10",
            "15:30",
            "16:00",
            "16:30"
          ],
          "weekend": [],
          "timeBadges": {
            "16:00": "Ç-14",
            "16:30": "Ç-14",
            "14:30": "Ç-14",
            "15:10": "Ç-14",
            "15:30": "Ç-14",
            "14:10": "Ç-14",
            "14:50": "Ç-14"
          }
        },
        {
          "id": "ardes_to_nusrat",
          "title": "Kampüs / Ardes'ten Kalkış",
          "subTitle": "Nusrat Yurdu Yönü",
          "weekday": [
            "10:45",
            "11:10",
            "11:35",
            "12:05",
            "12:35",
            "12:50",
            "13:15",
            "13:30",
            "13:50",
            "14:10",
            "14:30",
            "14:50",
            "15:10",
            "15:40",
            "15:50",
            "16:15",
            "16:45"
          ],
          "weekend": []
        }
      ]
    },
    "c8": {
      "id": "c8",
      "code": "Ç-8",
      "name": "Nusrat Yurdu - Hüseyin Elbi Yurdu",
      "priority": 2,
      "hasWeekend": true,
      "directions": [
        {
          "id": "nusrat_to_huseyin",
          "title": "Nusrat Yurdu'ndan Kalkış",
          "subTitle": "İskele / Hüseyin Elbi Yurdu Yönü",
          "weekday": [
            "07:10",
            "07:35",
            "08:10",
            "08:45",
            "09:15",
            "09:40",
            "10:00",
            "10:20",
            "10:50",
            "11:25",
            "11:55",
            "12:25",
            "12:55",
            "13:40",
            "14:20",
            "14:50",
            "15:25",
            "15:55",
            "16:25",
            "16:50",
            "17:25",
            "18:15",
            "18:45",
            "19:10",
            "19:35",
            "19:50",
            "20:15",
            "20:50",
            "21:20",
            "21:50",
            "22:10",
            "22:45",
            "23:10",
            "23:45"
          ],
          "weekend": [
            "07:10",
            "07:50",
            "08:35",
            "09:10",
            "09:50",
            "10:35",
            "11:10",
            "11:50",
            "12:35",
            "13:10",
            "13:50",
            "14:10",
            "14:35",
            "14:50",
            "15:10",
            "15:30",
            "15:50",
            "16:35",
            "16:50",
            "17:10",
            "17:30",
            "17:50",
            "18:10",
            "18:35",
            "19:10",
            "19:30",
            "19:50",
            "20:15",
            "20:35",
            "20:50",
            "21:10",
            "21:50",
            "22:10",
            "22:35",
            "23:10",
            "23:50"
          ]
        },
        {
          "id": "huseyin_to_nusrat",
          "title": "Hüseyin Elbi'den Kalkış",
          "subTitle": "Araştırma Hastanesi / Nusrat Yurdu Yönü",
          "weekday": [
            "07:05",
            "07:35",
            "08:10",
            "08:25",
            "08:45",
            "09:00",
            "09:35",
            "10:10",
            "10:40",
            "11:10",
            "11:40",
            "12:20",
            "13:00",
            "13:30",
            "14:05",
            "14:30",
            "15:05",
            "15:35",
            "16:00",
            "16:30",
            "17:05",
            "17:30",
            "18:00",
            "18:30",
            "19:05",
            "19:40",
            "20:10",
            "20:40",
            "21:00",
            "21:35",
            "22:00",
            "22:25",
            "22:40",
            "23:00",
            "23:40"
          ],
          "weekend": [
            "07:50",
            "08:30",
            "09:10",
            "09:50",
            "10:30",
            "11:10",
            "11:50",
            "12:30",
            "12:50",
            "13:10",
            "13:30",
            "13:50",
            "14:10",
            "14:30",
            "15:10",
            "15:30",
            "15:50",
            "16:10",
            "16:30",
            "16:50",
            "17:10",
            "17:50",
            "18:10",
            "18:30",
            "18:50",
            "19:10",
            "19:30",
            "19:50",
            "20:30",
            "20:50",
            "21:10",
            "21:30",
            "21:50",
            "22:10",
            "22:30",
            "23:10",
            "23:50"
          ]
        }
      ]
    },
    "c960": {
      "id": "c960",
      "code": "Ç-960 TOKİ",
      "name": "Park 17 - 960 TOKİ - Nusrat Yurdu",
      "priority": 3,
      "hasWeekend": true,
      "directions": [
        {
          "id": "nusrat_to_park17",
          "title": "Nusrat Yurdu'ndan Kalkış",
          "subTitle": "Cuma Pazarı / Park 17 Yönü",
          "weekday": [
            "07:00",
            "07:30",
            "08:00",
            "08:30",
            "08:50",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:35",
            "12:05",
            "12:35",
            "13:05",
            "13:35",
            "14:00",
            "14:30",
            "15:00",
            "15:35",
            "16:05",
            "16:35",
            "17:00",
            "17:35",
            "18:05",
            "18:35",
            "18:55",
            "19:20",
            "19:40",
            "20:15",
            "20:40",
            "21:00",
            "21:30",
            "22:00",
            "22:35",
            "23:00"
          ],
          "weekend": [
            "07:30",
            "07:50",
            "08:10",
            "08:30",
            "08:50",
            "09:10",
            "09:30",
            "09:50",
            "10:10",
            "10:30",
            "10:50",
            "11:10",
            "11:30",
            "11:45",
            "12:00",
            "12:15",
            "12:30",
            "12:45",
            "13:00",
            "13:15",
            "13:30",
            "13:45",
            "14:00",
            "14:15",
            "14:30",
            "14:45",
            "15:00",
            "15:15",
            "15:30",
            "15:45",
            "16:00",
            "16:15",
            "16:30",
            "16:45",
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30"
          ]
        },
        {
          "id": "park17_to_nusrat",
          "title": "Park 17'den Kalkış",
          "subTitle": "Yeni Hastane / Nusrat Yurdu Yönü",
          "weekday": [
            "07:20",
            "07:45",
            "08:00",
            "08:40",
            "09:20",
            "09:50",
            "10:20",
            "10:50",
            "11:20",
            "11:50",
            "12:20",
            "12:50",
            "13:20",
            "13:50",
            "14:20",
            "14:50",
            "15:20",
            "15:50",
            "16:20",
            "16:50",
            "17:20",
            "17:40",
            "18:10",
            "18:25",
            "18:50",
            "19:20",
            "19:50",
            "20:20",
            "20:40",
            "21:00",
            "21:25",
            "21:50",
            "22:20",
            "22:50",
            "23:20"
          ],
          "weekend": [
            "07:25",
            "07:45",
            "08:05",
            "08:25",
            "08:45",
            "09:05",
            "09:25",
            "09:45",
            "10:05",
            "10:25",
            "10:45",
            "11:05",
            "11:25",
            "11:45",
            "12:05",
            "12:25",
            "12:40",
            "12:55",
            "13:10",
            "13:25",
            "13:40",
            "13:55",
            "14:10",
            "14:25",
            "14:40",
            "14:55",
            "15:10",
            "15:25",
            "15:40",
            "15:55",
            "16:10",
            "16:25",
            "16:40",
            "16:55",
            "17:10",
            "17:25",
            "17:40",
            "17:55",
            "18:25",
            "18:55",
            "19:25",
            "19:55",
            "20:25",
            "20:55",
            "21:25",
            "22:05",
            "22:35"
          ]
        }
      ]
    }
  }
};
let scheduleData = EMBEDDED_SCHEDULE;
let currentDayMode = 'weekday'; // 'weekday' or 'weekend'
let activeLineId = 'c10';
let activeDirectionIndex = 0;

const LINE_THEME_COLORS = {
  c10: '#a855f7',
  c8: '#06b6d4',
  c960: '#ef4444'
};

function applyLineTheme(lineId) {
  const line = lineId || 'c10';
  if (typeof document !== 'undefined' && document.body) {
    document.body.dataset.line = line;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme && LINE_THEME_COLORS[line]) {
      metaTheme.setAttribute('content', LINE_THEME_COLORS[line]);
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadSchedule();
  initAutoDayDetection();
  applyLineTheme(activeLineId);
  setupEventListeners();
  renderApp();
  
  // Start clock & live loop
  updateLiveTimes();
  setInterval(updateLiveTimes, 1000);
});

async function loadSchedule() {
  try {
    const res = await fetch('schedule.json');
    if (res.ok) {
      scheduleData = await res.json();
      if (typeof window !== 'undefined' && window.navigator && window.navigator.onLine) {
        try {
          localStorage.setItem('lastSyncedAt', new Date().toISOString());
        } catch (err) {}
      }
    } else {
      throw new Error('fetch failed');
    }
  } catch (e) {
    console.warn('Could not fetch schedule.json, falling back to embedded data');
    // Fallback embedded data will be defined if needed
  }
}

function initAutoDayDetection() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const isWeekend = (day === 0 || day === 6);
  
  if (isWeekend) {
    document.getElementById('badge-today-weekend').classList.remove('hidden');
    setDayMode('weekend');
  } else {
    document.getElementById('badge-today-weekday').classList.remove('hidden');
    setDayMode('weekday');
  }
}

const TR_MONTH_NAMES = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

function getLatestCheckTime(now) {
  const checks = [[5, 30], [11, 30], [17, 30], [22, 30]];
  let latest = null;
  for (const [h, m] of checks) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);
    if (d <= now) {
      latest = d;
    }
  }
  if (!latest) {
    latest = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22, 30, 0, 0);
  }
  return latest;
}

function isTariffDateToday(tariffDateStr, now) {
  if (!tariffDateStr) return false;
  const day = now.getDate();
  const monthName = TR_MONTH_NAMES[now.getMonth()];
  const regex = new RegExp(`\\b0?${day}\\s+${monthName}\\b`, 'i');
  return regex.test(tariffDateStr);
}

function formatTariffText(dateStr, fallbackText) {
  const str = (dateStr || fallbackText || '').trim();
  if (!str) return 'Güncel Tarife';
  const match = str.match(/^(\d+\s+[^\d\s]+)/);
  const clean = match ? match[1] : str;
  return `✓ ${clean} Tarifesi`;
}

function updateTariffBadge() {
  const badgeEl = document.getElementById('tariff-badge');
  const subtextEl = document.getElementById('tariff-subtext');
  if (!badgeEl || !subtextEl) return;

  const rawTariffDate = (currentDayMode === 'weekday')
    ? scheduleData?.metadata?.activeTariffDate
    : scheduleData?.metadata?.weekendTariffDate;
  const fallback = (currentDayMode === 'weekday') ? "23 Kasım" : "28 Kasım";

  badgeEl.textContent = formatTariffText(rawTariffDate, fallback);

  const isOnline = (typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean')
    ? navigator.onLine
    : true;

  if (isOnline) {
    badgeEl.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950 text-emerald-400 border border-emerald-800/60";
    subtextEl.className = "text-[10px] text-slate-400 mt-0.5";
    subtextEl.textContent = (currentDayMode === 'weekday') ? "Hafta İçi Yürürlük" : "Hafta Sonu Yürürlük";
  } else {
    // Offline tazelik kontrolü
    const now = new Date();
    const isToday = isTariffDateToday(rawTariffDate, now);

    if (isToday) {
      badgeEl.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950 text-emerald-400 border border-emerald-800/60";
      subtextEl.className = "text-[10px] text-slate-400 mt-0.5";
      subtextEl.textContent = "Çevrimdışı · Bugünün tarifesi yüklü";
    } else {
      let lastSyncedStr = null;
      try {
        lastSyncedStr = localStorage.getItem('lastSyncedAt');
      } catch (err) {}

      const syncDate = lastSyncedStr ? new Date(lastSyncedStr) : null;
      const latestCheck = getLatestCheckTime(now);

      if (syncDate && !isNaN(syncDate.getTime()) && syncDate >= latestCheck) {
        const hh = String(syncDate.getHours()).padStart(2, '0');
        const mm = String(syncDate.getMinutes()).padStart(2, '0');
        badgeEl.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950 text-emerald-400 border border-emerald-800/60";
        subtextEl.className = "text-[10px] text-slate-400 mt-0.5";
        subtextEl.textContent = `Çevrimdışı · Tarife güncel (${hh}:${mm}'de doğrulandı)`;
      } else {
        // Uyarı - Kehribar (amber) rengi
        badgeEl.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-950/80 text-amber-300 border border-amber-600/60";
        subtextEl.className = "text-[10px] text-amber-400/90 mt-0.5 font-medium";
        if (syncDate && !isNaN(syncDate.getTime())) {
          const day = syncDate.getDate();
          const monthName = TR_MONTH_NAMES[syncDate.getMonth()];
          const hh = String(syncDate.getHours()).padStart(2, '0');
          const mm = String(syncDate.getMinutes()).padStart(2, '0');
          subtextEl.textContent = `Çevrimdışı · Son kontrol: ${day} ${monthName} ${hh}:${mm} (Güncellenmiş olabilir)`;
        } else {
          subtextEl.textContent = "Çevrimdışı · Son kontrol: Bilinmiyor (Güncellenmiş olabilir)";
        }
      }
    }
  }
}

function setDayMode(mode) {
  currentDayMode = mode;
  
  // If user switched to weekend, automatically switch to c8
  if (currentDayMode === 'weekend') {
    if (activeLineId === 'c10') activeLineId = 'c8';
  } else {
    // If switched back to weekday, default to user's primary morning line c10
    activeLineId = 'c10';
  }
  
  applyLineTheme(activeLineId);

  // Update toggle button styles
  const btnWeekday = document.getElementById('btn-mode-weekday');
  const btnWeekend = document.getElementById('btn-mode-weekend');
  
  if (mode === 'weekday') {
    btnWeekday.className = "flex-1 py-2 text-xs font-semibold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 bg-emerald-600 text-white shadow-md";
    btnWeekend.className = "flex-1 py-2 text-xs font-semibold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200";
  } else {
    btnWeekend.className = "flex-1 py-2 text-xs font-semibold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 bg-emerald-600 text-white shadow-md";
    btnWeekday.className = "flex-1 py-2 text-xs font-semibold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200";
  }

  // Update header tariff badge dynamically
  updateTariffBadge();

  activeDirectionIndex = 0;
  renderApp();
  updateLiveTimes();
}

function selectLine(lineId) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try {
      navigator.vibrate(10);
    } catch (e) {}
  }

  if (!scheduleData || !scheduleData.lines[lineId]) return;
  const line = scheduleData.lines[lineId];

  if (currentDayMode === 'weekend' && !line.hasWeekend) {
    return;
  }

  activeLineId = lineId;
  applyLineTheme(lineId);
  activeDirectionIndex = 0;
  renderApp();
  updateLiveTimes();
}

function toggleDirection() {
  const line = scheduleData?.lines[activeLineId];
  if (!line || !line.directions) return;
  activeDirectionIndex = (activeDirectionIndex === 0) ? 1 : 0;
  renderApp();
  updateLiveTimes();
}

function selectDirection(index) {
  activeDirectionIndex = index;
  renderApp();
  updateLiveTimes();
}

function renderApp() {
  if (!scheduleData) return;

  updateTariffBadge();
  renderLinePills();
  renderDirectionTabs();
  renderAllTimesGrid();
}

const TURKISH_DAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function isViewingToday() {
  const now = new Date();
  const day = now.getDay();
  const isRealWeekend = (day === 0 || day === 6);
  return (isRealWeekend && currentDayMode === 'weekend') || (!isRealWeekend && currentDayMode === 'weekday');
}

function renderLinePills() {
  const container = document.getElementById('line-pills');
  container.innerHTML = '';

  // Hafta sonu ise Ç-10'u tamamen filtrele
  const lines = Object.values(scheduleData.lines).filter(line => {
    return (currentDayMode === 'weekday') || line.hasWeekend;
  });

  // Sort by priority (c10 first)
  lines.sort((a, b) => a.priority - b.priority);

  // Set grid columns dynamically (2 columns for weekend, 3 for weekday)
  container.className = `grid gap-2 ${lines.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`;

  lines.forEach(line => {
    const isSelected = line.id === activeLineId;

    const btn = document.createElement('button');
    btn.onclick = () => selectLine(line.id);

    let baseClass = "line-pill-btn p-2.5 rounded-2xl flex flex-col items-center justify-center border text-center relative ";
    if (isSelected) {
      baseClass += "is-active";
    } else {
      baseClass += "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-95";
    }

    btn.className = baseClass;

    btn.innerHTML = `
      <div class="line-pill-code flex items-center text-xs font-bold font-mono">
        ${line.code}
      </div>
      <div class="line-pill-name text-[10px] text-slate-400 truncate max-w-full mt-0.5">
        ${line.name.split('-')[1]?.trim() || line.name}
      </div>
    `;

    container.appendChild(btn);
  });

  // Note for line priority
  const noteEl = document.getElementById('line-status-note');
  if (noteEl) noteEl.textContent = "";
}

function renderDirectionTabs() {
  const line = scheduleData?.lines[activeLineId];
  if (!line) return;

  const tabsContainer = document.getElementById('direction-tabs');
  tabsContainer.innerHTML = '';

  line.directions.forEach((dir, idx) => {
    const isSelected = idx === activeDirectionIndex;
    const btn = document.createElement('button');
    btn.onclick = () => selectDirection(idx);

    let cls = "direction-tab-btn py-2 px-3 rounded-lg text-xs font-semibold flex flex-col items-center justify-center ";
    if (isSelected) {
      cls += "is-active";
    } else {
      cls += "text-slate-400 hover:text-slate-200 border border-transparent";
    }
    btn.className = cls;

    btn.innerHTML = `
      <span class="truncate max-w-full">${dir.title}</span>
    `;

    tabsContainer.appendChild(btn);
  });

  const activeDir = line.directions[activeDirectionIndex];
  document.getElementById('direction-subtitle').textContent = `Güzergah: ${activeDir.subTitle}`;
  document.getElementById('active-line-badge').textContent = `${line.code} • ${activeDir.title.split(' ')[0]}`;
}

function getActiveTimesList() {
  const line = scheduleData?.lines[activeLineId];
  if (!line) return [];
  const dir = line.directions[activeDirectionIndex];
  if (!dir) return [];
  return (currentDayMode === 'weekday') ? (dir.weekday || []) : (dir.weekend || []);
}

function getActiveTimeBadges() {
  const line = scheduleData?.lines[activeLineId];
  if (!line) return {};
  const dir = line.directions[activeDirectionIndex];
  if (!dir) return {};
  return (currentDayMode === 'weekday') ? (dir.timeBadges || {}) : (dir.weekendBadges || {});
}

function renderAllTimesGrid() {
  const times = getActiveTimesList();
  const timeBadges = getActiveTimeBadges();
  const grid = document.getElementById('all-times-grid');
  grid.innerHTML = '';

  document.getElementById('total-count-badge').textContent = `${times.length} sefer`;

  if (times.length === 0) {
    grid.innerHTML = '<div class="col-span-4 text-center py-6 text-xs text-slate-500">Bu gün ve yönde sefer bulunamadı.</div>';
    return;
  }

  const viewingToday = isViewingToday();
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let firstUpcomingElement = null;

  times.forEach(t => {
    const [h, m] = t.split(':').map(Number);
    const timeMinutes = h * 60 + m;
    const isPast = viewingToday && (timeMinutes < currentMinutes);
    const isNow = viewingToday && (timeMinutes === currentMinutes);
    const badgeText = timeBadges[t];

    const div = document.createElement('div');
    let cls = "py-1.5 px-2 rounded-xl text-center font-mono text-xs font-medium border relative flex flex-col items-center justify-center min-h-[44px] transition-colors ";
    if (isNow) {
      cls += "time-pill-now animate-pulse";
    } else if (isPast) {
      cls += "bg-slate-950/40 text-slate-600 border-slate-900";
    } else {
      cls += "bg-slate-800/80 text-slate-200 border-slate-700/60 hover:border-slate-500";
    }
    div.className = cls;

    if (badgeText) {
      div.innerHTML = `<span>${t}</span><span class="inline-block text-[8px] font-sans font-extrabold px-1 py-0.2 rounded ${isNow ? 'bg-slate-950 text-amber-300' : 'bg-amber-400 text-slate-950'} shadow-sm leading-tight mt-0.5">${badgeText}</span>`;
    } else {
      div.textContent = t;
    }
    grid.appendChild(div);

    // İlk gelecek seferi (veya tam şu an olan seferi) işaretle
    if (viewingToday && !firstUpcomingElement && timeMinutes >= currentMinutes) {
      firstUpcomingElement = div;
    }
  });

  // Scroll container'ı bul ve ilk gelecek seferin satırına kaydır
  if (firstUpcomingElement) {
    const scrollContainer = grid.parentElement; // .scroll-left-container
    // requestAnimationFrame ile DOM'un çizilmesini bekle, sonra kaydır
    requestAnimationFrame(() => {
      const gridTop = grid.getBoundingClientRect().top;
      const elementTop = firstUpcomingElement.getBoundingClientRect().top;
      const offset = elementTop - gridTop;
      scrollContainer.scrollTop = offset;
    });
  }
}

function updateLiveTimes() {
  const now = new Date();
  // Update live clock
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;

  const viewingToday = isViewingToday();
  const liveTimelineActive = document.getElementById('live-timeline-active');
  const liveTimelinePreview = document.getElementById('live-timeline-preview');

  if (!viewingToday) {
    if (liveTimelineActive) liveTimelineActive.classList.add('hidden');
    if (liveTimelinePreview) {
      liveTimelinePreview.classList.remove('hidden');
      const currentDayName = TURKISH_DAYS[now.getDay()];
      const previewNameEl = document.getElementById('preview-current-day-name');
      if (previewNameEl) previewNameEl.textContent = currentDayName;
    }
    return;
  } else {
    if (liveTimelineActive) liveTimelineActive.classList.remove('hidden');
    if (liveTimelinePreview) liveTimelinePreview.classList.add('hidden');
  }

  const times = getActiveTimesList();
  const timeBadges = getActiveTimeBadges();
  const prevBadgeEl = document.getElementById('prev-time-badge');
  const currentBadgeEl = document.getElementById('current-time-badge');
  const nextBadgeEl = document.getElementById('next-time-badge');

  if (times.length === 0) {
    document.getElementById('prev-time').textContent = '--:--';
    document.getElementById('prev-diff').textContent = 'Sefer yok';
    document.getElementById('current-time').textContent = '--:--';
    document.getElementById('current-countdown').textContent = '--';
    document.getElementById('next-time').textContent = '--:--';
    document.getElementById('next-diff').textContent = '--';
    document.getElementById('now-departing-badge').classList.add('hidden');
    if (prevBadgeEl) prevBadgeEl.classList.add('hidden');
    if (currentBadgeEl) currentBadgeEl.classList.add('hidden');
    if (nextBadgeEl) nextBadgeEl.classList.add('hidden');
    return;
  }

  const currentTotalSecs = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentTotalMins = now.getHours() * 60 + now.getMinutes();

  // Parse all times into minutes
  const parsed = times.map(t => {
    const [h, m] = t.split(':').map(Number);
    return {
      raw: t,
      mins: h * 60 + m,
      secs: (h * 60 + m) * 60
    };
  });

  // Find:
  // 1. Önceki sefer: The last departure where mins < currentTotalMins
  // 2. Sıradaki sefer: The first departure where mins >= currentTotalMins
  // 3. Sonraki sefer: The one after that

  let prev = null;
  let current = null;
  let next = null;

  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i].mins >= currentTotalMins) {
      current = parsed[i];
      if (i > 0) prev = parsed[i - 1];
      if (i + 1 < parsed.length) next = parsed[i + 1];
      break;
    }
  }

  // If all departures have passed for today
  if (!current) {
    prev = parsed[parsed.length - 1];
    document.getElementById('prev-time').textContent = prev.raw;
    const diffMins = currentTotalMins - prev.mins;
    document.getElementById('prev-diff').textContent = `${diffMins} dk önce kalktı`;

    document.getElementById('current-time').textContent = 'BİTTİ';
    document.getElementById('current-countdown').textContent = 'Bugünkü son sefer yapıldı';
    document.getElementById('current-countdown').className = "text-sm font-semibold text-slate-400";
    document.getElementById('next-time').textContent = parsed[0].raw;
    document.getElementById('next-diff').textContent = 'Yarın ilk sefer';
    document.getElementById('now-departing-badge').classList.add('hidden');
    if (prevBadgeEl) {
      if (timeBadges[prev.raw]) {
        prevBadgeEl.textContent = timeBadges[prev.raw];
        prevBadgeEl.classList.remove('hidden');
      } else {
        prevBadgeEl.classList.add('hidden');
      }
    }
    if (currentBadgeEl) currentBadgeEl.classList.add('hidden');
    if (nextBadgeEl) {
      if (timeBadges[parsed[0].raw]) {
        nextBadgeEl.textContent = timeBadges[parsed[0].raw];
        nextBadgeEl.classList.remove('hidden');
      } else {
        nextBadgeEl.classList.add('hidden');
      }
    }
    return;
  }

  // Önceki Sefer
  if (prev) {
    document.getElementById('prev-time').textContent = prev.raw;
    const diffMins = currentTotalMins - prev.mins;
    document.getElementById('prev-diff').textContent = `${diffMins} dk önce kalktı`;
    if (prevBadgeEl) {
      if (timeBadges[prev.raw]) {
        prevBadgeEl.textContent = timeBadges[prev.raw];
        prevBadgeEl.classList.remove('hidden');
      } else {
        prevBadgeEl.classList.add('hidden');
      }
    }
  } else {
    document.getElementById('prev-time').textContent = '--:--';
    document.getElementById('prev-diff').textContent = 'Günün ilk seferi bekleniyor';
    if (prevBadgeEl) prevBadgeEl.classList.add('hidden');
  }

  // SIRADAKİ SEFER
  document.getElementById('current-time').textContent = current.raw;
  const diffSecs = current.secs - currentTotalSecs;
  const diffMins = Math.floor(diffSecs / 60);

  const badgeNow = document.getElementById('now-departing-badge');
  const countdownEl = document.getElementById('current-countdown');

  if (currentBadgeEl) {
    if (timeBadges[current.raw]) {
      currentBadgeEl.textContent = timeBadges[current.raw];
      currentBadgeEl.classList.remove('hidden');
    } else {
      currentBadgeEl.classList.add('hidden');
    }
  }

  if (current.mins === currentTotalMins) {
    // Tam kalkış anı!
    badgeNow.classList.remove('hidden');
    countdownEl.textContent = 'ŞİMDİ';
    countdownEl.className = "text-xl font-black font-mono theme-countdown-text animate-pulse";
  } else {
    badgeNow.classList.add('hidden');
    if (diffMins <= 0) {
      countdownEl.textContent = '< 1 dk kaldı';
    } else {
      countdownEl.textContent = `${diffMins} dk kaldı`;
    }
    countdownEl.className = "text-xl font-bold font-mono theme-countdown-text";
  }

  // Sonraki Sefer
  if (next) {
    document.getElementById('next-time').textContent = next.raw;
    const nextDiffMins = next.mins - currentTotalMins;
    document.getElementById('next-diff').textContent = `${nextDiffMins} dk sonra`;
    if (nextBadgeEl) {
      if (timeBadges[next.raw]) {
        nextBadgeEl.textContent = timeBadges[next.raw];
        nextBadgeEl.classList.remove('hidden');
      } else {
        nextBadgeEl.classList.add('hidden');
      }
    }
  } else {
    document.getElementById('next-time').textContent = '--:--';
    document.getElementById('next-diff').textContent = 'Son sefer';
    if (nextBadgeEl) nextBadgeEl.classList.add('hidden');
  }
}

function setupEventListeners() {
  window.addEventListener('online', async () => {
    await loadSchedule();
    updateTariffBadge();
    renderApp();
    updateLiveTimes();
  });
  window.addEventListener('offline', () => {
    updateTariffBadge();
  });
}

// PDF Modal Controls
function openPdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  const downloadLink = document.getElementById('pdf-download-link');
  const title = document.getElementById('pdf-modal-title');

  let pdfUrl = (currentDayMode === 'weekday')
    ? (scheduleData?.metadata?.pdfWeekdayUrl || 'hafta-ici.pdf')
    : (scheduleData?.metadata?.pdfWeekendUrl || 'hafta-sonu.pdf');

  // Use local relative copy for instant rendering
  const localPdf = (currentDayMode === 'weekday') ? 'hafta-ici.pdf' : 'hafta-sonu.pdf';

  iframe.src = localPdf;
  downloadLink.href = pdfUrl;
  const wDate = formatTariffText(scheduleData?.metadata?.activeTariffDate, "23 Kasım").replace('✓ ', '');
  const weDate = formatTariffText(scheduleData?.metadata?.weekendTariffDate, "28 Kasım").replace('✓ ', '');
  title.textContent = (currentDayMode === 'weekday') ? `Hafta İçi Resmi Tarifesi (${wDate})` : `Hafta Sonu Resmi Tarifesi (${weDate})`;

  modal.classList.remove('hidden');
}

function closePdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  iframe.src = '';
  modal.classList.add('hidden');
}
