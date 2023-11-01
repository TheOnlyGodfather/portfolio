"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import EducationCard from "./components/EducationCard";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      {/* header */}
      <Header />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Education */}
      <section id="education" className="snap-center">
        <Education />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <footer
        className="sticky bottom-5 w-full cursor-pointer hover:grayscale-0"
        id="footer"
      >
        <div className="w-8 ml-4">
          <Link href="#hero">
            <img src="/shafique.svg" alt="logo" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
