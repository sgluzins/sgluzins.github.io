importScripts('/cache-polyfill.js');

self.addEventListener('install', (e) => {
 e.waitUntil(
   caches.open('sgluzins').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/stylesheet.css',
       '/assets/*'
     ]);
   })
 );
});

self.addEventListener('fetch', () => {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    }));
});