import React, { useEffect } from "react";

const ZohoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = "https://salesiq.zohopublic.com/widget";

    const inlineScript = document.createElement("script");
    inlineScript.type = "text/javascript";
    inlineScript.id = "zsiqchat";
    inlineScript.innerHTML = `var $zoho = $zoho || {}; 
      $zoho.salesiq = $zoho.salesiq || { 
        widgetcode: "siq5079fd8eed1b9ab8ecaef12a3cdd8f90059a7a82953d91b3cf988f4998b818eb", 
        values: {}, 
        ready: function () { } 
      }; 
      var d = document; 
      s = d.createElement("script"); 
      s.type = "text/javascript"; 
      s.id = "zsiqscript"; 
      s.defer = true; 
      s.src = "https://salesiq.zohopublic.com/widget"; 
      t = d.getElementsByTagName("script")[0]; 
      t.parentNode.insertBefore(s, t);`;

    document.body.appendChild(inlineScript);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(inlineScript);
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default ZohoChat;
