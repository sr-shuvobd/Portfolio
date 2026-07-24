"use client";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub 
} from "react-icons/fa";
import { 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiCplusplus, SiFlutter, SiOpenai 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, and high-performance UI architectures.",
    skills: [
      { name: "React 19", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js 16", icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
    color: "from-cyan-500/10 via-blue-500/5 to-purple-500/10",
    border: "hover:border-cyan-500/50",
    glow: "shadow-cyan-500/10",
  },
  {
    title: "Backend & Database",
    description: "Designing scalable server routes, APIs, and persistent database schemas.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "REST APIs", icon: <span className="text-cyan-400 font-bold text-xs">API</span> },
    ],
    color: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    border: "hover:border-emerald-500/50",
    glow: "shadow-emerald-500/10",
  },
  {
    title: "Core Programming Languages",
    description: "Fundamental programming logic, data structures, and algorithms.",
    skills: [
      { name: "C Language", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Data Structures", icon: <span className="text-purple-400 font-bold text-xs">DSA</span> },
    ],
    color: "from-purple-500/10 via-pink-500/5 to-indigo-500/10",
    border: "hover:border-purple-500/50",
    glow: "shadow-purple-500/10",
  },
  {
    title: "Tools & Specialty Skills",
    description: "Development tools, mobile development, and modern AI engineering.",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Competitive Prog.", icon: <span className="text-amber-400 font-bold text-xs">CP 2★</span> },
      { name: "Flutter Dev", icon: <SiFlutter className="text-[#02569B]" /> },
      { name: "AI Prompting", icon: <SiOpenai className="text-emerald-400" /> },
    ],
    color: "from-amber-500/10 via-orange-500/5 to-rose-500/10",
    border: "hover:border-amber-500/50",
    glow: "shadow-amber-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-slate-950">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

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
            Capabilities & Technologies
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg">
            A comprehensive overview of my technical stack, tools, and specialized developer proficiencies.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`glass-card p-8 sm:p-9 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${category.border} hover:shadow-2xl ${category.glow} group`}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                  {category.description}
                </p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-3 px-4 py-3 bg-slate-900/90 backdrop-blur-md rounded-2xl text-slate-200 text-sm font-semibold border border-slate-700/60 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:text-white transition-all cursor-pointer group/skill"
                    >
                      <div className="text-xl group-hover/skill:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
