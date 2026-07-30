"use client";

import React, { useMemo } from "react";

export const ProcessSection = React.memo(() => {
  const catSteps = useMemo(
    () => [
      {
        letter: "C",
        title: "Customization",
        subtitle: "Bespoke Curriculum Design",
        description:
          "We don't believe in one-size-fits-all. We start by deeply understanding your enterprise goals, current tech stack, and specific workforce requirements to build a bespoke curriculum.",
        badgeColor: "bg-blue-50 text-[#0047FF] border-blue-100",
      },
      {
        letter: "A",
        title: "Assessment",
        subtitle: "Skill-Gap Analysis",
        description:
          "Through rigorous baseline testing and skill-gap analysis, we map out the exact areas of improvement required for your teams before the training even begins.",
        badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      },
      {
        letter: "T",
        title: "Transformation",
        subtitle: "Project-Ready Results",
        description:
          "We deploy expert-led, cohort-based training programs that shift your workforce from their current baseline to high-performing, project-ready specialists.",
        badgeColor: "bg-[#0F172A]/5 text-[#0F172A] border-slate-200",
      },
    ],
    []
  );

  return (
    <section id="cat" className="py-24 bg-slate-50/80 relative overflow-hidden border-t border-slate-200">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0047FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0047FF] text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs border border-blue-100/60">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
            OUR METHODOLOGY
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            The <span className="text-[#0047FF]">CAT Framework</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            A proven, structured approach to workforce upskilling that guarantees measurable ROI and seamless integration into your daily operations.
          </p>
        </div>

        {/* CAT Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative max-w-6xl mx-auto">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#0047FF] via-indigo-600 to-slate-900 z-0 rounded-full opacity-30" />

          {catSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative group flex flex-col items-center text-center"
            >
              {/* Outer Glowing Glass Circular Node */}
              <div className="relative z-10 w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-400 via-[#0047FF] to-slate-900 shadow-xl shadow-blue-500/15 mb-8 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-2 border-white">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-[#0047FF]">
                    {step.letter}
                  </span>
                </div>
              </div>
              
              {/* Light Glassmorphism Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md shadow-blue-900/5 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:border-blue-200 transition-all duration-300 flex flex-col items-center flex-grow w-full transform group-hover:-translate-y-1">
                
                <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 border ${step.badgeColor}`}>
                  {step.subtitle}
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#0047FF] transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";