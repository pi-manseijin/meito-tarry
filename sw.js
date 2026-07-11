const CACHE_NAME = 'tally-sheet-v1';

// インストール時に起動
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// アクティベート時に起動
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// オンライン優先で普通に通信するフェッチイベント
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
