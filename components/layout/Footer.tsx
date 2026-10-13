import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

import { profileData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950/80 text-neutral-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400">
              Open to high-impact opportunities
            </span>
          </div>
          <p className="text-sm font-semibold text-white mt-1">
            {profileData.name} — {profileData.title}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Designed with Clean Architecture in Next.js & TailwindCSS. Hosted on Vercel.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-cyan-400 border border-neutral-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profileData.socials.email}`}
            className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-amber-400 border border-neutral-800 transition-colors"
            aria-label="Send Email"
          >
            <MailIcon size={18} />
          </a>
          <a
            href={profileData.resumeUrl}
            download="Leelakumar_Kakinada_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
          >
            <DownloadIcon size={14} className="text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-neutral-900/80 text-center text-xs text-neutral-500">
        © {currentYear} {profileData.name}. All rights reserved.
      </div>
    </footer>
  );
}

