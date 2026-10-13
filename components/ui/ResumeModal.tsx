"use client";

import { educationData, experienceData, profileData, skillCategories } from "@/data/portfolio";

import { Button } from "@/components/ui/common/Button";
import { CheckCircleIcon } from "./icons/CheckCircleIcon";
import { DownloadIcon } from "./icons/DownloadIcon";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";
import { XIcon } from "./icons/XIcon";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {profileData.name} — Resume
              </h3>
              <p className="text-xs text-neutral-400">
                {profileData.title} • {profileData.experienceYears}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              href={profileData.resumeUrl}
              download="Leelakumar_Kakinada_Resume.pdf"
            >
              <DownloadIcon size={16} />
              <span>Download PDF</span>
            </Button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <XIcon size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-neutral-300 bg-neutral-900 font-sans">
          {/* Header Info */}
          <div className="border-b border-neutral-800 pb-5">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-cyan-400 font-medium mt-0.5">
              {profileData.title}
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 mt-2 text-xs text-neutral-400">
              <span>📍 {profileData.socials.location}</span>
              <span>✉️ {profileData.socials.email}</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                LinkedIn <ExternalLinkIcon size={12} />
              </a>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                GitHub <ExternalLinkIcon size={12} />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Core Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 bg-neutral-950/40 rounded-xl border border-neutral-800/80">
                  <h4 className="text-xs font-semibold text-neutral-200 mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {cat.skills.map((s) => s.name).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-4">
              Work Experience
            </h2>
            {experienceData.map((company) => (
              <div key={company.company} className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-800/60">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {company.company}
                    </h3>
                    <p className="text-xs text-neutral-400">{company.location}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 mt-1 sm:mt-0">
                    {company.totalPeriod}
                  </span>
                </div>

                <div className="space-y-5 pl-2 sm:pl-4 border-l border-neutral-800">
                  {company.roles.map((role) => (
                    <div key={role.title} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className="text-sm font-semibold text-white">
                          {role.title}
                        </h4>
                        <span className="text-xs text-neutral-400 font-mono">
                          {role.period}
                        </span>
                      </div>
                      {role.metrics && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                          <CheckCircleIcon size={12} />
                          {role.metrics}
                        </div>
                      )}
                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-300">
                        {role.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Education
            </h2>
            {educationData.map((edu) => (
              <div
                key={edu.degree}
                className="p-3 bg-neutral-950/40 rounded-xl border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {edu.degree} in {edu.major}
                  </h4>
                  <p className="text-xs text-neutral-400">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 rounded-lg">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950/70 flex items-center justify-between text-xs text-neutral-400">
          <span>ATS-Friendly Verified Format</span>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={profileData.resumeUrl}
              download="Leelakumar_Kakinada_Resume.pdf"
            >
              <DownloadIcon size={14} /> Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

