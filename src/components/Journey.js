"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiCpu, FiLayout, FiServer, FiStar } from "react-icons/fi";

const journeySteps = [
  {
    title: "Started Programming with C/C++",
    description: "Learned core programming concepts, data structures, and algorithms.",
    icon: <FiCpu className="text-blue-400" size={20} />,
    color: "bg-blue-500/20 border-blue-500/50",
  },
  {
    title: "Competitive Programming",
    description: "Practiced problem-solving extensively and achieved a 2★ rating on CodeChef.",
    icon: <FiStar className="text-yellow-400" size={20} />,
    color: "bg-yellow-500/20 border-yellow-500/50",
  },
  {
    title: "Learned Frontend Development",
    description: "Mastered HTML, CSS, JavaScript, and modern UI design principles.",
    icon: <FiLayout className="text-pink-400" size={20} />,
    color: "bg-pink-500/20 border-pink-500/50",
  },
  {
    title: "Built React & Next.js Projects",
    description: "Transitioned to component-based architecture and server-side rendering.",
    icon: <FiCode className="text-cyan-400" size={20} />,
    color: "bg-cyan-500/20 border-cyan-500/50",
  },
  {
    title: "Mastered MERN Stack",
    description: "Learned Node.js, Express, and MongoDB for full-stack application development.",
    icon: <FiServer className="text-green-400" size={20} />,
    color: "bg-green-500/20 border-green-500/50",
  },
  {
    title: "Building Real-World Applications",
    description: "Currently developing scalable, production-ready web apps for clients and personal growth.",
    icon: <FiBookOpen className="text-purple-400" size={20} />,
    color: "bg-purple-500/20 border-purple-500/50",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-transparent transform md:-translate-x-1/2"></div>

          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full glass-card border-2 border-gray-600 flex items-center justify-center z-10 bg-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {step.icon}
              </div>

              {/* Empty Space for md layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`w-full md:w-5/12 pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <div className={`glass-card p-6 rounded-2xl border hover:scale-105 transition-transform duration-300 ${step.color} bg-opacity-10 backdrop-blur-md`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
