// App.js
import React, { useEffect } from "react";
import { initializeOneSignal } from "./OneSignalSetup";
import Homepage from "./components/hompage";
import ZohoChat from "./components/zohoChat";
import "./App.css";

function App() {
  // Load the OneSignal script dynamically
  const loadOneSignal = () => {
    return new Promise((resolve, reject) => {
      if (typeof window.OneSignal === "undefined") {
        const script = document.createElement("script");
        script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  };

  useEffect(() => {
    loadOneSignal()
      .then(() => {
        initializeOneSignal();
      })
      .catch((error) => {
        console.error("Failed to load OneSignal SDK:", error);
      });
  }, []);

  return (
    <>
      <ZohoChat />
      <Homepage />
    </>
  );
}

export default App;
