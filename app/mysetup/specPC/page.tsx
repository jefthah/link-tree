"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hyperspeed from "@/components/Hyperspeed";
import GlitchText from "@/components/GlitchText";

export default function SpecPC() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Hyperspeed
          effectOptions={
            {
              /* Hyperspeed config */
            }
          }
        />
      </div>

      {/* Swiper Section */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={true}
        className="w-full h-full"
      >
        {/* Slide 1 - Spec PC */}
        <SwiperSlide>
          <div className="relative w-screen h-screen flex flex-col overflow-hidden">
            {/* Title and swipe info */}
            <div className="pt-10 flex items-center justify-center z-10 relative">
              <div className="flex flex-col items-center">
                <GlitchText
                  speed={1}
                  enableShadows
                  enableOnHover
                  className="text-white font-bold text-4xl md:text-6xl"
                >
                  PC Specification
                </GlitchText>
                <div className="block md:hidden mt-4 text-center text-white text-base animate-blink-slow">
                  Swipe ke kiri →
                </div>
              </div>
            </div>

            {/* Content Cards */}
            <div className="flex-1 overflow-y-auto relative max-w-7xl mx-auto pt-10 px-8 z-20 pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  image="/image/pc/mobo.jpg"
                  title="Motherboard"
                  description="ASRock B760M PRO RS DDR5 motherboard."
                />
                <Card
                  image="/image/pc/prosesor.jpg"
                  title="Processor"
                  description="Intel Core 13th Gen Unlocked processor."
                />
                <Card
                  image="/image/pc/vga.jpg"
                  title="Graphics Card"
                  description="INNO3D RTX 4060 Dual Fan Graphics Card."
                />
                <Card
                  image="/image/pc/ram.jpg"
                  title="RAM"
                  description="KLEVV Bolt V DDR5 6000MHz RAM."
                />
                <Card
                  image="/image/pc/ssd.png"
                  title="Storage"
                  description="Apacer M.2 PCIe NVMe 2280 SSD."
                />
                <Card
                  image="/image/pc/psu.jpg"
                  title="PSU"
                  description="Lupa pokoknya 80+ Bronze PSU."
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Monitor + Catatan */}
        <SwiperSlide>
          <div className="relative w-screen h-screen flex flex-col overflow-hidden">
            {/* Title */}
            <div className="pt-10 flex items-start justify-start z-10 relative max-w-7xl mx-auto px-8">
              <h2 className="text-white font-bold text-4xl md:text-5xl">
                Monitor
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto relative max-w-7xl mx-auto pt-10 px-8 z-20 pb-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-20 relative">
                {/* Left - Monitors */}
                <div className="flex flex-col gap-10 w-full md:w-1/2">
                  <Card
                    image="/image/pc/monitor.jpg"
                    title="Main Monitor"
                    description="LG Ultragear 144Hz, 0.1ms response time."
                  />
                  <Card
                    image="/image/pc/monitor2.jpg"
                    title="Second Monitor"
                    description="Monitor sekunder untuk multitasking."
                  />
                </div>

                {/* Middle Divider */}
                <div className="hidden md:block w-px bg-gray-500 h-auto self-stretch"></div>

                {/* Right - Catatan */}
                <div className="flex w-full md:w-1/2 justify-center">
                  <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-gray-500 text-white text-center max-w-md">
                    <h3 className="text-2xl font-bold mb-4">Catatan</h3>
                    <p className="text-base leading-relaxed">
                      Untuk casing merek Antec tapi lupa ukuran, fan pakai
                      bawaan casing dan bawaan fan CPU. Untuk kebutuhan editing,
                      live streaming, gaming berat sudah oke.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

// Card Komponen
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
