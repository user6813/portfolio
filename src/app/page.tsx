"use client";
import Image from "next/image";
import { personalInfo } from "../constants/personalInfo";
import { techStack } from "../constants/techStack";
import { projects } from "../constants/projects";
import { contact } from "../constants/contact";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useTypewriter(titles: string[], typingSpeed = 70, pause = 1200) {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = titles[titleIdx];

    if (!isDeleting && charIdx < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitle.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIdx === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitle.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, titleIdx, titles, typingSpeed, pause]);

  return displayed;
}

export default function Home() {
  const animatedTitle = useTypewriter(personalInfo.title);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen w-full libertinus-mono-regular">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 flex flex-row justify-between items-center px-4 sm:px-8 py-2 sm:py-3 shadow-md">
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 py-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-purple-700 hover:text-pink-600 font-semibold transition-colors tracking-wide text-base sm:text-lg"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          download
          className="btn-primary px-4 py-2 rounded shadow font-semibold text-base hidden sm:inline-block"
        >
          Download Resume
        </a>
        {/* Hamburger for mobile */}
        <div className="sm:hidden flex items-center ml-auto">
          <button
            aria-label="Open menu"
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block w-7 h-1 bg-purple-700 mb-1 rounded"></span>
            <span className="block w-7 h-1 bg-purple-700 mb-1 rounded"></span>
            <span className="block w-7 h-1 bg-purple-700 rounded"></span>
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-4 w-48 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col z-50 animate-fade-in">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-6 py-3 text-purple-700 hover:text-pink-600 font-semibold border-b border-gray-100 last:border-b-0 text-base text-left"
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-pink-700 hover:text-purple-700 font-semibold text-base text-left"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        )}
      </header>
      {/* Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Hero Section */}
        <section
          id="hero"
          className="snap-start h-[100vh] flex flex-col justify-center items-center text-center gap-4 sm:gap-6 hero-section px-4"
        >
          <Image
            src={personalInfo.image}
            alt={personalInfo.name}
            width={150}
            height={150}
            className="rounded-full border-4 border-purple-500 shadow-xl mx-auto w-28 h-28 sm:w-40 sm:h-40"
            priority
          />
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-900 drop-shadow-lg">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl text-pink-700 font-bold min-h-[2.5em] flex items-center justify-center">
            {animatedTitle}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
          <p className="text-base sm:text-xl text-purple-700 font-medium">
            {personalInfo.experience}
          </p>
        </section>
        {/* Tech Stack Section */}
        <section
          id="tech"
          className="snap-start h-[100vh] flex flex-col justify-center items-center text-center gap-6 sm:gap-8 tech-section px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-900 mb-2 sm:mb-4 drop-shadow">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xs sm:max-w-3xl mx-auto">
            {techStack.map((cat) => (
              <div key={cat.category} className="bg-white/80 rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-2xl font-bold text-pink-700 mb-1 sm:mb-2">
                  {cat.category}
                </h3>
                <ul className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base font-semibold shadow"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="snap-start h-[100vh] flex flex-col justify-center items-center text-center gap-6 sm:gap-8 projects-section px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-900 mb-2 sm:mb-4 drop-shadow">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xs sm:max-w-4xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="bg-white/90 rounded-lg p-4 sm:p-6 shadow-xl border-l-4 border-pink-400 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-2xl font-bold text-pink-700">
                  {project.title}
                </h3>
                <p className="text-purple-800 text-base sm:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-4 justify-center mt-1 sm:mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline font-semibold text-sm sm:text-base"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-700 hover:underline font-semibold text-sm sm:text-base"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="snap-start h-[100vh] flex flex-col justify-center items-center text-center gap-6 sm:gap-8 contact-section px-4"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-900 mb-2 sm:mb-4 drop-shadow">Contact</h2>
          <div className="flex flex-col gap-1 sm:gap-2 items-center">
            <p className="text-base sm:text-lg text-purple-800">
              <span className="font-bold">Email:</span>{' '}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:underline font-semibold cursor-pointer"
              >
                {contact.email}
              </a>
            </p>
            <p className="text-base sm:text-lg text-purple-800">
              <span className="font-bold">Phone:</span>{' '}
              <a
                href={`tel:${contact.phone}`}
                className="text-pink-700 hover:underline font-semibold cursor-pointer"
              >
                {contact.phone}
              </a>
            </p>
            <p className="text-base sm:text-lg text-purple-800">
              <span className="font-bold">LinkedIn:</span>{' '}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:underline font-semibold"
              >
                {contact.linkedin}
              </a>
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto bg-white/80 p-4 sm:p-6 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Will Contact you soon");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 sm:px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-purple-50 text-purple-900 text-sm sm:text-base"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 sm:px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-purple-50 text-purple-900 text-sm sm:text-base"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-3 sm:px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-purple-50 text-purple-900 text-sm sm:text-base"
              rows={4}
              required
            />
            <button
              type="submit"
              className="btn-primary px-3 sm:px-4 py-2 rounded shadow font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
