const CACHE='skiory-beta-1.0.1';
const ASSETS=[
  './',
  './index.html',
  './v3.css?v=20260916c',
  './skiory-fix.css?v=20260916c',
  './skiory-beta.css?v=20260916c',
  './v3-data.js?v=20260916c',
  './skiory-brand.js?v=20260916c',
  './v3-app.js?v=20260916c',
  './skiory-beta.js?v=20260916c',
  './manifest.webmanifest?v=20260916c',
  './icons/icon-192.png?v=20260916c',
  './icons/icon-512.png?v=20260916c'
];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});
self.addEventListener('activate',e=>{
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  ]));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}return r;}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request)));
});
