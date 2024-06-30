// MapEmbed.js
import React from "react";

const MapEmbed = () => {
  return (
    <div className="bg-gray-500" style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6279390435966!2d3.41154107502995!3d6.441799524107279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9224f0f99b85%3A0xc158bc9efc3dc764!2sFinchglow%20Travels!5e0!3m2!1sen!2sng!4v1718716057424!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
