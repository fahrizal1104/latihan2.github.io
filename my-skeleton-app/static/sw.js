const cacheName = "SCOREDEV"
const preCache = [
  "/",
  "/manifest.json",
  "/favicon.png",
  "/icons/favicon.png",
  "/icons/javascript.png",
  "/icons/javascript2.png",
  "/sw.js"
      // Jika ada file JS
];


self.addEventListener("install", (e) => {
  console.log("service worker installed")

  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName)
      cache.addAll(preCache)
    })(),
  )
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const cache = await caches.open(cacheName)
      const resCache = await cache.match(e.request)

      if (resCache) return resCache

      try {
        const res = await fetch(e.request)

        cache.put(e.request, res.clone())
        return res
      } catch (error) {
        console.log(error)
      }
    })(),
  )
})
