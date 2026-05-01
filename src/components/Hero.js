"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiFacebook, FiDownload, FiMail } from "react-icons/fi";
import Image from "next/image";
import myImage from "@/assets/my.jpeg";

const roles = [
  "MERN Stack Developer",
  "Competitive Programmer",
  "React.js Specialist",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    let timeoutId;
    const scheduleNext = (isCurrentlyImage) => {
      // If image is showing, wait 8 seconds before switching to code.
      // If code is showing, wait 4 seconds before switching to image.
      timeoutId = setTimeout(() => {
        setShowImage(!isCurrentlyImage);
        scheduleNext(!isCurrentlyImage);
      }, isCurrentlyImage ? 8000 : 4000);
    };
    
    scheduleNext(true);

    return () => {
      clearInterval(roleInterval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 z-0"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-cyan-400 text-sm font-semibold tracking-wider border border-cyan-500/30 overflow-hidden relative"
            >
              <div className="flex h-5 items-center justify-center min-w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                MD Shohanur Rahman
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg"
            >
              I build modern, responsive, and scalable web applications using the MERN stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-full glass-card text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors border border-gray-600 hover:border-cyan-400"
              >
                <FiMail /> Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-6 mt-10"
            >
              {[
                { icon: <FiGithub size={24} />, href: "https://github.com/sr-shuvobd" },
                { icon: <FiLinkedin size={24} />, href: "https://www.linkedin.com/in/shohanur-rahman-bd/" },
                { icon: <FiFacebook size={24} />, href: "https://www.facebook.com/shohanur.rs" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1, color: "#22d3ee" }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors relative group"
                >
                  <span className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image/Illustration - Glass Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-1/2 flex justify-center perspective-1000"
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center mt-8 lg:mt-0 mx-auto">
              <AnimatePresence mode="wait">
                {showImage ? (
                  <motion.div
                    key="profile-image"
                    initial={{ x: 100, opacity: 0, rotateY: -15 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -100, opacity: 0, rotateY: 15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="absolute inset-0 w-full h-full rounded-2xl p-1.5 bg-gradient-to-tr from-cyan-500 to-purple-500 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-[#0f172a] bg-[#1e293b] relative">
                      <Image 
                        src={myImage} 
                        alt="MD Shohanur Rahman" 
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="terminal"
                    initial={{ x: 100, opacity: 0, rotateY: -15 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -100, opacity: 0, rotateY: 15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Glow Behind Terminal */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                    
                    {/* Terminal Window */}
                    <div className="relative w-full h-full glass-card border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl bg-[#0f172a]/80 backdrop-blur-xl flex flex-col">
                      {/* Terminal Header */}
                      <div className="px-4 py-3 border-b border-gray-700/50 bg-[#1e293b]/50 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-2 text-xs font-mono text-gray-400 flex-1 text-center pr-8">developer.js</div>
                      </div>
                      
                      {/* Terminal Body */}
                      <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-y-auto flex-1">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                          <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="ml-4">
                          <span className="text-emerald-400">name</span><span className="text-white">:</span> <span className="text-orange-300">&quot;Shohanur Rahman&quot;</span><span className="text-white">,</span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="ml-4">
                          <span className="text-emerald-400">skills</span><span className="text-white">:</span> <span className="text-purple-400">[</span>
                          <span className="text-orange-300">&quot;React&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;Next.js&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;Node&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;MongoDB&quot;</span>
                          <span className="text-purple-400">]</span><span className="text-white">,</span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="ml-4">
                          <span className="text-emerald-400">hardWorker</span><span className="text-white">:</span> <span className="text-cyan-400">true</span><span className="text-white">,</span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="ml-4">
                          <span className="text-emerald-400">problemSolver</span><span className="text-white">:</span> <span className="text-cyan-400">true</span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
                          <span className="text-yellow-300">{`}`}</span><span className="text-white">;</span>
                        </motion.div>
                        
                        <br />
                        
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
                          <span className="text-cyan-400">developer</span><span className="text-white">.</span><span className="text-blue-400">buildAwesomeThings</span><span className="text-yellow-300">()</span><span className="text-white">;</span>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: [0, 1, 0] }} 
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="mt-2 w-2 h-4 bg-cyan-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Stat Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-cyan-500/30 flex items-center gap-3 z-20"
              >
                <div className="text-3xl font-bold text-cyan-400">2★</div>
                <div className="text-xs text-gray-300 font-medium leading-tight">CodeChef<br/>Rating</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-xl border border-purple-500/30 flex items-center gap-3 z-20"
              >
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-xs text-gray-300 font-medium leading-tight">Projects<br/>Completed</div>
              </motion.div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
