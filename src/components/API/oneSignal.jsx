import "./OneSignalServiceWorker"
import { useEffect } from "react";

let initialized = false; // Flag to check if OneSignal is initialized

const OneSignal = () => {
  useEffect(() => {
    if (!initialized && window.OneSignal) {
      initialized = true; // Set flag to true to prevent re-initialization
      window.OneSignal.push(function () {
        window.OneSignal.init({
          appId: "f4cf0f43-f0e1-4b25-8ee0-557384ac63a0",
          safari_web_id:
            "web.onesignal.auto.1560ab56-4a76-4fcb-b8cd-3f5423fe1d6c",
          allowLocalhostAsSecureOrigin: true,
        });
      });
    }
  }, []);

  return null; // This component does not render anything
};

export default OneSignal;
