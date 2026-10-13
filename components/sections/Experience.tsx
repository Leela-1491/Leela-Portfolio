import { educationData, experienceData } from "@/data/portfolio";

import { BriefcaseIcon } from "../ui/icons/BriefcaseIcon";
import { CheckCircleIcon } from "../ui/icons/CheckCircleIcon";
import { GraduationCapIcon } from "../ui/icons/GraduationCapIcon";
import { SparklesIcon } from "../ui/icons/SparklesIcon";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <BriefcaseIcon size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            A 3-year trajectory of rapid growth, taking features end-to-end from QA benchmarking to high-performance microservice architecture.
          </p>
        </div>

        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-neutral-900 border border-cyan-800/30 flex items-center gap-3 sm:gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
            <SparklesIcon size={24} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Proven Track Record of Rapid Internal Promotion
            </h4>
            <p className="text-xs text-neutral-300 mt-0.5">
              Promoted from <span className="text-cyan-300 font-medium">QA Intern</span> → <span className="text-indigo-300 font-medium">SDE Trainee &amp; I</span> → <span className="text-purple-300 font-medium">SDE II</span> at Buncha Technologies within 2.5 years by consistently delivering scalable, high-impact systems.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-2">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-cyan-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 pl-5">
                    {exp.location} • {exp.summary}
                  </p>
                </div>
                <div className="sm:text-right pl-5 sm:pl-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-800/50">
                    {exp.totalPeriod}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-neutral-800">
                {exp.roles.map((role) => (
                  <div
                    key={role.title}
                    className="relative pl-8 sm:pl-10 group"
                  >
                    <div
                      className={`absolute left-1.5 sm:left-2.5 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                        role.isCurrent
                          ? "bg-cyan-400 border-cyan-200 ring-4 ring-cyan-500/20"
                          : "bg-neutral-900 border-neutral-600 group-hover:border-cyan-400"
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {role.title}
                        </h4>
                        {role.isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                            Current Role
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {role.period}
                      </span>
                    </div>

                    {role.metrics && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-900 text-cyan-300 border border-neutral-800 my-2">
                        <CheckCircleIcon size={13} className="text-cyan-400 shrink-0" />
                        <span>{role.metrics}</span>
                      </div>
                    )}

                    <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-neutral-300">
                      {role.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70 mt-2 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCapIcon size={20} className="text-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Educational Details
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className="bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                      {edu.degree}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {edu.major}
                    </h4>
                    <p className="text-sm text-neutral-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-bold text-sm">
                      <span>Final CGPA:</span>
                      <span className="text-base text-white">{edu.cgpa}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      High Distinction
                    </p>
                  </div>
                </div>

                {edu.achievements && (
                  <div className="mt-5 pt-5 border-t border-neutral-800/80 flex flex-wrap gap-2">
                    {edu.achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-400"
                      >
                        <CheckCircleIcon size={14} className="text-emerald-400" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

