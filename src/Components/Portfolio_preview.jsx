import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MotionLink } from "../Common/MotionLink";

export default function PortfolioPreview() {
  const projects = [
    {
      id: 1,
      title: "Brainiac Scholar 🧠",
      category: "Web Applications",
      description: "AI-powered academic research platform. Fetches papers, visualizes citation networks, and provides research gap detection.",
      tech: ["Python", "FastAPI", "JavaScript"],
      link: "https://brainiacscholar.onrender.com",
      github: "https://github.com/brainiacweb-tech",
    },
    {
      id: 2,
      title: "Brainiac BI Solutions",
      category: "Data & BI",
      description: "Professional Power BI dashboard solution. Provides business intelligence, data modeling, and reporting visualization.",
      tech: ["Power BI", "DAX", "Analytics"],
      link: "https://brainiacpowerbisolutions.netlify.app/",
      github: "https://github.com/brainiacweb-tech",
    },
    {
      id: 3,
      title: "Kairos Student Planner",
      category: "Web Applications",
      description: "Intelligent student scheduling calendar app. Helps students manage courses, assignments, and time with smart scheduling features.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://kairos-smart-student-planner-web-app-cs5n.onrender.com",
      github: "https://github.com/brainiacweb-tech",
    },
  ];

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Featured <span className="text-secondary dark:text-other">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Showcase of our latest case studies and successful technical engineering deployments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel p-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Category & Title */}
                <div className="space-y-2 text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-other">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 justify-start">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-tertiary/10 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-primary dark:text-other dark:hover:text-other/80"
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                >
                  Source{" "}
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MotionLink
            to="/portfolio"
            className="btn-gradient inline-block px-8 py-4 text-base font-bold shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Portfolio
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
