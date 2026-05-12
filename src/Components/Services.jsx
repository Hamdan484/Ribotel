import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";
import { Code ,ChartNoAxesCombined,Handshake, BookOpen ,GraduationCap} from "lucide-react";

export default function Services() {
  const { isDark } = useTheme();

  const services = [
    {
      id: 1,
      icon:<Code size={28} />,
      title: "Web Development",
      description:
        "Custom web solutions built with modern technology and best practices. Responsive, fast, and scalable.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      icon: (<ChartNoAxesCombined size={28} />),
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights that drive business growth and informed decisions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: <Handshake size={28} />,
      title: "IT Consultancy",
      description:
        "Expert guidance to align your IT strategy with business objectives and maximize ROI.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 4,
      icon: <BookOpen size={28} />,
      title: " Academic Writing",
      description:
        "Helping students and researchers excel with expert academic writing and research support services.",
    },
    {
      id: 5,
      icon: <GraduationCap size={28} />,
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
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            Our{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Services
            </span>
          </h2>
          <p className={`mx-auto max-w-2xl text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Comprehensive IT solutions tailored to your business needs and growth objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <motion.div
                className="glass-panel p-6 sm:p-7 h-full"
                whileHover={{ boxShadow: "0 20px 60px -30px rgba(20,184,166,0.45)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50/70 text-3xl text-teal-700 ring-1 ring-teal-200/60 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20">
                  {service.icon}
                </div>

                <h3 className="mb-3 font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-cyan-200">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <div
                  className={`mx-auto mt-5 h-1.5 w-16 rounded-full bg-linear-to-r ${service.color}`}
                  style={{ opacity: 0.35 + (idx % 5) * 0.05 }}
                />
              </motion.div>
            </motion.article>
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
