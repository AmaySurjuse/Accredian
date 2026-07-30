"use client";

import React, { useState, useEffect, useMemo } from "react";

export const TestimonialSection = React.memo(() => {
  const testimonials = useMemo(
    () => [
      {
        company: "ADP",
        quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
      },
      {
        company: "Bayer",
        quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
      },
      {
        company: "Reliance",
        quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
      },
      {
        company: "IBM",
        quote: "Partnering with Accredian to upskill our workforce was seamless. The curriculum is industry-aligned, and the interactive sessions provided our team with highly practical and actionable insights.",
      },
    ],
    []
  );

  const grouped_testimonials = useMemo(() => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      groups.push(testimonials.slice(i, i + 2));
    }
    return groups;
  }, [testimonials]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = grouped_testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section id="testimonials" className="py-24 bg-white relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Liquid Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#0047FF]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
            PARTNER TESTIMONIALS
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Testimonials from <span className="text-[#0047FF]">Our Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            What <span className="text-[#0047FF]">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 py-6 max-w-5xl mx-auto">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {grouped_testimonials.map((group, groupIndex) => (
              <div 
                key={groupIndex} 
                className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {group.map((testimonial, tIndex) => (
                  <div key={tIndex} className="w-full md:w-1/2 px-2">
                    <div className="group bg-white/90 backdrop-blur-md h-full rounded-3xl p-8 border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
                      
                      <div>
                        {/* Company Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/80 text-slate-800 font-black text-sm mb-6 border border-slate-200/60">
                          <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
                          {testimonial.company}
                        </div>

                        {/* Quote Text */}
                        <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Quote mark decoration */}
                      <div className="mt-6 flex justify-end text-3xl font-black text-[#0047FF]/20 group-hover:text-[#0047FF]/40 transition-colors select-none">
                        ”
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {grouped_testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index 
                  ? "bg-[#0047FF] w-8 shadow-sm shadow-blue-500/50" 
                  : "bg-slate-300 w-3 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide page ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
});

TestimonialSection.displayName = "TestimonialSection";