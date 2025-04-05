// app/gear/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";
import GlitchText from "@/components/GlitchText";

export default function GearPage() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Background Hyperspeed */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Hyperspeed effectOptions={{}} />
      </div>

      {/* Title */}
      <div className="pt-10 flex items-center justify-center z-10 relative">
        <GlitchText
          speed={1}
          enableShadows
          enableOnHover
          className="text-white font-bold text-4xl md:text-6xl"
        >
          Gear Gaming
        </GlitchText>
      </div>

      {/* Card Grid */}
      <div className="relative max-w-7xl mx-auto pt-10 px-8 z-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            image="/image/gear/mouse.jpeg"
            title="Mouse"
            description="WL Mouse Beast X mini 35gr"
          />
          <Card
            image="/image/gear/keyboard.png"
            title="Keyboard"
            description="ATK 68 Hall Effect Keyboard"
          />
          <Card
            image="/image/gear/IEM.png"
            title="IEM"
            description="Truthear zero red"
          />
          <Card
            image="/image/gear/MIC.jpeg"
            title="MIC"
            description="Fifine Ampligame A8"
          />
          <Card
            image="/image/gear/headset.png"
            title="Headset"
            description="Logitech G735"
          />
          <Card
            image="/image/gear/mousepad.jpeg"
            title="Mouspad"
            description="Lamzu Mouspad"
          />
        </div>
      </div>
    </main>
  );
}

// Card Component
function Card({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-transparent bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl border border-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 mx-auto max-w-[700px] w-full">
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      <h3 className="text-white font-semibold text-2xl text-center">{title}</h3>
      <p className="text-gray-300 text-center mt-2 text-sm">{description}</p>
    </div>
  );
}
