"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/components/context/ModalContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { openModal } = useModal();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Clients", href: "#clients" },
    { name: "Accredian Edge", href: "#edge" },
    { name: "CAT", href: "#cat" },
    { name: "How it works", href: "#how-it-works" },
    { name: "FAQs", href: "#faqs" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs shadow-blue-900/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col justify-center group">
          <span className="text-3xl font-extrabold tracking-tight text-[#0047FF] leading-none group-hover:opacity-90 transition-opacity">
            accredian
          </span>
          <span className="text-[11px] font-semibold text-slate-500 tracking-normal mt-0.5">
            credentials that matter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-[14px] xl:text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#0047FF]"
                    : "text-slate-700 hover:text-[#0047FF]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0047FF] to-blue-500 rounded-full transition-all duration-300 shadow-xs shadow-blue-500/50" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={openModal}
            className="bg-[#0047FF] text-white px-6 py-2.5 rounded-xl text-[15px] font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#0047FF] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl z-40">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-semibold px-3 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? "text-[#0047FF] bg-blue-50/80 border-l-4 border-[#0047FF]"
                      : "text-slate-700 hover:text-[#0047FF] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100 px-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full bg-[#0047FF] text-white px-6 py-3 rounded-xl text-base font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};