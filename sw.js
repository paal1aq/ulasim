const CACHE_NAME = 'canakkale-ulasim-v2';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './schedule.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon.svg',
  './hafta-ici.pdf',
  './hafta-sonu.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
