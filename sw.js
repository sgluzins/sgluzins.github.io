const URLS = [
    '/',
    '/index.html',
    '/stylesheet.css',
    '/assets/*'
];

self.addEventListener('install', e => {
 e.waitUntil(
   caches.open('sg').then(cache => {
     return cache.addAll(URLS);
   })
 );
});

self.addEventListener('fetch', () => {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});