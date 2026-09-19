import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { ExternalLink, BookOpen, BarChart2, Calendar, Wallet, Building, Laptop, ShoppingCart, Video, FileText } from "lucide-react";

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
      image: "/images/project1.jpg",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Brainiac BI Solutions",
      category: "analytics",
      description: "Professional Power BI solutions platform. Provides comprehensive business intelligence support, dashboard visualization, and modeling.",
      tech: ["Power BI", "DAX", "Data Analytics"],
      link: "https://brainiacpowerbisolutions.netlify.app/",
      github: "https://github.com/brainiacweb-tech",
      image: "/images/project2.jpg",
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Kairos Smart Student Planner",
      category: "web",
      description: "Intelligent student scheduling and planning application. Helps students manage courses, assignments, and time with smart scheduling features.",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      link: "https://kairos-smart-student-planner-web-app-cs5n.onrender.com",
      github: "https://github.com/brainiacweb-tech",
      image: "/images/project3.jpg",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Brainiac Expense Tracker",
      category: "desktop",
      description: "A high-performance desktop budget tracker with real-time analytics, smart budget alerts, SQLite database, and Excel export.",
      tech: ["Python", "Tkinter", "SQLite", "Matplotlib"],
      link: "#",
      github: "https://github.com/brainiacweb-tech/brainiac-expense-tracker",
      image: "/images/project5.png",
      icon: <Wallet className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "BrainiacBank",
      category: "web",
      description: "A simulated digital banking platform with client dashboards, financial analytics, AI assistant, admin control center, and Supabase backend.",
      tech: ["Python", "Flask", "Supabase", "Chart.js"],
      link: "https://brainiacbank.onrender.com",
      github: "https://github.com/brainiacweb-tech/brainiacbank",
      image: "/images/project6.png",
      icon: <Building className="h-6 w-6" />,
    },
    {
      id: 6,
      title: "BrainiacTech Hub",
      category: "web",
      description: "Professional tech support and software installation website featuring booking appointments, FAQ, and structured services grids.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://brainiactechhub.dev",
      github: "https://github.com/brainiacweb-tech/brainiactechhubwebsitenew",
      image: "/images/project8.png",
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      id: 7,
      title: "BrainiacTech Hub Accessories",
      category: "web",
      description: "E-commerce store for computer accessories featuring product catalogs, responsive shopping cart, and local checkout integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://brainiactechhubaccessories.netlify.app/",
      github: "https://github.com/brainiacweb-tech/brainiactech-hub-computer-accessories-",
      image: "/images/project9.png",
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      id: 8,
      title: "YouTube Playlist Downloader",
      category: "desktop",
      description: "A Python-powered YouTube playlist downloader with a clean web interface, batch downloading pipelines, and Windows installer support.",
      tech: ["Python", "Flask", "JavaScript"],
      link: "#",
      github: "https://github.com/brainiacweb-tech/Brainiac-Youtube-Playlist-Downloader-",
      image: "/images/project10.png",
      icon: <Video className="h-6 w-6" />,
    },
    {
      id: 9,
      title: "LinkedIn Assignment Helper",
      category: "web",
      description: "Web application helping students format and organize LinkedIn assignment submissions. Features student metadata collections and PDF sheet generation.",
      tech: ["Python", "Flask", "HTML", "Docker"],
      link: "https://brainiac-smart-linkedin-assignment-helper-oo3d.onrender.com",
      github: "https://github.com/brainiacweb-tech/BRAINIAC-Smart-LinkedIn-Assignment-Helper",
      image: "/images/project7.jpg",
      icon: <FileText className="h-6 w-6" />,
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
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero_image.jpg')` }}
        />
        <div className="absolute inset-0 bg-[#071333]/85 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-3xl space-y-4 -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Featured <span className="text-[#36ADA3]">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Explore case studies and web systems developed by our engineering division.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area (Overlapping Card) */}
      <section className="relative z-20 px-6 lg:px-8 -mt-40 mb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden p-8 md:p-12 lg:p-16"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[#36ADA3] text-white shadow-lg shadow-[#36ADA3]/20 scale-105"
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

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
                  className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col group overflow-hidden h-full"
                >
                  {/* Top Image Area */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-100">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-[#071333]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"/>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 relative flex-1 flex flex-col">
                    {/* Floating Icon */}
                    <div className="absolute -top-10 left-6 h-16 w-16 bg-[#071333] rounded-full flex items-center justify-center text-white border-4 border-white shadow-md group-hover:-translate-y-2 group-hover:bg-[#36ADA3] transition-all duration-300">
                      {project.icon}
                    </div>

                    <div className="pt-6 space-y-4 flex-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#36ADA3]">
                        {categories.find((c) => c.id === project.category)?.name}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#071333] leading-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Group */}
                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                      {project.link && project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#36ADA3] hover:text-[#2A8B83] transition-colors"
                        >
                          Live Demo <ExternalLink className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-400 cursor-not-allowed">
                          Repo Only
                        </span>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#071333] transition-colors"
                        >
                          Source{" "}
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
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
                <p className="text-lg text-slate-500">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
