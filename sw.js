const CACHE = 'prep-app-v2';
const FILES = ['./', './index.html', './manifest.json', './zxing.min.js', './icon-192.png', './icon-512.png', './icon-180.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // Las consultas a otros dominios (base de datos de alimentos) van directas a la red y no se guardan en caché
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then((r) => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then((cache) => cache.put(e.request, c)); } return r; }).catch(() => caches.match(e.request).then((r) => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
