"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Smart Gym Management",
    description: "A comprehensive gym management system featuring user authentication, localized membership plans (BDT), a secure admin dashboard, and payment gateway integration.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tags: ["Next.js", "React", "Node.js", "SQLite", "Tailwind"],
    liveUrl: "https://github.com/sr-shuvobd/smart_gym",
    githubUrl: "https://github.com/sr-shuvobd/smart_gym",
  },
  {
    title: "Social Unhook Extension",
    description: "An advanced Chrome extension for managing social media distractions. Features a 'Blur Mode', DOM caching for performance, and 'Time Saved' productivity analytics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["JavaScript", "Chrome API", "DOM Manipulation", "CSS"],
    liveUrl: "https://github.com/sr-shuvobd/Social_Unhook",
    githubUrl: "https://github.com/sr-shuvobd/Social_Unhook",
  },
  {
    title: "SecureAuth App",
    description: "A robust authentication system with JWT, OAuth integration, role-based access control, and email verification.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    tags: ["MERN Stack", "JWT", "OAuth", "Nodemailer"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Modern Portfolio",
    description: "A visually stunning, highly animated developer portfolio built with the latest web technologies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

import { useState, useRef } from "react";

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

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-50"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,.1), transparent 40%)`,
        }}
      />
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-8 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-800/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-card text-white font-medium hover:bg-white/10 transition-colors"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/sr-shuvobd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
          >
            View More on GitHub <FiGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
