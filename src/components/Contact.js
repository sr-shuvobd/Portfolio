"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiFacebook, FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("_captcha", "false");
    formData.append("_subject", "New Contact Message from Portfolio!");
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/shohanur.rs.bd@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      const responseData = await res.json();

      if (res.ok && responseData.success === "true") {
        setIsSubmitted(true);
        toast.success("Message sent successfully! Redirecting to Home...");
        setTimeout(() => {
          setIsSubmitted(false);
          window.location.hash = "#home";
        }, 2500);
        e.target.reset();
      } else {
        toast.error("Failed to send message. Please check if FormSubmit is activated.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-2xl border-t border-purple-500/30 shadow-[0_10px_30px_rgba(139,92,246,0.1)]">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium">shohanur.rs.bd@gmail.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700/50">
                  <p className="text-sm text-gray-500 mb-4">Social Profiles</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/sr-shuvobd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 hover:scale-110 transition-all">
                      <FiGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/shohanur-rahman-bd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 hover:scale-110 transition-all">
                      <FiLinkedin size={18} />
                    </a>
                    <a href="https://www.facebook.com/shohanur.rs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-blue-500 hover:bg-gray-700 hover:scale-110 transition-all">
                      <FiFacebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-2xl border-t border-cyan-500/30 shadow-[0_10px_30px_rgba(6,182,212,0.1)] flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all placeholder-gray-500"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-400">
                  <FiMessageSquare />
                </div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="flex items-center gap-2 relative z-10">
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <>
                      <FiCheck /> Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
