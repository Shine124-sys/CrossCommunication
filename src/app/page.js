"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import WebCall from "@/app/WebCall/page";
import YoutubeDubbing from "@/app/YoutubeVideo/page";
import LiveDubb from "@/app/LiveDubb/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`relative h-screen w-full ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-16 ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"} 
        backdrop-blur-md flex justify-between items-center px-[10%] transition-all duration-300`}
      >
        <div className="text-lg font-bold">CrossTalk</div>

        <div className="flex space-x-6">
          <div className="text-lg font-semibold">Home</div>
          <div className="text-lg font-semibold">About</div>
          <div className="text-lg font-semibold">Contact</div>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border-gray-300"
            }`}
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-all duration-300"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Cross<span className="text-white">Talk</span>
        </h1>
      </div>

      <section className="hero text-center p-10 mt-5">
        <h2 className="text-3xl font-semibold">Break Language Barriers</h2>
        <p className="text-lg text-gray-300">
          (Real-time translation for video calls, YouTube, and more...)
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mx-auto max-w-5xl">
        {[
          {
            title: "WebCall Live Translator",
            description: "Translate speech in real-time during live video calls.",
            link: "/WebCall",
            color: "from-purple-600 to-indigo-700",
          },
          {
            title: "YouTube Video Translator",
            description: "Convert YouTube video audio into your preferred language.",
            link: "/YoutubeVideo",
            color: "from-green-600 to-teal-700",
          },
          {
            title: "Stream Dubbing",
            description: "Translate text into multiple languages instantly.",
            link: "/LiveDubb",
            color: "from-blue-600 to-cyan-700",
          },
          {
            title: "Video Dubbing",
            description: "Translate text into multiple languages instantly.",
            link: "/machinetrans",
            color: "from-blue-600 to-cyan-700",
          },
          {
            title: "Movie Dubbing",
            description: "Translate text into multiple languages instantly.",
            link: "/machinetrans",
            color: "from-blue-600 to-cyan-700",
          },
          {
            title: "Audio Dubbing",
            description: "Convert written text into natural-sounding speech.",
            link: "/tts",
            color: "from-red-600 to-pink-700",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.color} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform`}
          >
            <h3 className="text-xl text-yellow-300">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
            <Link href={item.link} className="mt-4 inline-block bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">
  Start
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}
