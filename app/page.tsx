import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-foreground text-white">
      <div className="mx-auto max-w-screen-2xl">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
