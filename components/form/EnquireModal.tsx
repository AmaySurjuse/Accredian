"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const disposableDomains = ["tempmail.com", "10minutemail.com", "guerrillamail.com"];

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
  });

  const [autofilledFields, setAutofilledFields] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 1. Name Validation
  const nameError = (() => {
    if (!formData.name) return "";
    if (formData.name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  })();
  const isNameValid = formData.name.trim().length >= 2;

  // 2. Email Validation with explicit "@" check
  const emailError = (() => {
    const val = formData.email.trim();
    if (!val) return "";
    if (!val.includes("@")) return "Email must contain '@'";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return "Please enter a valid email domain (e.g. name@company.com)";
    const domain = val.split("@")[1]?.toLowerCase();
    if (domain && disposableDomains.includes(domain)) return "Business emails cannot be from disposable domains";
    return "";
  })();
  const isEmailValid = formData.email.trim().length > 0 && emailError === "";

  // 3. Phone Validation (must be 10 digits for +91 or valid length)
  const phoneDigits = formData.phone.replace(/\D/g, "");
  const phoneError = (() => {
    if (!formData.phone) return "";
    if (formData.countryCode === "+91") {
      if (phoneDigits.length < 10) return `Phone number must be 10 digits (${phoneDigits.length}/10 entered)`;
      if (phoneDigits.length > 10) return "Phone number cannot exceed 10 digits";
    } else {
      if (phoneDigits.length < 8 || phoneDigits.length > 15) return "Phone number must be 8-15 digits";
    }
    return "";
  })();
  const isPhoneValid = formData.phone.trim().length > 0 && phoneError === "";

  // 4. Company Validation
  const companyError = (() => {
    if (!formData.company) return "";
    if (formData.company.trim().length < 2) return "Company name must be at least 2 characters";
    return "";
  })();
  const isCompanyValid = formData.company.trim().length >= 2;

  // Step 2 Validations
  const isDomainValid = formData.domain.trim().length > 0;
  const isCandidatesValid = Number(formData.candidates) > 0;
  const isDeliveryModeValid = formData.deliveryMode.trim().length > 0;
  const isLocationValid = formData.location.trim().length >= 2;

  const isStep1Valid = isNameValid && isEmailValid && isPhoneValid && isCompanyValid;
  const isStep2Valid = isDomainValid && isCandidatesValid && isDeliveryModeValid && isLocationValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnimationStart = (e: React.AnimationEvent<HTMLInputElement>, fieldName: string) => {
    if (e.animationName.includes("autofill")) {
      setAutofilledFields((prev) => ({ ...prev, [fieldName]: true }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "N/A",
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          company: formData.company,
          domain: formData.domain,
          candidates: formData.candidates,
          deliveryMode: formData.deliveryMode,
          location: formData.location,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[92vh] z-10">
        
        {/* Left Side: Image */}
        <div className="hidden md:block md:w-5/12 relative bg-slate-900">
          <Image
            src="/images/enquire_office.jpg"
            alt="Accredian Office Partnership"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Transform Your Workforce</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Join leading enterprises in building specialized capabilities with Accredian.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Enquire Now
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Step {step} of 2 — {step === 1 ? "Contact Details" : "Training Requirements"}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-[#0047FF] h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>

          {status === "success" ? (
            <div className="py-12 text-center my-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Submitted!</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto mb-8">
                Thank you for reaching out. An Accredian Enterprise Advisor will contact you shortly to structure your customized training program.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0047FF] text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
              
              {/* STEP 1: Contact Details */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Enter Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onAnimationStart={(e) => handleAnimationStart(e, "name")}
                      required
                      placeholder=" "
                      className={`w-full pt-5 pb-2 px-0 border-b-2 text-base text-slate-900 bg-transparent focus:outline-none transition-colors peer ${
                        autofilledFields.name ? "bg-blue-50/50 px-2 rounded-t" : ""
                      } ${
                        isNameValid
                          ? "border-emerald-500"
                          : nameError
                          ? "border-rose-500"
                          : "border-slate-300 focus:border-[#0047FF]"
                      }`}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                    >
                      Enter Name *
                    </label>

                    {isNameValid && (
                      <span className="absolute right-2 top-4 text-emerald-500 text-base font-bold">
                        ✓
                      </span>
                    )}

                    {nameError && (
                      <p className="text-xs text-rose-500 font-medium mt-1">
                        ⚠️ {nameError}
                      </p>
                    )}
                  </div>

                  {/* Enter Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onAnimationStart={(e) => handleAnimationStart(e, "email")}
                      required
                      placeholder=" "
                      className={`w-full pt-5 pb-2 px-0 border-b-2 text-base text-slate-900 bg-transparent focus:outline-none transition-colors peer ${
                        autofilledFields.email ? "bg-blue-50/50 px-2 rounded-t" : ""
                      } ${
                        isEmailValid
                          ? "border-emerald-500"
                          : emailError
                          ? "border-rose-500"
                          : "border-slate-300 focus:border-[#0047FF]"
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                    >
                      Enter Email *
                    </label>

                    {isEmailValid && (
                      <span className="absolute right-2 top-4 text-emerald-500 text-base font-bold">
                        ✓
                      </span>
                    )}

                    {emailError && (
                      <p className="text-xs text-rose-500 font-medium mt-1">
                        ⚠️ {emailError}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div className={`relative flex items-center gap-3 border-b-2 pt-4 pb-2 transition-colors ${
                      isPhoneValid
                        ? "border-emerald-500"
                        : phoneError
                        ? "border-rose-500"
                        : "border-slate-300 focus-within:border-[#0047FF]"
                    }`}>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="bg-transparent text-slate-700 font-semibold text-sm focus:outline-none cursor-pointer"
                      >
                        <option value="+91">IN +91</option>
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">AE +971</option>
                        <option value="+65">SG +65</option>
                      </select>

                      <div className="relative flex-grow">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onAnimationStart={(e) => handleAnimationStart(e, "phone")}
                          required
                          placeholder=" "
                          className="w-full pt-1 pb-1 px-0 text-base text-slate-900 bg-transparent focus:outline-none peer"
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-0 top-0 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                        >
                          Phone Number *
                        </label>
                      </div>

                      {isPhoneValid && (
                        <span className="text-emerald-500 text-base font-bold">
                          ✓
                        </span>
                      )}
                    </div>

                    {phoneError && (
                      <p className="text-xs text-rose-500 font-medium mt-1">
                        ⚠️ {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Enter Company Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      onAnimationStart={(e) => handleAnimationStart(e, "company")}
                      required
                      placeholder=" "
                      className={`w-full pt-5 pb-2 px-0 border-b-2 text-base text-slate-900 bg-transparent focus:outline-none transition-colors peer ${
                        autofilledFields.company ? "bg-blue-50/50 px-2 rounded-t" : ""
                      } ${
                        isCompanyValid
                          ? "border-emerald-500"
                          : companyError
                          ? "border-rose-500"
                          : "border-slate-300 focus:border-[#0047FF]"
                      }`}
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-0 top-3 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                    >
                      Enter company name *
                    </label>

                    {isCompanyValid && (
                      <span className="absolute right-2 top-4 text-emerald-500 text-base font-bold">
                        ✓
                      </span>
                    )}

                    {companyError && (
                      <p className="text-xs text-rose-500 font-medium mt-1">
                        ⚠️ {companyError}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={() => setStep(2)}
                      className="w-full bg-[#0047FF] text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Next Step
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 2: Training Requirements */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Select Domain */}
                  <div className="relative group border-b-2 border-slate-300 focus-within:border-[#0047FF] pt-2 pb-1">
                    <label htmlFor="domain" className="block text-xs font-semibold text-slate-500 mb-1">
                      Select Domain *
                    </label>
                    <select
                      name="domain"
                      id="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-base text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="" disabled>Choose your domain specialization</option>
                      <option value="Product & Innovation">Product & Innovation Hub</option>
                      <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                      <option value="Leadership Elevation">Leadership Elevation</option>
                      <option value="Tech & Data Insights">Tech & Data Insights</option>
                      <option value="Operations Excellence">Operations Excellence</option>
                      <option value="Digital Enterprise">Digital Enterprise</option>
                      <option value="Fintech Innovation">Fintech Innovation Lab</option>
                    </select>
                  </div>

                  {/* Enter No. of candidates */}
                  <div className="relative group">
                    <input
                      type="number"
                      name="candidates"
                      id="candidates"
                      min="1"
                      value={formData.candidates}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className={`w-full pt-5 pb-2 px-0 border-b-2 text-base text-slate-900 bg-transparent focus:outline-none transition-colors peer ${
                        isCandidatesValid ? "border-emerald-500" : "border-slate-300 focus:border-[#0047FF]"
                      }`}
                    />
                    <label
                      htmlFor="candidates"
                      className="absolute left-0 top-3 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                    >
                      Enter No. of candidates *
                    </label>
                    {isCandidatesValid && (
                      <span className="absolute right-2 top-4 text-emerald-500 text-base font-bold">
                        ✓
                      </span>
                    )}
                  </div>

                  {/* Select Mode of Delivery */}
                  <div className="relative group border-b-2 border-slate-300 focus-within:border-[#0047FF] pt-2 pb-1">
                    <label htmlFor="deliveryMode" className="block text-xs font-semibold text-slate-500 mb-1">
                      Select Mode of Delivery *
                    </label>
                    <select
                      name="deliveryMode"
                      id="deliveryMode"
                      value={formData.deliveryMode}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-base text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select program delivery mode</option>
                      <option value="Live Virtual">Live Virtual Classroom</option>
                      <option value="On-Site Workshop">On-Site Workshop</option>
                      <option value="Hybrid Cohort">Hybrid Cohort</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className={`w-full pt-5 pb-2 px-0 border-b-2 text-base text-slate-900 bg-transparent focus:outline-none transition-colors peer ${
                        isLocationValid ? "border-emerald-500" : "border-slate-300 focus:border-[#0047FF]"
                      }`}
                    />
                    <label
                      htmlFor="location"
                      className="absolute left-0 top-3 text-slate-400 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-[#0047FF] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500"
                    >
                      Eg: Gurgaon, Delhi, India *
                    </label>
                    {isLocationValid && (
                      <span className="absolute right-2 top-4 text-emerald-500 text-base font-bold">
                        ✓
                      </span>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-rose-50 text-rose-600 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-slate-100 text-slate-700 py-3.5 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={!isStep2Valid || status === "loading"}
                      className="w-2/3 bg-[#0047FF] text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "loading" ? "Submitting..." : "Submit"}
                    </button>
                  </div>

                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
