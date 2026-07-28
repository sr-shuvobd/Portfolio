"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowDownRight, FiCode, FiTerminal, FiDownload } from "react-icons/fi";
import Image from "next/image";
import myImage from "@/assets/my.jpeg";

const roles = [
  "MERN Stack Developer",
  "React.js & Next.js Specialist",
  "Competitive Programmer (2★)",
  "Full-Stack Web Engineer",
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
      timeoutId = setTimeout(() => {
        setShowImage(!isCurrentlyImage);
        scheduleNext(!isCurrentlyImage);
      }, isCurrentlyImage ? 9000 : 4500);
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full mix-blend-screen filter blur-[140px] animate-blob pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-600/15 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-4000 pointer-events-none z-0"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Animated Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 rounded-full glass-card text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden relative"
            >
              <div className="flex h-6 items-center justify-center min-w-[220px] sm:min-w-[260px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute font-mono"
                  >
                    ⚡ {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white"
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
              className="text-slate-300 text-base sm:text-lg lg:text-xl mb-9 max-w-xl leading-relaxed"
            >
              Building modern, high-performance, and scalable web applications using <strong className="text-cyan-400 font-semibold">Next.js 16</strong>, <strong className="text-purple-400 font-semibold">React 19</strong>, and the <strong className="text-emerald-400 font-semibold">MERN Stack</strong>.
            </motion.p>

            {/* Action Buttons */}
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
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all flex items-center gap-2"
              >
                View Projects <FiArrowDownRight className="text-lg" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/MD_Shohanur_Rahman_Resume.pdf"
                download="MD_Shohanur_Rahman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center gap-2"
              >
                <FiDownload className="text-lg" /> Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3.5 rounded-full glass-card text-white font-semibold text-sm flex items-center gap-2 hover:bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition-all shadow-lg"
              >
                <FiMail className="text-cyan-400" /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 mt-10 items-center"
            >
              {[
                { icon: <FiGithub size={22} />, href: "https://github.com/sr-shuvobd", label: "GitHub" },
                { icon: <FiLinkedin size={22} />, href: "https://www.linkedin.com/in/shohanur-rahman-bd/", label: "LinkedIn" },
                { icon: <FiFacebook size={22} />, href: "https://www.facebook.com/shohanur.rs", label: "Facebook" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-2xl glass-card border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Interactive Profile Card / Terminal Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-1/2 flex justify-center"
            style={{ perspective: "1200px" }}
          >
            <div className="relative w-[290px] xs:w-[340px] sm:w-[420px] max-w-lg h-[340px] sm:h-[400px] flex items-center justify-center mt-8 lg:mt-0 mx-auto">
              
              <AnimatePresence mode="wait">
                {showImage ? (
                  <motion.div
                    key="profile-image"
                    initial={{ x: 80, opacity: 0, rotateY: -15 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -80, opacity: 0, rotateY: 15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="absolute inset-0 w-full h-full rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(6,182,212,0.35)] group"
                  >
                    <div className="w-full h-full rounded-[22px] overflow-hidden border-4 border-slate-950 bg-slate-900 relative">
                      <Image 
                        src={myImage} 
                        alt="MD Shohanur Rahman" 
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="terminal"
                    initial={{ x: 80, opacity: 0, rotateY: -15 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -80, opacity: 0, rotateY: 15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Glowing Terminal Frame */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 rounded-3xl blur-md opacity-40 animate-pulse"></div>
                    
                    <div className="relative w-full h-full glass-card border border-slate-700/60 rounded-3xl overflow-hidden shadow-2xl bg-slate-950/90 backdrop-blur-2xl flex flex-col">
                      
                      {/* Terminal Header */}
                      <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <FiTerminal className="text-cyan-400" /> developer.ts
                        </div>
                        <div className="w-12"></div>
                      </div>
                      
                      {/* Terminal Body */}
                      <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-y-auto flex-1">
                        <div>
                          <span className="text-purple-400 font-bold">const</span> <span className="text-cyan-400 font-bold">developer</span> <span className="text-white">=</span> <span className="text-amber-300">{`{`}</span>
                        </div>
                        
                        <div className="ml-4 my-1">
                          <span className="text-emerald-400">name</span><span className="text-white">:</span> <span className="text-orange-300">&quot;MD Shohanur Rahman&quot;</span><span className="text-white">,</span>
                        </div>

                        <div className="ml-4 my-1">
                          <span className="text-emerald-400">role</span><span className="text-white">:</span> <span className="text-orange-300">&quot;Full-Stack Engineer&quot;</span><span className="text-white">,</span>
                        </div>

                        <div className="ml-4 my-1">
                          <span className="text-emerald-400">stack</span><span className="text-white">:</span> <span className="text-purple-400">[</span>
                          <span className="text-orange-300">&quot;Next.js&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;React&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;Node&quot;</span><span className="text-white">, </span>
                          <span className="text-orange-300">&quot;MongoDB&quot;</span>
                          <span className="text-purple-400">]</span><span className="text-white">,</span>
                        </div>

                        <div className="ml-4 my-1">
                          <span className="text-emerald-400">codeChefRating</span><span className="text-white">:</span> <span className="text-amber-400 font-bold">&quot;2★ (1400+)&quot;</span><span className="text-white">,</span>
                        </div>

                        <div className="ml-4 my-1">
                          <span className="text-emerald-400">openForHire</span><span className="text-white">:</span> <span className="text-cyan-400 font-bold">true</span>
                        </div>

                        <div>
                          <span className="text-amber-300">{`}`}</span><span className="text-white">;</span>
                        </div>
                        
                        <div className="mt-3">
                          <span className="text-cyan-400">developer</span><span className="text-white">.</span><span className="text-blue-400">buildAwesomeApps</span><span className="text-amber-300">()</span><span className="text-white">;</span>
                        </div>

                        <motion.div 
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
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 glass-card p-3.5 sm:p-4 rounded-2xl border border-cyan-500/40 flex items-center gap-3 z-30 shadow-[0_10px_30px_rgba(6,182,212,0.25)] bg-slate-900/90 backdrop-blur-xl"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">2★</div>
                <div className="text-xs text-slate-300 font-semibold leading-tight">CodeChef<br/>Rating</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -right-5 glass-card p-3.5 sm:p-4 rounded-2xl border border-purple-500/40 flex items-center gap-3 z-30 shadow-[0_10px_30px_rgba(139,92,246,0.25)] bg-slate-900/90 backdrop-blur-xl"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">15+</div>
                <div className="text-xs text-slate-300 font-semibold leading-tight">Full-Stack<br/>Projects</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
