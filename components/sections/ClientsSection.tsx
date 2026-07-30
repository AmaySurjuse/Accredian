"use client";

import React, { useMemo } from "react";
import Image from "next/image";

export const ClientsSection = React.memo(() => {
  const partners = useMemo(
    () => [
      { name: "Reliance", src: "/reliance-industries-logo-1.svg", className: "h-44 md:h-56 w-auto object-contain" },
      { name: "IBM", src: "/ibm (1).svg", className: "h-10 md:h-12 w-auto object-contain" },
      { name: "Bayer", src: "/bayer-ag-logo.svg", className: "h-12 md:h-16 w-auto object-contain" },
      { name: "ADP", src: "/adp-1.svg", className: "h-11 md:h-14 w-auto object-contain" },
    ],
    []
  );

  const marqueePartners = useMemo(
    () => [...partners, ...partners, ...partners, ...partners, ...partners, ...partners],
    [partners]
  );

  return (
    <section id="clients" className="py-24 bg-slate-50/70 relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Ambient Liquid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0047FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
            INDUSTRY PARTNERSHIPS
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Proven <span className="text-[#0047FF]">Partnerships</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Successful Collaborations With the <span className="text-[#0047FF]">Industry's Best</span>
          </p>
        </div>
      </div>

      {/* Marquee Container with Soft Liquid Edge Fade */}
      <div className="relative w-full overflow-hidden py-8 bg-transparent">
        
        {/* Soft Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-right gap-16 md:gap-24">
          {marqueePartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[180px] md:min-w-[240px] h-36 md:h-48 p-3 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={240}
                height={100}
                className={partner.className}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

ClientsSection.displayName = "ClientsSection";
