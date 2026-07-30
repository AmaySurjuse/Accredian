"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";

export const HeroSection = () => {
  const { openModal } = useModal();

  const features = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
  ];

  return (
    <section id="home" className="relative bg-slate-50/70 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      
      {/* Background Liquid Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047FF]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Features & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse"></span>
              ENTERPRISE CAPABILITY BUILDING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Next-Gen <span className="text-[#0047FF]">Expertise</span>
              <br />
              For Your <span className="text-[#0047FF]">Enterprise</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl leading-relaxed">
              Cultivate high-performance teams through expert-led, bespoke capability programs.
            </p>

            {/* Glassmorphism Feature Checkmark Pills */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              {features.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm shadow-blue-900/5 text-slate-800 font-bold text-sm md:text-base hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-200">
                    ✓
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={openModal}
                className="bg-[#0047FF] text-white px-8 py-4 rounded-xl text-base font-extrabold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer transform hover:-translate-y-0.5"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column: Executives Photo in Liquid Glass Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/80 p-2 bg-white/40 backdrop-blur-md">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero_execs.jpg"
                  alt="Next-Gen Enterprise Executives"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};