"use client";

import React from "react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We <span className="text-[#0047FF]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            A Structured Three-Step Approach to <span className="text-[#0047FF]">Skill Development</span>
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-blue-50/60 border border-blue-100/80 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#0047FF] rounded-r-full"></div>

              {/* Step Number Badge */}
              <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-blue-200 bg-white text-[#0047FF] font-bold text-xs flex items-center justify-center shadow-xs">
                {step.number}
              </div>

              {/* Circle Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0047FF] flex items-center justify-center mb-6 shadow-md shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0047FF] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
