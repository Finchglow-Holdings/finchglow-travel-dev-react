// OneSignalSetup.js
export function initializeOneSignal() {
  // Ensure the OneSignal SDK is available before initializing
  if (typeof window.OneSignal === "undefined") {
    console.error("OneSignal SDK is not loaded.");
    return;
  }

  // Initialize OneSignal with your configuration
  window.OneSignal.init({
    appId: "f4cf0f43-f0e1-4b25-8ee0-557384ac63a0",
    safari_web_id: "web.onesignal.auto.1560ab56-4a76-4fcb-b8cd-3f5423fe1d6c",
    allowLocalhostAsSecureOrigin: true, // Enables testing on localhost
  });

  // Use push to queue the slidedown prompt after SDK is ready
  window.OneSignal.push(() => {
    window.OneSignal.showSlidedownPrompt().catch((error) => {
      console.error("Error displaying OneSignal slidedown prompt:", error);
    });
  });

  // Log subscription status change
  window.OneSignal.on("subscriptionChange", (isSubscribed) => {
    console.log("The user subscription status has changed:", isSubscribed);
  });
}
