"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function GithubStats() {
  const username = "sr-shuvobd";

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full glass-card p-6 rounded-2xl flex justify-center items-center overflow-x-auto hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-shadow"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0D1117&color=06b6d4&line=8b5cf6&point=10b981&area=true&hide_border=true`}
              alt="GitHub Contribution Graph"
              className="w-full object-contain min-w-[600px]"
            />
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-3 rounded-full bg-gray-800 text-white font-semibold flex items-center gap-2 hover:bg-gray-700 transition-colors border border-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
          >
            <FiGithub size={20} /> Visit My Profile
          </motion.a>
        </div>
      </div>
    </section>
  );
}
