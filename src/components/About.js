"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiAward, FiCpu, FiCheckCircle } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode className="text-cyan-400" size={26} />,
    title: "Frontend Architecture",
    desc: "React.js 19, Next.js 16 (App Router), Tailwind CSS, Framer Motion",
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "group-hover:border-cyan-500/50",
  },
  {
    icon: <FiDatabase className="text-purple-400" size={26} />,
    title: "Backend & Cloud",
    desc: "Node.js, Express.js, MongoDB, RESTful APIs, JWT Auth",
    gradient: "from-purple-500/20 to-indigo-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    icon: <FiAward className="text-amber-400" size={26} />,
    title: "Competitive Programming",
    desc: "CodeChef 2★ Rating (1400+), Algorithmic Thinking & Problem Solving",
    gradient: "from-amber-500/20 to-yellow-500/10",
    border: "group-hover:border-amber-500/50",
  },
  {
    icon: <FiCpu className="text-emerald-400" size={26} />,
    title: "Core Fundamentals",
    desc: "Data Structures & Algorithms, C, C++, OOP, System Design Basis",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "group-hover:border-emerald-500/50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-slate-950">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Discover My Background
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg">
            Engineering scalable web products with modern JavaScript frameworks and strong algorithmic foundations.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden flex-1 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
                  <FiCheckCircle className="text-cyan-400" /> Full-Stack Software Engineer
                </div>

                <h3 className="text-3xl font-extrabold mb-6 text-white leading-tight">
                  Crafting Digital Experiences with <span className="text-cyan-400">Code & Logic</span>
                </h3>
                
                <p className="text-slate-300 mb-5 leading-relaxed text-base">
                  Hello! I&apos;m <strong className="text-white">MD Shohanur Rahman</strong>, a passionate MERN Stack Developer dedicated to building high-performance, visually engaging, and enterprise-ready web applications.
                </p>
                
                <p className="text-slate-300 mb-5 leading-relaxed text-base">
                  My foundation was built on rigorous competitive programming in C/C++, achieving a <strong className="text-amber-400">2★ rating on CodeChef</strong>. This background equips me with an analytical mindset to solve complex backend problems and optimize data flows.
                </p>

                <p className="text-slate-300 leading-relaxed text-base">
                  Today, I leverage <strong className="text-cyan-400">React 19, Next.js 16, Node.js, Express</strong>, and <strong className="text-emerald-400">MongoDB</strong> to architect production applications featuring smooth UI animations, clean API structures, and responsive layouts.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Primary Stack</p>
                  <p className="text-white font-bold text-sm">MERN + Next.js App Router</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Status</p>
                  <p className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Available for Hire
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`glass-card p-7 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${item.border} hover:shadow-xl group flex flex-col justify-between`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-slate-500 transition-all duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
