import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function AboutSection() {
  const { isDark } = useTheme();

  const values = [
    {
      icon: "🎯",
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
      icon: "⚡",
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

  const team = [
    {
      name: "Simon Akaribo",
      role: "Founder & CEO",
      emoji: "👨‍💼",
      bio: "Tech visionary with passion for digital transformation and community empowerment.",
    },
    {
      name: "Jane Mensah",
      role: "Lead Developer",
      emoji: "👩‍💻",
      bio: "Full-stack expert with 8+ years building scalable web solutions.",
    },
    {
      name: "Kwame Asante",
      role: "Design Lead",
      emoji: "👨‍🎨",
      bio: "Creative designer focused on user experience and modern aesthetics.",
    },
    {
      name: "Ama Boateng",
      role: "Data Analyst",
      emoji: "👩‍🔬",
      bio: "Analytics specialist transforming data into actionable insights.",
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="mb-6 font-display  text-4xl font-bold tracking-tight text-slate-600 md:text-5xl lg:text-6xl dark:text-slate-50">
              About{" "}
              <span className="font-bold tracking-tight bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300 ">
                Ribotel
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              At Ribotel Technologies, we provide accessible, high-impact IT solutions that help businesses grow and drive digital inclusion in Ghana. Through innovation, expertise, and reliable technology services, we empower organizations to thrive in an evolving digital world.

Our vision is to lead in tech innovation that transforms industries, empowers Africa, and creates global impact. We are committed to building solutions that shape the future and make technology accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2
                className={`mb-4 font-display text-3xl font-bold bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300`}
              >
                Our Mission
              </h2>
              <p
                className={`text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                To provide acessible,high-impact IT services that empower businesses and promote digital inclusion in Ghana.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="text-5xl mb-4">🌟</div>
              <h2
                className={`mb-4 font-display text-3xl font-bold bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300`}
              >
                Our Vision
              </h2>
              <p
                className={`text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                 To lead in tech innovation that transforms lives,empowers Africa, and impacts the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
              Our{" "}
              <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300">
                Core Values
              </span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              These principles guide every decision we make and every solution
              we deliver.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-panel p-8 text-center transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3
                  className={`mb-3 font-display text-xl font-bold bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300`}
                >
                  {value.title}
                </h3>
                <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-display text-4xl tracking-tight text-slate-600 md:text-5xl lg:text-6xl dark:text-slate-50 font-bold">
              Meet Our{" "}
              <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
                Team
              </span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Talented professionals dedicated to your success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-panel p-8 text-center transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
                whileHover={{ y: -5 }}
              >
                <div className="text-7xl mb-4">{member.emoji}</div>
                <h3
                  className={`mb-1 font-display text-lg font-bold ${
                    isDark ? "text-cyan-200" : "text-teal-800"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`mb-4 text-sm font-semibold ${
                    isDark ? "text-violet-300" : "text-indigo-600"
                  }`}
                >
                  {member.role}
                </p>
                <p
                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-band">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
              Our{" "}
              <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
                Story
              </span>
            </h2>
            <div
              className={`space-y-6 text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              <p>
                Founded by Simon Akaribo, a passionate tech entrepreneur,
                Ribotel Technologies was born from a vision to bridge the
                digital divide in Africa. What started as a small consultancy
                has grown into a full-service IT solutions company serving
                hundreds of clients.
              </p>
              <p>
                Our journey has been marked by continuous innovation, deep
                commitment to client success, and a genuine passion for
                empowering young people through technology education. Every
                project we undertake, every solution we deliver, is driven by
                our core belief that technology should create opportunities for
                everyone.
              </p>
              <p>
                Today, we stand proud as a trusted partner for businesses and
                individuals seeking to harness the power of technology. Our team
                continues to push boundaries, explore new possibilities, and
                deliver solutions that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`relative overflow-hidden py-16 md:py-24 lg:py-32 ${
          isDark
            ? "border-y border-white/10 bg-linear-to-r from-slate-950 via-violet-950/35 to-slate-950"
            : "border-y border-slate-200/70 bg-linear-to-r from-teal-50/95 via-white to-indigo-50/90"
        }`}
      >
        <div
          className={`absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/15 mix-blend-screen" : "bg-teal-400/25"
          }`}
        />
        <div
          className={`absolute -bottom-32 left-0 h-96 w-96 rounded-full blur-3xl ${
            isDark ? "bg-violet-600/20 mix-blend-screen" : "bg-indigo-400/20"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300">
              Ready to Work With Us?
            </h2>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Let's collaborate and create something amazing together. Connect
              with our team to discuss your project.
            </p>
            <MotionLink
              to="/contact"
              className="btn-gradient inline-block px-8 py-4 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </MotionLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
