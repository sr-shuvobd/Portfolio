"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (pathname !== "/") return; // Only highlight sections on home page

      const sections = navLinks.map((link) => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div 
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "w-[90%] max-w-5xl glass-card rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-slate-700/50 bg-[#0f172a]/70 backdrop-blur-xl" 
            : "w-full container mx-auto px-6 md:px-12 py-2"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="/#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tight"
        >
          MD Shohanur
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === "/" && activeSection === link.name.toLowerCase();
            const linkHref = pathname === "/" ? link.href : `/${link.href}`;

            return (
              <Link
                key={link.name}
                href={linkHref}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-600/50 to-cyan-600/50 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}

          <a
            href="/MD_Shohanur_Rahman_Resume.pdf"
            download="MD_Shohanur_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/40 rounded-full bg-cyan-950/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <FiDownload size={14} /> Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/MD_Shohanur_Rahman_Resume.pdf"
            download="MD_Shohanur_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-cyan-400 border border-cyan-500/40 rounded-full bg-cyan-950/40"
          >
            <FiDownload size={13} /> Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[90%] glass-card rounded-2xl border border-slate-700 py-6 flex flex-col items-center gap-4 shadow-2xl z-40 bg-[#0f172a]/95 backdrop-blur-3xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === "/" && activeSection === link.name.toLowerCase();
              const linkHref = pathname === "/" ? link.href : `/${link.href}`;

              return (
                <Link
                  key={link.name}
                  href={linkHref}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold px-6 py-2.5 rounded-full w-3/4 text-center transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-cyan-500/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="/MD_Shohanur_Rahman_Resume.pdf"
              download="MD_Shohanur_Rahman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-base font-bold px-6 py-2.5 rounded-full w-3/4 text-center transition-all bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <FiDownload size={18} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
