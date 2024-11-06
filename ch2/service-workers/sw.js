let counter = 0;

self.oninstall = () => {
  console.log('Service Worker installation');
};

self.onactivate = (event) => {
  console.log('Service Worker activation');
  event.waitUntil(self.clients.claim());
};

self.onfetch = (event) => {
  console.log('Service Worker - Fetch');

  if (event.request.url.endWith('/data.json')) {
    counter++;
    event.respondWith(
      new Response(JSON.stringify({ counter })), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return;
  }

  event.respondWith(fetch(event.request));
};
