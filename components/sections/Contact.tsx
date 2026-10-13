"use client";

import React, { useCallback, useState } from "react";

import { Button } from "@/components/ui/common/Button";
import { CheckCircleIcon } from "../ui/icons/CheckCircleIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { CopyIcon } from "../ui/icons/CopyIcon";
import { DownloadIcon } from "../ui/icons/DownloadIcon";
import { FileTextIcon } from "../ui/icons/FileTextIcon";
import { GithubIcon } from "../ui/icons/GithubIcon";
import { LinkedinIcon } from "../ui/icons/LinkedinIcon";
import { MailIcon } from "../ui/icons/MailIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { profileData } from "@/data/portfolio";
import { useResumeModal } from "@/context/ResumeModalContext";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { openResumeModal } = useResumeModal();

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }, []);

  const handleCopyPhone = useCallback(() => {
    if (profileData.socials.phone) {
      navigator.clipboard.writeText(profileData.socials.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Leelakumar,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  }, [formData]);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <MailIcon size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Interested in discussing full-stack roles, distributed systems, or high-performance engineering? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-cyan-800/40 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FileTextIcon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Resume Document
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Updated for 2026 • ATS-Optimized
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                Review verified technical history, metric achievements, and engineering credentials in a standardized PDF format.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  href={profileData.resumeUrl}
                  download="Leelakumar_Kakinada_Resume.pdf"
                  className="flex-1"
                >
                  <DownloadIcon size={15} />
                  <span>Download PDF</span>
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={openResumeModal}
                >
                  <FileTextIcon size={15} className="text-cyan-400" />
                  <span>Interactive Preview</span>
                </Button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-neutral-800 text-cyan-400 shrink-0">
                  <MailIcon size={18} />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${profileData.socials.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {profileData.socials.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors shrink-0"
                aria-label="Copy email to clipboard"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <CheckIcon size={16} className="text-emerald-400" />
                ) : (
                  <CopyIcon size={16} />
                )}
              </button>
            </div>

            {profileData.socials.phone && (
              <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-neutral-800 text-emerald-400 shrink-0">
                    <PhoneIcon size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${profileData.socials.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors truncate block"
                    >
                      {profileData.socials.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors shrink-0"
                  aria-label="Copy phone number to clipboard"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <CheckIcon size={16} className="text-emerald-400" />
                  ) : (
                    <CopyIcon size={16} />
                  )}
                </button>
              </div>
            )}

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-3">
                Professional Networks
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800/80 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={18} className="text-cyan-400" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 group-hover:text-cyan-400 transition-colors">
                    Connect →
                  </span>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800/80 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={18} className="text-white" />
                    <span className="text-xs font-semibold">GitHub Repositories</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 group-hover:text-cyan-400 transition-colors">
                    Explore →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Drop your note below to start a conversation.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center">
                <CheckCircleIcon size={32} className="text-emerald-400 mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-white">
                  Message Prepared!
                </h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Your email client has been opened. Thank you for reaching out!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-3 py-1.5 text-xs text-neutral-400 hover:text-white underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Leelakumar, let's discuss an engineering opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
