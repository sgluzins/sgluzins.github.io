const URLS = [
    '/',
    'index.html',
    'stylesheet.css',
    'assets/az-sg.jpg',
    'assets/blue-bg.jpg',
    'assets/GWG-badge.png',
    'assets/pink-bg.jpg',
    'assets/sg copy.jpg',
    'assets/sg.jpg',
    'assets/sukigluzinski.png',
    'assets/icofont-dumbbell.png'
];

self.addEventListener('install', event => {
 event.waitUntil(
   caches.open('sg').then(cache => {
     return cache.addAll(URLS);
   })
 );
});

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});