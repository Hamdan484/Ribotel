import { motion } from "framer-motion";
import { Laptop, Code, BarChart3, Palette, GraduationCap, ArrowRight } from "lucide-react";
import { MotionLink } from "../Common/MotionLink";

export default function Services() {
  const categories = [
    {
      id: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Tech Support & Optimization",
      description: "OS installation, software setup, database config, and general system optimizations.",
    },
    {
      id: "dev",
      icon: <Code className="h-6 w-6" />,
      title: "Web & Software Development",
      description: "Custom websites, full-scale web applications, database design, and mobile apps.",
    },
    {
      id: "data",
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Actionable business intelligence and reports using Excel, Power BI, and Tableau.",
    },
    {
      id: "creative",
      icon: <Palette className="h-6 w-6" />,
      title: "Creative & Content Writing",
      description: "Graphic design, video editing, report writing, and slide deck presentation designs.",
    },
    {
      id: "training",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Training & Computer Tutorials",
      description: "Personalized computer tutorials and software walkthrough sessions.",
    },
  ];

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Our <span className="text-secondary dark:text-other">Services</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Comprehensive IT solutions and technical support tailored to your business needs and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel p-8 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-other/10 text-other dark:bg-other/20">
                  {cat.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary dark:text-slate-100">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-tertiary/10">
                <MotionLink
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary dark:text-other dark:hover:text-other/80"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </MotionLink>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Explore More CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MotionLink
            to="/services"
            className="btn-gradient inline-block px-8 py-4 text-base font-bold shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Services
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
