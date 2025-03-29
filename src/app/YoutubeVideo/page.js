// YoutubeDubbing.js
"use client"
import React, { useState } from "react";
import axios from "axios";

export default function YoutubeVideo() {
  const [videoUrl, setVideoUrl] = useState("");
  const [srcLang, setSrcLang] = useState("en");
  const [tgtLang, setTgtLang] = useState("es");
  const [translatedText, setTranslatedText] = useState("");
  const [audioFile, setAudioFile] = useState("");

  const translateYoutube = async () => {
    try {
      const response = await axios.post("http://localhost:8000/youtube-translate", {
        video_url: videoUrl,
        src_lang: srcLang,
        tgt_lang: tgtLang,
      });

      setTranslatedText(response.data.translated_text);
      setAudioFile(response.data.audio);
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">YouTube Video Translator</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="border px-4 py-2 mb-4 w-96"
      />
      <button
        onClick={translateYoutube}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      {translatedText && (
        <div className="mt-4">
          <p className="text-lg font-bold">Translated Text:</p>
          <p>{translatedText}</p>
          <audio controls className="mt-2">
            <source src={`http://localhost:8000/${audioFile}`} type="audio/wav" />
            Your browser does not support audio playback.
          </audio>
        </div>
      )}
    </div>
  );
}
