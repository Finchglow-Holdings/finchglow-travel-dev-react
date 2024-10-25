// OneSignalServiceWorker.js

// Import OneSignal SDK
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// This will allow you to handle the notification when the user clicks on it
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://finchglowtravels.com') // Change this URL as needed
    );
});
