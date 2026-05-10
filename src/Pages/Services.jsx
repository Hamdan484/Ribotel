import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function ServicesSection() {
  const { isDark } = useTheme();

  const services = [
    {
      id: 1,
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
),
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights that drive business growth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: "💻",
      title: "Web Development",
      description:
        "Custom web solutions built with modern technology and best practices.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      icon: "🤝",
      title: "IT Consultancy",
      description:
        "Expert guidance to align your IT strategy with business objectives.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 4,
      icon: (<ion-icon name="book-outline"></ion-icon>),
      title: " Academic Writing",
      description:
        "Helping students and researchers excel with expert academic writing and research support services.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
            Our Expertise
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            Services We{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Offer
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Comprehensive IT solutions designed to empower your business and
            accelerate your growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div
                className="glass-panel h-full p-8 transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3
                  className={`mb-4 font-display text-2xl font-bold  text-teal-800`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className={`group/link inline-flex items-center gap-2 font-semibold ${
                    isDark ? "text-cyan-500" : "text-teal-700"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <MotionLink
            to="/portfolio"
            
          >
                  <span className="text-teal-500">
                    
                    Learn More</span></MotionLink>
                  <svg
                    className="w-5 h-5 group-hover/link:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"

                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            Didn't find what you're looking for?
          </p>
          <motion.span
            className="btn-outline-themed inline-block px-8 py-3 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.span>
        </motion.div>
        */}
      </div>
    </section>
  );
}
