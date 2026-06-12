import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Brainiac Scholar 🧠",
      category: "web",
      description: "AI-powered academic research intelligence platform. Fetches papers, visualizes citation networks, and provides research gap detection.",
      tech: ["Python", "FastAPI", "JavaScript", "NetworkX"],
      link: "https://brainiacscholar.onrender.com",
      github: "https://github.com/brainiacweb-tech",
    },
    {
      id: 2,
      title: "Brainiac BI Solutions",
      category: "analytics",
      description: "Professional Power BI solutions platform. Provides comprehensive business intelligence support, dashboard visualization, and modeling.",
      tech: ["Power BI", "DAX", "Data Analytics"],
      link: "https://brainiacpowerbisolutions.netlify.app/",
      github: "https://github.com/brainiacweb-tech",
    },
    {
      id: 3,
      title: "Kairos Smart Student Planner",
      category: "web",
      description: "Intelligent student scheduling and planning application. Helps students manage courses, assignments, and time with smart scheduling features.",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      link: "https://kairos-smart-student-planner-web-app-cs5n.onrender.com",
      github: "https://github.com/brainiacweb-tech",
    },
    {
      id: 4,
      title: "Brainiac Expense Tracker",
      category: "desktop",
      description: "A high-performance desktop budget tracker with real-time analytics, smart budget alerts, SQLite database, and Excel export.",
      tech: ["Python", "Tkinter", "SQLite", "Matplotlib"],
      link: "#",
      github: "https://github.com/brainiacweb-tech/brainiac-expense-tracker",
    },
    {
      id: 5,
      title: "BrainiacBank",
      category: "web",
      description: "A simulated digital banking platform with client dashboards, financial analytics, AI assistant, admin control center, and Supabase backend.",
      tech: ["Python", "Flask", "Supabase", "Chart.js"],
      link: "https://brainiacbank.onrender.com",
      github: "https://github.com/brainiacweb-tech/brainiacbank",
    },
    {
      id: 6,
      title: "BrainiacTech Hub",
      category: "web",
      description: "Professional tech support and software installation website featuring booking appointments, FAQ, and structured services grids.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://brainiactechhub.dev",
      github: "https://github.com/brainiacweb-tech/brainiactechhubwebsitenew",
    },
    {
      id: 7,
      title: "BrainiacTech Hub Accessories",
      category: "web",
      description: "E-commerce store for computer accessories featuring product catalogs, responsive shopping cart, and local checkout integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://brainiactechhubaccessories.netlify.app/",
      github: "https://github.com/brainiacweb-tech/brainiactech-hub-computer-accessories-",
    },
    {
      id: 8,
      title: "YouTube Playlist Downloader",
      category: "desktop",
      description: "A Python-powered YouTube playlist downloader with a clean web interface, batch downloading pipelines, and Windows installer support.",
      tech: ["Python", "Flask", "JavaScript"],
      link: "#",
      github: "https://github.com/brainiacweb-tech/Brainiac-Youtube-Playlist-Downloader-",
    },
    {
      id: 9,
      title: "LinkedIn Assignment Helper",
      category: "web",
      description: "Web application helping students format and organize LinkedIn assignment submissions. Features student metadata collections and PDF sheet generation.",
      tech: ["Python", "Flask", "HTML", "Docker"],
      link: "https://brainiac-smart-linkedin-assignment-helper-oo3d.onrender.com",
      github: "https://github.com/brainiacweb-tech/BRAINIAC-Smart-LinkedIn-Assignment-Helper",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Applications" },
    { id: "analytics", name: "Data & BI" },
    { id: "desktop", name: "Desktop Tools" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -6, transition: { duration: 0.3 } },
  };

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Featured <span className="text-secondary dark:text-other">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore case studies and web systems developed by our engineering division.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-secondary text-white shadow-md dark:bg-other"
                  : isDark
                    ? "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                    : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={selectedCategory}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div className="glass-panel overflow-hidden flex flex-col h-full p-6 space-y-6">
                
                {/* Header Information */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-other">
                    {categories.find((c) => c.id === project.category)?.name}
                  </span>
                  <h3 className="text-2xl font-bold text-primary dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Group */}
                <div className="pt-4 border-t border-slate-100 dark:border-tertiary/10 flex items-center justify-between">
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary dark:text-other dark:hover:text-other/80"
                    >
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 cursor-not-allowed">
                      Repo Only
                    </span>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                    >
                      Source{" "}
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
