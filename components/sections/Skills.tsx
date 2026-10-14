"use client";

import { LayersIcon, SparklesIcon } from "@/components/ui/icons";

import { skillClusters } from "@/data/portfolio";
import { useState } from "react";

export function Skills() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    search: false,
    cloud: false,
  });

  const toggleCluster = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-neutral-950/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayersIcon size={14} />
            <span>Interactive Skill Constellation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Architecture Map
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Tap on any domain node to expand or collapse its connected constellation of production technologies.
          </p>
        </div>

        <div className="relative min-h-[580px] p-6 sm:p-12 rounded-3xl bg-neutral-950/90 border border-neutral-800/80 bg-grid-pattern shadow-2xl flex flex-col justify-between items-center overflow-hidden">
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mb-6">
            {skillClusters.slice(0, 2).map((cluster) => {
              const isOpen = expanded[cluster.id];
              return (
                <div key={cluster.id} className="flex flex-col items-center">
                  {isOpen && (
                    <div className="flex flex-wrap justify-center gap-2 mb-4 max-w-md animate-in fade-in zoom-in-95 duration-200">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${cluster.color.bg} ${cluster.color.border} ${cluster.color.text} shadow-sm backdrop-blur-md transition-all hover:scale-105`}
                        >
                          {skill.highlight && (
                            <SparklesIcon size={11} className="shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => toggleCluster(cluster.id)}
                    className={`group flex items-center gap-3 px-5 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-xl ${
                      isOpen
                        ? `${cluster.color.border} ${cluster.color.bg} ring-2 ring-cyan-500/20 shadow-cyan-500/10`
                        : "border-neutral-800 bg-neutral-900/90 hover:border-neutral-700"
                    }`}
                  >
                    <span className={`flex h-2.5 w-2.5 rounded-full ${cluster.color.dot} shadow-sm`} />
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-white">
                      {cluster.label}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-neutral-800 text-neutral-300">
                      {cluster.skills.length}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="relative my-8 z-20">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500/30 via-cyan-500/30 to-purple-500/30 blur-md animate-pulse" />
            <div className="relative flex items-center gap-3 px-7 py-3 rounded-full bg-neutral-900 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/20 text-white">
              <span className="h-3 w-3 rounded-full bg-amber-400 shadow-md shadow-amber-400/50 animate-ping" />
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400 block font-mono">
                  CORE HUB
                </span>
                <span className="text-xs sm:text-sm font-extrabold tracking-wide">
                  LEELAKUMAR KAKINADA
                </span>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-6">
            {skillClusters.slice(2, 4).map((cluster) => {
              const isOpen = expanded[cluster.id];
              return (
                <div key={cluster.id} className="flex flex-col items-center">
                  <button
                    onClick={() => toggleCluster(cluster.id)}
                    className={`group flex items-center gap-3 px-5 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-xl mb-4 ${
                      isOpen
                        ? `${cluster.color.border} ${cluster.color.bg} ring-2 ring-purple-500/20 shadow-purple-500/10`
                        : "border-neutral-800 bg-neutral-900/90 hover:border-neutral-700"
                    }`}
                  >
                    <span className={`flex h-2.5 w-2.5 rounded-full ${cluster.color.dot} shadow-sm`} />
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-white">
                      {cluster.label}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-neutral-800 text-neutral-300">
                      {cluster.skills.length}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="flex flex-wrap justify-center gap-2 max-w-md animate-in fade-in zoom-in-95 duration-200">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${cluster.color.bg} ${cluster.color.border} ${cluster.color.text} shadow-sm backdrop-blur-md transition-all hover:scale-105`}
                        >
                          {skill.highlight && (
                            <SparklesIcon size={11} className="shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-neutral-800/80">
            <line x1="25%" y1="22%" x2="50%" y2="50%" strokeDasharray="4 6" strokeWidth="1.5" />
            <line x1="75%" y1="22%" x2="50%" y2="50%" strokeDasharray="4 6" strokeWidth="1.5" />
            <line x1="25%" y1="78%" x2="50%" y2="50%" strokeDasharray="4 6" strokeWidth="1.5" />
            <line x1="75%" y1="78%" x2="50%" y2="50%" strokeDasharray="4 6" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
