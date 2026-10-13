import { CheckCircleIcon, CodeIcon, SparklesIcon } from "@/components/ui/icons";

import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-neutral-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 text-indigo-300 border border-indigo-800/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <CodeIcon size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Skill Set
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of languages, frameworks, search pipelines, and cloud tooling utilized in daily production engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {category.skills.length} Technologies
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        skill.highlight
                          ? "bg-cyan-950/40 border-cyan-800/60 text-cyan-200 hover:bg-cyan-900/40"
                          : "bg-neutral-900/90 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      {skill.highlight && (
                        <SparklesIcon size={12} className="text-cyan-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <CheckCircleIcon size={12} className="text-emerald-400" />
                  Production Tested
                </span>
                <span>Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Specialized in High-Concurrency &amp; Low-Latency Delivery
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              From building mobile apps in React Native to low-latency Elasticsearch vector queries and GraphQL services.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-950 text-cyan-400 border border-neutral-800">
              TS / JS
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-950 text-indigo-400 border border-neutral-800">
              Next.js
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-950 text-emerald-400 border border-neutral-800">
              Node.js
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-950 text-purple-400 border border-neutral-800">
              Python
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

