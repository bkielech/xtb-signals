self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
self.addEventListener('message', e => {
  if (e.data?.type === 'SIGNAL') {
    const s = e.data.signal;
    self.registration.showNotification(s.title, {
      body: s.body, icon: 'icon.svg', badge: 'icon.svg',
      tag: 'sig-' + Date.now(), silent: true, vibrate: [],
      requireInteraction: true, data: s
    });
  }
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(cs => cs.length ? cs[0].focus() : clients.openWindow('/')));
});
