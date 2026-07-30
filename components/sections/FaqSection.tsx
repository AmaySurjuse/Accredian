"use client";

import React, { useState, useMemo } from "react";

export const FaqSection = React.memo(() => {
  const [activeTab, setActiveTab] = useState<"course" | "delivery" | "misc">("course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tabs = useMemo(
    () => [
      { id: "course", label: "About the Course" },
      { id: "delivery", label: "About the Delivery" },
      { id: "misc", label: "Miscellaneous" },
    ],
    []
  );

  const faqData = useMemo(
    () => ({
      course: [
        {
          question: "What types of corporate training programs does Accredian offer?",
          answer: "Accredian offers specialized corporate training, executive education, and capability-building programs across Generative AI, Data Science, Product Management, Leadership Elevation, and Digital Transformation.",
        },
        {
          question: "What domain specializations are available?",
          answer: "Our domain specializations include Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
        },
      ],
      delivery: [
        {
          question: "Can the courses be customized for specific industries or teams?",
          answer: "Yes, all Accredian Enterprise programs are bespoke. We analyze your tech stack, business goals, and current skill baseline to tailor the curriculum specifically to your workforce needs.",
        },
        {
          question: "Who are the instructors for these programs?",
          answer: "Our training programs are led exclusively by top 1% industry practitioners, domain experts, and senior leaders with extensive experience at top global technology corporations.",
        },
        {
          question: "What formats are the programs delivered in?",
          answer: "We offer versatile program formats including live interactive virtual classrooms, hands-on on-site workshops, self-paced learning modules, and hybrid cohort-based models.",
        },
      ],
      misc: [
        {
          question: "What is the ideal team size for corporate training?",
          answer: "We accommodate various organizational scales—from small specialized cohorts of 10-15 high-potential leaders to company-wide upskilling programs for hundreds of employees.",
        },
        {
          question: "How do we get started with Accredian?",
          answer: "Getting started is simple. Click 'Enquire Now' or fill out our contact form to speak with an Accredian Enterprise Advisor. We'll conduct a skill-gap assessment and design a customized training roadmap.",
        },
      ],
    }),
    []
  );

  const handleTabChange = (tabId: "course" | "delivery" | "misc") => {
    setActiveTab(tabId);
    setOpenIndex(0);
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-slate-50/80 relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Liquid Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#0047FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
            CLEAR ANSWERS & KNOWLEDGE
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#0047FF]">Questions</span>
          </h2>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Vertical Glass Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 text-left cursor-pointer border ${
                    isActive
                      ? "bg-white text-[#0047FF] border-blue-200 shadow-xl shadow-blue-900/5 translate-x-1"
                      : "bg-white/60 backdrop-blur-md text-slate-600 border-slate-200/80 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-8 space-y-4">
            {faqData[activeTab].map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-blue-200 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-[#0047FF]" : "text-slate-900 group-hover:text-[#0047FF]"
                    }`}>
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-400 group-hover:text-[#0047FF] transition-transform duration-300 ml-4 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 text-[#0047FF]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 font-medium text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
});

FaqSection.displayName = "FaqSection";
