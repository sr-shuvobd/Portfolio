"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiInfo } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projectsData";

function ProjectCard({ project, index }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] flex flex-col h-full"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,.15), transparent 40%)`,
        }}
      />
      
      {/* Project Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
            Featured
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-7 relative z-20 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.slice(0, 5).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-cyan-950/40 text-cyan-300 text-xs font-medium rounded-lg border border-cyan-800/40 hover:border-cyan-500/60 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-2 py-1 bg-slate-800/60 text-slate-400 text-xs font-medium rounded-lg border border-slate-700/50">
                +{project.tags.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FiInfo className="text-lg" />
            View Details
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Website Demo"
              aria-label={`Live Demo for ${project.title}`}
              className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all flex items-center justify-center"
            >
              <FiExternalLink className="text-lg" />
            </a>
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Client Repository"
              aria-label={`GitHub Repo for ${project.title}`}
              className="p-3 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all flex items-center justify-center"
            >
              <FiGithub className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Featured Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg">
            Explore my latest production web applications, featuring modern UI architecture, full-stack functionality, dynamic database integration, and cloud deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/sr-shuvobd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 font-medium text-sm backdrop-blur-md"
          >
            <FiGithub className="text-lg text-cyan-400" />
            Explore More Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
