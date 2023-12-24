const CACHE_NAME = "TikTok-clone-cache-v1";
const DYNAMIC_CACHE_NAME = "TikTok-clone-dynamic-cache";
const CACHE_EXPIRATION_DAYS = 7; // Set the cache expiration period in days
const CACHE_EXPIRATION_SECONDS = CACHE_EXPIRATION_DAYS * 24 * 60 * 60; // Convert days to seconds

const staticAssets = ["/"];

let deferredPrompt;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(staticAssets);
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

  // First, handle caching logic
  event.respondWith(
    fetch(request)
      .then(async (response) => {
        // Check if the response is partial before caching
        if (response.status === 200 && response.ok) {
          const cache = await caches.open(DYNAMIC_CACHE_NAME);
          cache.put(request, response.clone());
        }

        return response;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        return new Response("Offline content not available.");
      })
  );

  // Hide the splash screen once the content is loaded
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

// Periodically clean up old caches and set cache expiration
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

// Handle installation prompt
self.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Optionally, show your own custom UI to prompt the user
  // (e.g., a button that says "Add to Home Screen")

  // You can customize the UI as needed
  // Example: show a button or display a custom popup
  showInstallPrompt();
});

// Custom function to show installation prompt
function showInstallPrompt() {
  // Implement your custom UI logic here
  console.log("Show custom install prompt UI");
}
