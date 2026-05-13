import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { Globe, Handshake, Rocket, ThumbsUp } from "lucide-react";

export default function About() {
  const { isDark } = useTheme();

  const values = [
    {
      icon: <Rocket size={28} />,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: <Handshake size={28} />,
      title: "Collaboration",
      description:
        "We work closely with clients to understand and exceed their needs.",
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <Globe size={28} />,
      title: "Impact",
      description:
        "We create solutions that make a real difference in communities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            About{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Us
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
           At Ribotel Technologies, we provide accessible, high-impact IT solutions that help businesses grow and drive digital inclusion in Ghana. Through innovation, expertise, and reliable technology services, we empower organizations to thrive in an evolving digital world.

Our vision is to lead in tech innovation that transforms industries, empowers Africa, and creates global impact. We are committed to building solutions that shape the future and make technology accessible to all.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3
              className={`mb-4 text-2xl font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300`}
            >
              Our Mission
            </h3>
            <p
              className={`leading-relaxed text-slate-600`}
            >
              To provide acessible,high-impact IT services that empower businesses and promote digital inclusion in Ghana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3
              className={`mb-4 text-2xl font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300`}
            >
              Our Vision
            </h3>
            <p
              className={`leading-relaxed text-slate-600`}
            >
              To lead in tech innovation that transforms lives,empowers Africa, and impacts the world.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3
            className={`mb-12 text-center text-3xl font-bold ${isDark ? "text-cyan-200" : "text-teal-800"}`}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-panel p-6 text-center transition-all hover:border-teal-300/50 dark:hover:border-cyan-400/40"
              >
                <div className="text-5xl mb-3 flex justify-center">{value.icon}</div>
                <h4
                  className={`mb-2 font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300`}
                >
                  {value.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
