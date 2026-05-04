import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function About() {
  const { isDark } = useTheme();

  const values = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
</svg>
),
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We work closely with clients to understand and exceed their needs.",
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
</svg>
),
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: "🌍",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
              className={`mb-4 text-2xl font-bold ${isDark ? "text-cyan-200" : "text-teal-800"}`}
            >
              Our Mission
            </h3>
            <p
              className={`leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
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
              className={`mb-4 text-2xl font-bold ${isDark ? "text-cyan-200" : "text-teal-800"}`}
            >
              Our Vision
            </h3>
            <p
              className={`leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
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
                <div className="text-5xl mb-3">{value.icon}</div>
                <h4
                  className={`mb-2 font-bold ${isDark ? "text-cyan-200" : "text-teal-800"}`}
                >
                  {value.title}
                </h4>
                <p
                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
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
