// Self-unregistering service worker.
// The previous version of this site (Create React App default) registered a
// caching service worker. This replacement cleans up that registration and all
// of its caches so returning visitors immediately receive the current site
// instead of stale cached assets.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
