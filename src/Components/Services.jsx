import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function Services() {
  const { isDark } = useTheme();

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Custom web solutions built with modern technology and best practices. Responsive, fast, and scalable.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
),
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights that drive business growth and informed decisions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: "🤝",
      title: "IT Consultancy",
      description:
        "Expert guidance to align your IT strategy with business objectives and maximize ROI.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 4,
      icon: (<ion-icon name="book-outline"></ion-icon>),
      title: " Academic Writing",
      description:
        "Helping students and researchers excel with expert academic writing and research support services.",
    },
    {
      id: 5,
      icon: "🎓",
      title: "Training Programs",
      description:
        "Comprehensive training and workshops to upskill your team with latest technologies.",
      color: "from-blue-400 to-cyan-400",
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
          <h2 className="mb-6 font-display tracking-tight text-slate-600 md:text-5xl lg:text-6xl dark:text-slate-50 font-bold">
            Our{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Services
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Comprehensive IT solutions tailored to your business needs and
            growth objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel p-8 transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3
                className={`mb-3 text-xl font-bold ${isDark ? "text-cyan-600" : "text-teal-800"}`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-600"}`}
              >
                {service.description}
              </p>
              <div
                className={`mt-4 h-1 rounded-full bg-linear-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MotionLink
            to="/services"
            className="btn-gradient inline-block px-8 py-4 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
