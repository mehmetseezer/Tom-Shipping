"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  dict: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    validation?: {
      required: string;
      invalidEmail: string;
    };
  };
  common: {
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
}

export default function ContactForm({ dict, common }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const reqMessage = dict.validation?.required || "Required";
    if (!formData.name.trim()) newErrors.name = reqMessage;
    if (!formData.email.trim()) {
      newErrors.email = reqMessage;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = dict.validation?.invalidEmail || "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = reqMessage;
    if (!formData.message.trim()) newErrors.message = reqMessage;
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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 p-4 rounded-xl flex items-start gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-semibold">{common.successMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-rose-50 border border-rose-200 text-rose-600 p-4 rounded-xl flex items-start gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-semibold">{common.errorMessage}</p>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
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

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.email
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.subject
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className={`w-full bg-slate-50 border px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
            errors.message
              ? "border-rose-500 focus:ring-rose-500/25"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/25"
          }`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center gap-2 shadow-lg hover:shadow-blue-500/10 active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{common.sending}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-blue-300" />
            <span>{dict.send}</span>
          </>
        )}
      </button>
    </form>
  );
}
