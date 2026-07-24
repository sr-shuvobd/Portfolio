"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiBookOpen, FiCode, FiCpu, FiLayout, FiServer, FiStar, FiArrowDownCircle } from "react-icons/fi";

const journeySteps = [
  {
    title: "Started Programming with C/C++",
    description: "Learned core programming concepts, data structures, and algorithms. Built a strong foundation in problem-solving logic.",
    icon: <FiCpu size={24} />,
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
    date: "The Beginning",
  },
  {
    title: "Competitive Programming",
    description: "Practiced problem-solving extensively and achieved a 2★ rating on CodeChef. Competed in various online coding contests.",
    icon: <FiStar size={24} />,
    color: "from-yellow-500 to-amber-500",
    shadow: "shadow-yellow-500/20",
    date: "Logic Mastery",
  },
  {
    title: "Learned Frontend Development",
    description: "Mastered HTML, CSS, JavaScript, and modern UI design principles. Started crafting responsive and interactive user interfaces.",
    icon: <FiLayout size={24} />,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    date: "UI/UX Era",
  },
  {
    title: "Built React & Next.js Projects",
    description: "Transitioned to component-based architecture and server-side rendering, building dynamic web applications with modern state management.",
    icon: <FiCode size={24} />,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
    date: "Frontend scaling",
  },
  {
    title: "Mastered MERN Stack",
    description: "Learned Node.js, Express, and MongoDB for full-stack application development. Integrated RESTful APIs, authentication, and secure databases.",
    icon: <FiServer size={24} />,
    color: "from-emerald-400 to-green-600",
    shadow: "shadow-emerald-500/20",
    date: "Full-Stack Era",
  },
  {
    title: "Building Real-World Applications",
    description: "Currently developing scalable, production-ready web apps for clients and personal growth, focusing on performance and clean architecture.",
    icon: <FiBookOpen size={24} />,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/20",
    date: "Present",
  },
];

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-32 relative overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10" ref={containerRef}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3 block">
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            A chronological timeline of my evolution as a software developer, from basic problem-solving to architecting full-stack production systems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800/50 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
          
          {/* Animated Foreground Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-400 to-emerald-500 transform md:-translate-x-1/2 rounded-full hidden sm:block shadow-[0_0_15px_rgba(6,182,212,0.5)] origin-top"
          ></motion.div>

          <div className="space-y-12 sm:space-y-24">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-between flex-col sm:flex-row ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  {/* Timeline Dot with Pulse Animation */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full glass-card border border-slate-700 bg-slate-900 items-center justify-center z-20 shadow-2xl overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="relative z-10 text-white"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Empty Spacer for Layout */}
                  <div className="hidden sm:block w-5/12"></div>

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                    className={`w-full sm:w-5/12 relative group ${
                      isEven ? "sm:text-left" : "sm:text-right"
                    }`}
                  >
                    {/* Glowing Accent Line pointing to dot */}
                    <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r ${step.color} ${isEven ? "-left-8" : "-right-8"}`}></div>

                    <div className={`glass-card p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl ${step.shadow}`}>
                      
                      {/* Gradient Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Date Badge */}
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                        {step.date}
                      </span>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 text-center flex flex-col items-center justify-center opacity-50"
        >
          <p className="text-sm text-slate-500 font-medium mb-3 uppercase tracking-widest">The journey continues</p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <FiArrowDownCircle className="text-3xl text-cyan-500/50" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
