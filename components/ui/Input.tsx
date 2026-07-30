import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-medium text-slate-700">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`w-full px-4 py-2.5 rounded-lg border bg-white text-slate-900 transition duration-150 focus:outline-none focus:ring-2 focus:ring-accredian-blue ${
          error ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:border-transparent"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};