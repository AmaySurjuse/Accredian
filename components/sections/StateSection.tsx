import React from "react";

export const StateSection = () => {
  const stats = [
    {
      number: "10K+",
      badge: "Global Alumni",
      description: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      badge: "Corporate Programs",
      description: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      badge: "Active Workforce",
      description: "Active Learners Engaged In Dynamic Enterprise Courses",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-slate-50/70 relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Background Liquid Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0047FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Part: Track Record --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0047FF] border border-blue-100/80 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
            PROVEN MEASURABLE IMPACT
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our <span className="text-[#0047FF]">Track Record</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            The Numbers Behind <span className="text-[#0047FF]">Our Enterprise Success</span>
          </p>
        </div>

        {/* Liquid Glassmorphism Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#0047FF] via-indigo-600 to-slate-900 rounded-full group-hover:h-1.5 transition-all" />

              <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0047FF] border border-blue-100/80 mb-5">
                {stat.badge}
              </span>

              {/* Premium Gradient Text for Numbers */}
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] via-blue-600 to-slate-900 font-black text-5xl md:text-6xl mb-4 tracking-tight">
                {stat.number}
              </div>

              <p className="text-slate-600 font-medium text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};