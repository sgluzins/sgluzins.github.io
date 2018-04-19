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
    'assets/icofont/css/icofont.css',
    'assets/icofont/fonts/icofont.eot',
    'assets/icofont/fonts/icofont.svg',
    'assets/icofont/fonts/icofont.ttf',
    'assets/icofont/fonts/icofont.woff',
    'assets/font-awesome-4.6.3/css/font-awesome.min.css',
    'assets/font-awesome-4.6.3/fonts/font-awesome-webfont.eot',
    'assets/font-awesome-4.6.3/fonts/font-awesome-webfont.svg',
    'assets/font-awesome-4.6.3/fonts/font-awesome-webfont.tff',
    'assets/font-awesome-4.6.3/fonts/font-awesome-webfont.woff',
    'assets/font-awesome-4.6.3/fonts/font-awesome-webfont.woff2',
    'assets/font-awesome-4.6.3/fonts/FontAwesome.otf'
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