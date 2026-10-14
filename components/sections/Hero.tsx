import { SparklesIcon } from "@/components/ui/icons";

import { profileData } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-semibold">{profileData.experienceYears} Experience</span>
          <span className="text-neutral-500">•</span>
          <span>{profileData.title}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
          Hi, I&apos;m{" "}
          <span className="gradient-text">
            {profileData.name}
          </span>
        </h1>

        <p className="text-lg sm:text-xl font-medium text-neutral-300 mb-6 max-w-3xl">
          Software Development Engineer building high-performance web, mobile, and backend microservices.
        </p>

        <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-5 sm:p-6 mb-8 backdrop-blur-sm">
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {profileData.summary}
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <SparklesIcon size={16} className="text-cyan-400" />
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              ATS Core Competencies &amp; Production Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.atsKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-neutral-900">
          {profileData.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 hover:border-neutral-700/80 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <span className="text-cyan-400">{stat.value}</span>
              </div>
              <div className="text-xs font-semibold text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
