"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiFacebook, FiCheck, FiMapPin, FiInfo } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before sending!");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Send message to our resilient internal API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await res.json();
      toast.dismiss(loadingToast);

      if (res.ok && responseData.success) {
        setIsSubmitted(true);
        toast.success("Message sent! Check your Gmail inbox or spam folder.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Direct Client Fallback to FormSubmit AJAX
        const fallbackRes = await fetch("https://formsubmit.co/ajax/shohanur.rs.bd@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Message from ${formData.name}`,
            _template: "table",
            _captcha: "false"
          })
        });

        if (fallbackRes.ok) {
          setIsSubmitted(true);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          toast.error("Could not send email automatically. Please email directly to shohanur.rs.bd@gmail.com");
        }
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast.dismiss(loadingToast);
      toast.error("Network error. Please email directly to shohanur.rs.bd@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-xl mx-auto text-slate-400 text-base">
            Have a project in mind, a job opportunity, or a question? Send me a message and I&apos;ll get back to your email inbox promptly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-700/60 shadow-[0_10px_35px_rgba(139,92,246,0.12)] flex flex-col justify-between h-full bg-slate-900/60 backdrop-blur-xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  I am currently open for full-stack engineering roles, freelance web applications, and collaborative developer projects.
                </p>

                <div className="space-y-6">
                  {/* Email Box */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                      <a href="mailto:shohanur.rs.bd@gmail.com" className="text-white font-semibold text-sm hover:text-cyan-400 transition-colors">
                        shohanur.rs.bd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Location</p>
                      <p className="text-white font-semibold text-sm">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Important Tip Notice */}
                <div className="mt-8 p-4 rounded-2xl bg-slate-800/40 border border-cyan-500/20 flex gap-3 items-start text-xs text-slate-300">
                  <FiInfo className="text-cyan-400 text-lg flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Note:</strong> Messages are routed directly to <span className="text-cyan-300 font-mono">shohanur.rs.bd@gmail.com</span>. Check Spam/Promotions folder if testing for the first time.
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-8 mt-8 border-t border-slate-800">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-4">
                  Connect on Social Media
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/sr-shuvobd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-11 h-11 rounded-xl glass-card border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 hover:scale-110 transition-all"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shohanur-rahman-bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 rounded-xl glass-card border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:bg-blue-950/40 hover:scale-110 transition-all"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/shohanur.rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="w-11 h-11 rounded-xl glass-card border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-950/40 hover:scale-110 transition-all"
                  >
                    <FiFacebook size={20} />
                  </a>
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
              className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-700/60 shadow-[0_10px_35px_rgba(6,182,212,0.12)] flex flex-col gap-6 bg-slate-900/60 backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-all placeholder-slate-500 text-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-all placeholder-slate-500 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400">
                  <FiMessageSquare />
                </div>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you? Write your message here..."
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-all placeholder-slate-500 text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group relative w-full flex justify-center items-center py-4 px-6 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2 relative z-10">
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : isSubmitted ? (
                    <>
                      <FiCheck className="text-lg text-emerald-300" />
                      Message Sent Directly to Gmail!
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message Now
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
