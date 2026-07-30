"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/components/context/ModalContext";

export const Footer = () => {
  const { openModal } = useModal();
  return (
    <footer className="bg-white pt-16 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Liquid Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#0047FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Logo, Socials & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10">
          {/* Left: Brand & Socials */}
          <div>
            <Link href="/" className="flex flex-col group">
              <span className="text-3xl font-extrabold tracking-tight text-[#0047FF] leading-none group-hover:opacity-90 transition-opacity">
                accredian
              </span>
              <span className="text-xs font-semibold text-slate-500 tracking-normal mt-0.5">
                credentials that matter
              </span>
            </Link>
            
            {/* Social Icons with Liquid Glass Hover Effect */}
            <div className="flex items-center gap-4 mt-6 text-slate-700">
              {/* Facebook */}
              <Link 
                href="https://www.facebook.com/accredianlearn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all duration-300 shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/company/accredianedu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all duration-300 shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* Twitter */}
              <Link 
                href="https://x.com/accredianedu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all duration-300 shadow-xs"
                aria-label="Twitter"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/accredian_edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all duration-300 shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link 
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all duration-300 shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: CTA & Subtext */}
          <div className="flex flex-col md:items-end">
            <button
              onClick={openModal}
              className="bg-[#0047FF] text-white px-8 py-3 rounded-xl text-[15px] font-extrabold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
            <span className="text-sm text-slate-600 mt-2.5 font-medium">
              Speak with our Enterprise Advisor
            </span>
          </div>
        </div>

        {/* Middle Section: Clean 12-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-y border-slate-200/80">
          
          {/* Column 1: Accredian Links */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-extrabold text-base mb-4 tracking-wide">Accredian</h4>
            <ul className="space-y-3 text-[15px] text-slate-600 font-medium">
              <li>
                <Link href="https://accredian.com/About" target="_blank" rel="noopener noreferrer" className="hover:text-[#0047FF] transition-colors">About</Link>
              </li>
              <li>
                <Link href="https://blog.accredian.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0047FF] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="https://accredian.com/whyaccredian" target="_blank" rel="noopener noreferrer" className="hover:text-[#0047FF] transition-colors">Why Accredian</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Enterprise Focus */}
          <div className="md:col-span-4">
            <h4 className="text-slate-900 font-extrabold text-base mb-4 tracking-wide">Enterprise Focus</h4>
            <ul className="space-y-3 text-[15px] text-slate-600 font-medium">
              <li>Product & Innovation Hub</li>
              <li>Gen-AI Mastery & Upskilling</li>
              <li>Leadership Elevation</li>
              <li>Tech & Data Insights</li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Aligned with Right CTA) */}
          <div className="md:col-span-5 md:text-right">
            <h4 className="text-slate-900 font-extrabold text-base mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-[15px] text-slate-700 font-medium flex flex-col md:items-end">
              <li className="flex items-center gap-1.5 justify-start md:justify-end">
                <span className="text-slate-500 font-normal">Email us:</span>{" "}
                <a href="mailto:enterprise@accredian.com" className="text-[#0047FF] font-bold hover:underline">
                  enterprise@accredian.com
                </a>
              </li>
              <li className="leading-relaxed max-w-sm text-slate-600">
                <span className="text-slate-500 font-normal block mb-0.5">Office Address:</span>
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="py-6 text-center text-sm text-slate-500 font-medium">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

      </div>
    </footer>
  );
};