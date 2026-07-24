import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  FiGlobe, 
  FiGithub, 
  FiArrowLeft, 
  FiCheckCircle, 
  FiCpu, 
  FiAlertTriangle, 
  FiTrendingUp, 
  FiSmartphone, 
  FiLayers,
  FiCode
} from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { projects, getProjectById } from "@/data/projectsData";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Project Details - MD Shohanur Rahman`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <CustomCursor />
      <Navbar />

      {/* Main Container */}
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all text-sm font-medium backdrop-blur-md"
          >
            <FiArrowLeft className="text-cyan-400" /> Back to Projects
          </Link>
        </div>

        {/* Hero Header Section */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-800 mb-12 shadow-2xl">
          {/* Large Project Banner Image */}
          <div className="relative h-[320px] sm:h-[450px] md:h-[520px] w-full overflow-hidden bg-slate-900">
            <Image
              src={project.banner}
              alt={`${project.title} Banner`}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            {/* Banner Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/40 mb-3 backdrop-blur-md">
                Featured Case Study
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
                {project.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-xl max-w-3xl font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="glass-card rounded-2xl p-6 mb-12 border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl">
          <h2 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Project Quick Links & Repositories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 🌐 Live Demo */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FiGlobe className="text-lg text-cyan-200" />
              🌐 Live Demo
            </a>

            {/* 💻 GitHub Client Repository */}
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700 hover:border-purple-500/60 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold text-sm"
            >
              <FiGithub className="text-lg text-purple-400" />
              💻 GitHub Client Repository
            </a>

            {/* ⚙ GitHub Server Repository */}
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/60 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold text-sm"
            >
              <FiCode className="text-lg text-cyan-400" />
              ⚙ GitHub Server Repository
            </a>

            {/* ⬅ Back to Projects */}
            <Link
              href="/#projects"
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all font-semibold text-sm"
            >
              <FiArrowLeft className="text-lg" />
              ⬅ Back to Projects
            </Link>
          </div>
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-10">

            {/* Professional Description */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FiLayers className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">Professional Overview</h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                {project.professionalDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FiCheckCircle className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-400 shrink-0 font-bold">✓</span>
                    <span className="leading-relaxed text-slate-200 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Faced */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <FiAlertTriangle className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">Challenges Faced During Development</h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Future Improvements */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FiTrendingUp className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">Future Improvements</h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.futureImprovements}
              </p>
            </div>

          </div>

          {/* Sidebar Specs Column (Right 1 col) */}
          <div className="space-y-8">
            
            {/* Tech Stack Box */}
            <div className="glass-card rounded-3xl p-7 border border-slate-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FiCpu className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-900 text-cyan-300 text-xs font-semibold rounded-xl border border-cyan-900/60 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsive Design Information */}
            <div className="glass-card rounded-3xl p-7 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FiSmartphone className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Responsive Design</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.responsiveDesign}
              </p>
            </div>

            {/* Navigation Card */}
            <div className="glass-card rounded-3xl p-7 border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Want to see more work?</h3>
              <p className="text-slate-400 text-xs mb-5">Check out my other featured projects or get in touch!</p>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 text-cyan-400 hover:bg-slate-700 hover:text-white transition-all text-sm font-semibold border border-slate-700"
              >
                <FiArrowLeft /> Back to All Projects
              </Link>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
