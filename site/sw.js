importScripts('./uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
  event.respondWith(
    sw.fetch(event)
  ).catch(
    (err) => new Response(err.stack, { status: 500 })
  )
);
