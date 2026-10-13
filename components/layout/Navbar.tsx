"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/common/Button";
import { DownloadIcon } from "../ui/icons/DownloadIcon";
import { FileTextIcon } from "../ui/icons/FileTextIcon";
import { MenuIcon } from "../ui/icons/MenuIcon";
import { XIcon } from "../ui/icons/XIcon";
import { profileData } from "@/data/portfolio";
import { useResumeModal } from "@/context/ResumeModalContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { openResumeModal } = useResumeModal();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const onPreviewResumeClick = useCallback(() => {
    closeMobileMenu();
    openResumeModal();
  }, [openResumeModal, closeMobileMenu]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#about"
          className="group flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white font-mono text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            LK
          </span>
          <span className="font-semibold">Leelakumar</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-neutral-800 text-cyan-400 shadow-sm"
                    : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <Button variant="secondary" size="sm" onClick={openResumeModal}>
            <FileTextIcon size={14} className="text-cyan-400" />
            <span>Preview Resume</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            href={profileData.resumeUrl}
            download="Leelakumar_Kakinada_Resume.pdf"
          >
            <DownloadIcon size={14} />
            <span>Download</span>
          </Button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={openResumeModal}
            className="p-2 text-cyan-400"
            aria-label="Preview Resume"
          >
            <FileTextIcon size={18} />
          </Button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-neutral-300 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-neutral-800/80 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={onPreviewResumeClick}
              >
                <FileTextIcon size={16} className="text-cyan-400" />
                <span>Preview Resume</span>
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                href={profileData.resumeUrl}
                download="Leelakumar_Kakinada_Resume.pdf"
                onClick={closeMobileMenu}
              >
                <DownloadIcon size={16} />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
