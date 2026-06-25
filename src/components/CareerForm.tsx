"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface CareerFormProps {
  dict: {
    formTitle: string;
    name: string;
    position: string;
    positionPlaceholder: string;
    resume: string;
    message: string;
    applyNow: string;
    applySuccess: string;
    validation?: {
      required: string;
      invalidUrl: string;
    };
  };
  common: {
    sending: string;
    errorMessage: string;
  };
  locale?: string;
}

export default function CareerForm({ dict, common }: CareerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    resume: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const reqMessage = dict.validation?.required || "Required";
    if (!formData.name.trim()) newErrors.name = reqMessage;
    if (!formData.position.trim()) newErrors.position = reqMessage;
    if (!formData.resume.trim()) {
      newErrors.resume = reqMessage;
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.resume)) {
      newErrors.resume = dict.validation?.invalidUrl || "Invalid URL";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", position: "", resume: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white border border-slate-200/60 p-6 md:p-8 rounded-2xl shadow-sm">
      <h3 className="font-display font-bold text-xl text-slate-900 mb-2 border-b border-slate-100 pb-3">
        {dict.formTitle}
      </h3>

      {status === "success" && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-start gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{dict.applySuccess}</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl flex items-start gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{common.errorMessage}</p>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.name
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Position */}
      <div className="flex flex-col gap-1">
        <label htmlFor="position" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.position}
        </label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder={dict.positionPlaceholder}
          value={formData.position}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.position
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Resume Link */}
      <div className="flex flex-col gap-1">
        <label htmlFor="resume" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.resume}
        </label>
        <input
          type="text"
          id="resume"
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.resume
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Message / Cover Letter */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500/25 transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 shadow-md active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{common.sending}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-blue-300" />
            <span>{dict.applyNow}</span>
          </>
        )}
      </button>
    </form>
  );
}
