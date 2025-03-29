// WebCall.js
"use client";
import React, { useState } from "react";
import axios from "axios";

export default function WebCall() {
  const [offer, setOffer] = useState(null);
  const [srcLang, setSrcLang] = useState("en");
  const [tgtLang, setTgtLang] = useState("es");

  const startWebCall = async () => {
    try {
      const response = await axios.post("http://localhost:8000/offer", {
        sdp: offer,
        type: "offer",
        src_lang: srcLang,
        tgt_lang: tgtLang,
      });
      console.log("WebRTC Response:", response.data);
    } catch (error) {
      console.error("WebRTC Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Live WebCall Translator</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter WebRTC Offer"
          value={offer || ""}
          onChange={(e) => setOffer(e.target.value)}
          className="border px-4 py-2"
        />
        <button
          onClick={startWebCall}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Dubbing
        </button>
      </div>
    </div>
  );
}
