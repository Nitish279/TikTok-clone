const CACHE_NAME = "TikTok-clone-cache-v1";
const DYNAMIC_CACHE_NAME = "TikTok-clone-dynamic-cache";
const CACHE_EXPIRATION_DAYS = 7;
const CACHE_EXPIRATION_SECONDS = CACHE_EXPIRATION_DAYS * 24 * 60 * 60;

const staticAssets = [
  "/",
  "/index.html",
  "/static/css/main.chunk.css",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/favicon.ico",
  "/static/media/tiktok-logo-small.8fb50fcb18e1f9bc7082.webp",
  "/static/media/tiktok-logo.0148e250a3e768af5ea2.webp",
  "/manifest.json",
  "/proxy/https://randomuser.me/api/portraits/men/1.jpg",
  "/proxy/https://randomuser.me/api/portraits/women/2.jpg",
  "/proxy/https://randomuser.me/api/portraits/women/3.jpg",
  "/proxy/https://randomuser.me/api/portraits/men/4.jpg",
  "/proxy/https://randomuser.me/api/portraits/women/5.jpg",
  "/proxy/https://randomuser.me/api/portraits/men/6.jpg",
  "/proxy/https://randomuser.me/api/portraits/men/7.jpg",
  "/proxy/https://randomuser.me/api/portraits/women/8.jpg",
  "/proxy/https://randomuser.me/api/portraits/men/9.jpg",
  "/proxy/https://randomuser.me/api/portraits/women/10.jpg",
];

let deferredPrompt;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        staticAssets.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to fetch: ${url}`);
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error(`Failed to fetch and cache: ${url}`, error);
            });
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(request).then((response) => {
          if (response.ok) {
            const cacheCopy = response.clone();
            caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
              cache.put(request, cacheCopy);
            });
          }
          return response;
        })
      );
    })
  );

  event.waitUntil(
    (async function () {
      const response = await fetch(request);
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ action: "hideSplashScreen" });
        });
      });
    })()
  );
});

self.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallPrompt();
});

function showInstallPrompt() {
  console.log("Show custom install prompt UI");
  // Implement your custom UI logic here
}

// Cleanup old caches and set cache expiration
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});
