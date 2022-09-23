importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "c1dbec2e2593fa1e8e5644f98b3d34d0"
  },
  {
    "url": "index.html",
    "revision": "26a712662e4f06b3fcbb3d2a0d1ef9da"
  },
  {
    "url": "js/app.js",
    "revision": "fc9fea28836f02ee455d42c936fd1ee5"
  }
]);