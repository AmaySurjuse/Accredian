"use client";

import React, { useMemo } from "react";
import Image from "next/image";

export const AccredianEdgeSection = React.memo(() => {
  // 0. Accredian Edge Key Aspects (Pillars Timeline)
  const edgeAspects = useMemo(
    () => [
    {
      id: 1,
      position: "top",
      title: "Tailored Solutions",
      description: "Programs customized to your organization's goals and challenges.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 2,
      position: "bottom",
      title: "Expert Guidance",
      description: "Learn from industry leaders with real-world success.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 3,
      position: "top",
      title: "Innovative Framework",
      description: "Proprietary methods for impactful, application-driven results.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 4,
      position: "bottom",
      title: "Advanced Technology",
      description: "State-of-the-art LMS for seamless learning experiences.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      position: "top",
      title: "Diverse Offerings",
      description: "Courses across industries, skill levels, and emerging fields.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      id: 6,
      position: "bottom",
      title: "Proven Impact",
      description: "Trusted by leading organizations for measurable ROI.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: 7,
      position: "top",
      title: "Flexible Delivery",
      description: "Online and offline options tailored to your needs.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    ],
    []
  );

  // 1. Domain Expertise items
  const domainExpertise = useMemo(
    () => [
      {
        num: "01",
        title: "Product & Innovation Hub",
        subtitle: "Product strategy, agile execution & design thinking frameworks.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        num: "02",
        title: "Gen-AI Mastery",
        subtitle: "Custom LLMs, prompt engineering & enterprise AI automation.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 7v4m-2-2h4" />
          </svg>
        ),
      },
      {
        num: "03",
        title: "Leadership Elevation",
        subtitle: "Executive coaching, change management & strategic decisioning.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
      },
      {
        num: "04",
        title: "Tech & Data Insights",
        subtitle: "Big data architecture, predictive analytics & BI intelligence.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
      {
        num: "05",
        title: "Operations Excellence",
        subtitle: "Workflow optimization, supply chain efficiency & lean delivery.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        num: "06",
        title: "Digital Enterprise",
        subtitle: "Cloud transformation, modern DevOps & security infrastructure.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
      {
        num: "07",
        title: "Fintech Innovation Lab",
        subtitle: "Next-gen digital payments, blockchain systems & financial risk tech.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
    []
  );

  // 2. Course Segmentation items
  const courseSegmentation = useMemo(
    () => [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "/images/program_specific.jpg",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/images/industry_specific.jpg",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/images/topic_specific.jpg",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/images/level_specific.jpg",
    },
    ],
    []
  );

  // 3. Strategic Skill Enhancement target groups
  const strategicTargetGroups = useMemo(
    () => [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM10 9l4 4m0-4l-4 4" />
        </svg>
      ),
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    ],
    []
  );

  return (
    <section id="edge" className="py-24 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* ======================================================== */}
        {/* SECTION 0: The Accredian Edge - Key Aspects Timeline */}
        {/* ======================================================== */}
        <div className="relative">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
              STRATEGIC PILLARS OF EXCELLENCE
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              The <span className="text-[#0047FF]">Accredian Edge</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Key Aspects of <span className="text-[#0047FF]">Our Strategic Training</span>
            </p>
          </div>

          {/* Spacious Liquid Glass Wave Timeline */}
          <div className="relative pt-4 pb-8">
            
            {/* Desktop Liquid Connecting Wave Line */}
            <div className="hidden xl:block absolute top-[52%] left-10 right-10 h-1 bg-gradient-to-r from-[#0047FF] via-indigo-600 to-slate-900 -translate-y-1/2 z-0 rounded-full opacity-35 shadow-xs shadow-blue-500/50"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-6 xl:gap-4 relative z-10">
              {edgeAspects.map((aspect, index) => (
                <div
                  key={aspect.id}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* TOP Callout Content (for odd items: 1, 3, 5, 7) */}
                  <div className={`w-full min-h-[170px] flex flex-col justify-end items-center mb-3 transition-all duration-300 ${
                    aspect.position === "top" ? "opacity-100" : "xl:opacity-0 xl:pointer-events-none hidden xl:flex"
                  }`}>
                    <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-lg shadow-blue-900/5 group-hover:shadow-2xl group-hover:shadow-blue-500/15 group-hover:border-blue-300 transition-all duration-300 w-full text-center transform group-hover:-translate-y-1 flex flex-col justify-between h-full">
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-extrabold text-[#0047FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                          0{aspect.id}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]"></span>
                      </div>

                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0047FF] transition-colors leading-snug mb-2 text-left">
                        {aspect.title}
                      </h4>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed text-left">
                        {aspect.description}
                      </p>
                    </div>

                    {/* Connector Line */}
                    <div className="h-6 w-0.5 bg-gradient-to-b from-blue-400 to-[#0047FF] mt-2 group-hover:h-7 transition-all" />
                  </div>

                  {/* CENTER CIRCULAR GLASS NODE */}
                  <div className="relative my-2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#0047FF] border-2 border-white shadow-xl shadow-blue-500/25 flex items-center justify-center group-hover:scale-115 group-hover:bg-blue-700 transition-all duration-300 z-10 cursor-pointer text-white">
                      {aspect.icon}
                    </div>

                    {/* Connecting Chevron on Desktop */}
                    {index < edgeAspects.length - 1 && (
                      <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 font-bold text-sm z-0">
                        ›
                      </div>
                    )}
                  </div>

                  {/* BOTTOM Callout Content (for even items: 2, 4, 6) */}
                  <div className={`w-full min-h-[170px] flex flex-col justify-start items-center mt-3 transition-all duration-300 ${
                    aspect.position === "bottom" ? "opacity-100" : "xl:opacity-0 xl:pointer-events-none hidden xl:flex"
                  }`}>
                    {/* Connector Line */}
                    <div className="h-6 w-0.5 bg-gradient-to-b from-[#0047FF] to-blue-400 mb-2 group-hover:h-7 transition-all" />
                    
                    <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-lg shadow-blue-900/5 group-hover:shadow-2xl group-hover:shadow-blue-500/15 group-hover:border-blue-300 transition-all duration-300 w-full text-center transform group-hover:translate-y-1 flex flex-col justify-between h-full">
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-extrabold text-[#0047FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                          0{aspect.id}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]"></span>
                      </div>

                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0047FF] transition-colors leading-snug mb-2 text-left">
                        {aspect.title}
                      </h4>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed text-left">
                        {aspect.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: Our Domain Expertise */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our <span className="text-[#0047FF]">Domain Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium">
              <span className="text-[#0047FF]">Specialized Programs</span> Designed to Fuel Innovation
            </p>
          </div>

          {/* Sleek Minimalist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* First 6 Cards */}
            {domainExpertise.slice(0, 6).map((item) => (
              <div
                key={item.num}
                className="group relative bg-white rounded-2xl p-7 flex flex-col justify-between border border-slate-100/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Watermark Number */}
                <span className="absolute top-4 right-5 text-4xl font-extrabold text-slate-100 group-hover:text-blue-100/80 transition-colors select-none">
                  {item.num}
                </span>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 text-[#0047FF] flex items-center justify-center mb-5 group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-3 shadow-xs">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0047FF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Subtitle / Focus */}
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-[#0047FF] transition-all duration-300 rounded-full mt-6 opacity-60 group-hover:opacity-100" />
              </div>
            ))}

            {/* 7th Card: Fintech Innovation Lab (Creative Full-Width Banner across bottom) */}
            <div className="md:col-span-3 group relative bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 rounded-2xl p-7 border border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden cursor-pointer">
              
              {/* Watermark Number */}
              <span className="absolute top-4 right-6 text-4xl font-extrabold text-blue-100/60 group-hover:text-blue-100 transition-colors select-none">
                07
              </span>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0047FF] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  {domainExpertise[6].icon}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0047FF] transition-colors">
                      {domainExpertise[6].title}
                    </h3>
                    <span className="bg-blue-100 text-[#0047FF] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      Specialized Lab
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                    {domainExpertise[6].subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#0047FF] font-bold text-sm group-hover:translate-x-1 transition-transform relative z-10">
                <span>Explore Capabilities</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: Tailored Course Segmentation */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Tailored <span className="text-[#0047FF]">Course Segmentation</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium">
              Explore <span className="text-[#0047FF]">Custom-fit Courses</span> Designed to Address Every Professional Focus
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseSegmentation.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold text-[#0047FF] mb-3 group-hover:text-blue-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: Strategic Skill Enhancement Banner */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
          
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0047FF]/5 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Col: Headings & Team Image */}
            <div className="lg:col-span-5 flex flex-col items-start justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0047FF] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
                  WHO SHOULD JOIN?
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Strategic Skill <span className="text-[#0047FF]">Enhancement</span>
                </h2>

                <p className="text-slate-500 text-sm md:text-base font-medium mt-3 leading-relaxed">
                  Targeted capability building programs tailored for every level of your workforce.
                </p>
              </div>

              {/* Team Photo with Floating Overlay Badge */}
              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-100 shadow-md group">
                <Image
                  src="/images/strategic_team.jpg"
                  alt="Strategic Skill Enhancement Professionals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    ✨ Tailored Cohort Curriculums
                  </span>
                  <span className="text-[11px] font-semibold text-[#0047FF]">
                    All Levels
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: 2x2 Creative Target Groups Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strategicTargetGroups.map((group, index) => {
                const colorStyles = [
                  { bg: "bg-blue-50", text: "text-[#0047FF]", border: "group-hover:border-blue-300" },
                  { bg: "bg-indigo-50", text: "text-indigo-600", border: "group-hover:border-indigo-300" },
                  { bg: "bg-emerald-50", text: "text-emerald-600", border: "group-hover:border-emerald-300" },
                  { bg: "bg-purple-50", text: "text-purple-600", border: "group-hover:border-purple-300" },
                ][index % 4];

                return (
                  <div
                    key={index}
                    className={`group relative bg-slate-50/60 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 ${colorStyles.border} transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden`}
                  >
                    {/* Watermark Number */}
                    <span className="absolute top-3 right-4 text-3xl font-extrabold text-slate-200/60 group-hover:text-slate-200 transition-colors select-none">
                      0{index + 1}
                    </span>

                    <div className={`w-12 h-12 rounded-xl ${colorStyles.bg} ${colorStyles.text} flex items-center justify-center mb-4 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      {group.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0047FF] transition-colors mb-2">
                      {group.title}
                    </h3>

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {group.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
});

AccredianEdgeSection.displayName = "AccredianEdgeSection";
