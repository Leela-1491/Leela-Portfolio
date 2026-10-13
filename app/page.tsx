import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { ResumeModalProvider } from "@/context/ResumeModalContext";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <ResumeModalProvider>
      <div className="relative min-h-screen bg-[#09090b] text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        <Navbar />

        <main className="relative z-10 flex-1 flex flex-col">
          <Hero />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ResumeModalProvider>
  );
}
