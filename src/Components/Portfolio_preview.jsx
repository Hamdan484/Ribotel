import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

import Chinova_image from "../assets/Images/Chinova.png";
import Academic_writing_image from "../assets/Images/Academic_writing.png";
import Data_analytics_image from "../assets/Images/Data_analytics.png";

export default function PortfolioPreview() {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Chinova",
      category: "Web Development",
      description: "Full-stack e-commerce site for coffee shop with payment integration",
     
      color: "from-blue-500 to-cyan-500",
      image: Chinova_image,
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time data visualization and reporting system",
      image: Data_analytics_image,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Mobile App",
      category: "Mobile Development",
      description: "Cross-platform mobile application with offline support",
      image: Academic_writing_image,
      color: "from-blue-400 to-cyan-400",
    },
  ];

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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Portfolio
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Showcase of our latest projects and successful client
            collaborations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel group cursor-pointer overflow-hidden rounded-2xl transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
            >
              {/* Icon Area */}
              <div
                className={`h-40 bg-linear-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <span className="relative z-10"><img src={project.image} alt={project.title} /></span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className={`mb-2 text-sm font-semibold ${isDark ? "text-cyan-300" : "text-teal-700"}`}
                >
                  {project.category}
                </div>
                <h3
                  className={`mb-3 text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MotionLink
            to="/portfolio"
            className="btn-gradient inline-block px-8 py-4 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
