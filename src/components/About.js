"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiAward, FiCpu } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode className="text-cyan-400" size={24} />,
    title: "Frontend",
    desc: "React.js, Next.js, Tailwind CSS",
  },
  {
    icon: <FiDatabase className="text-purple-400" size={24} />,
    title: "Backend",
    desc: "Node.js, Express.js, MongoDB",
  },
  {
    icon: <FiAward className="text-yellow-400" size={24} />,
    title: "Competitive Programming",
    desc: "CodeChef 2★ Rating, Problem Solving",
  },
  {
    icon: <FiCpu className="text-emerald-400" size={24} />,
    title: "Core Concepts",
    desc: "Data Structures, Algorithms, C/C++",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Passionate Developer & Problem Solver
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Hello! I&apos;m MD Shohanur Rahman, an enthusiastic MERN Stack Developer with a strong foundation in programming and problem-solving. I specialize in building robust, scalable, and visually appealing web applications from the ground up.
              </p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                My journey started with C/C++ and competitive programming, which helped me develop a strong algorithmic mindset. Currently holding a <strong className="text-yellow-400">2★ rating on CodeChef</strong>, I love tackling complex logic and optimizing code performance.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Today, I focus on the MERN ecosystem (MongoDB, Express.js, React.js, Node.js) and Next.js, constantly learning and applying modern best practices to deliver exceptional digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
