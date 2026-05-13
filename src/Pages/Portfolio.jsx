import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

import Chinova_image from "../assets/Images/Chinova.png";
import Academic_writing_image from "../assets/Images/Academic_writing.png";
import Data_analytics_image from "../assets/Images/Data_analytics.png";
export default function PortfolioSection() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with payment integration",
      image: Chinova_image,
      color: "from-blue-500 to-cyan-500",
      link: "https://Hamdan484.github.io/Chinova/",
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "analytics",
      description: "Real-time data visualization and reporting system",
      image: Data_analytics_image,
      color: "from-cyan-500 to-blue-500",
    },
    
    {
      id: 4,
      title: "Academic writing",
      category: "Academics",
      description: "Help students with their academic writing needs, providing guidance on structure, content, and style to enhance the quality of their work.",
      image: Academic_writing_image,
      color: "from-cyan-400 to-blue-400",
    },
    
  ];
  {/* addtional portfolio
    {
      id: 3,
      title: "Mobile App",
      category: "mobile",
      description: "Cross-platform mobile application with offline support",
      image: "📱",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 5,
      title: "AI Chatbot",
      category: "ai",
      description: "Intelligent chatbot with NLP capabilities",
      image: "🤖",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 6,
      title: "CRM System",
      category: "web",
      description: "Enterprise customer relationship management platform",
      image: "👥",
      color: "from-cyan-600 to-blue-600",
    },
    */ }

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "analytics", name: "Analytics" },
    { id: "Academics", name: "Academics" },
  ]; 
{/*{ id: "mobile", name: "Mobile" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "ai", name: "AI/ML" },*/}
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section className="section-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
              isDark
                ? "border-white/10 bg-slate-950/60 text-cyan-200"
                : "border-slate-200/80 bg-white/90 text-teal-800"
            }`}
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Our Work
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            Featured{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Portfolio
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Showcase of our latest projects and success stories across various
            industries.
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
              className={`rounded-full px-6 py-2 font-medium transition-all   ${
                selectedCategory === cat.id
                  ? "bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 text-white shadow-lg shadow-teal-500/20 dark:from-cyan-500 dark:via-sky-500 dark:to-violet-600 dark:shadow-cyan-500/25"
                  : isDark
                    ? "border border-white/10 bg-slate-900/70 text-slate-300 hover:bg-slate-800/80"
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
              className="group cursor-pointer"
            >
              <div
                className="glass-panel h-full overflow-hidden rounded-2xl transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
              >
                {/* Project Image */}
                <div
                  className={`h-48 bg-linear-to-br ${project.color} flex items-center justify-center text-7xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                >
                  <img src={project.image} alt={project.title} />
                  <div
                    className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-white/10"}`}
                  ></div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div
                    className={`mb-3 text-sm font-semibold  text-teal-700
                    }`}
                  >
                    {categories.find((c) => c.id === project.category)?.name}
                  </div>
                  <h3
                    className={`mb-3 font-display text-xl tracking-tight bg-linear-to-b from-black to-blue-500 bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <motion.div
                    className={`group/link inline-flex items-center gap-2 font-semibold ${
                      isDark ? "text-cyan-300" : "text-teal-700"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span> <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold tracking-tight bg-linear-to-b from-orange-500 to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300">View Project</a></span>
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
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
            <p
              className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA 
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p
            className={`text-lg mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Want to see more of our work?
          </p>
          <motion.span
            className="btn-outline-themed inline-block px-8 py-3 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
          >
            View All Projects
          </motion.span>
        </motion.div>
        */}
      </div>
    </section>
  );
}
