import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function TeamPreview() {
  const { isDark } = useTheme();

  const team = [
    {
      id: 1,
      name: "Simon",
      role: "Founder & CEO",
      emoji: "👨‍💼",
      bio: "Tech visionary with passion for digital transformation and community empowerment.",
    },
    {
      id: 2,
      name: "Ebenezer",
      role: "Full-Stack Developer",
      emoji: "👩‍💻",
      bio: "Full-stack expert with expertise in building scalable web solutions.",
    },
    {
      id: 3,
      name: "Hamdan",
      role: "Frontend Developer",
      emoji: "👩‍💻",
      bio: "Creative frontend developer passionate about building intuitive user experiences.",
    },
    {
      id: 4,
      name: "Solomon",
      role: "Graphic Designer",
      emoji: "👨‍🎨",
      bio: "Graphic designer with a knack for creating visually stunning and impactful designs.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const memberVariants = {
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
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Team
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Meet the talented professionals dedicated to your success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={memberVariants}
              whileHover="hover"
              className="glass-panel p-8 text-center transition-all hover:border-teal-300/60 dark:hover:border-cyan-400/50"
            >
              {/* Avatar */}
              <div className="text-6xl mb-4">{member.emoji}</div>

              {/* Name */}
              <h3
                className={`mb-2 text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
              >
                {member.name}
              </h3>

              {/* Role */}
              <div
                className={`mb-3 text-sm bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300`}
              >
                {member.role}
              </div>

              {/* Bio */}
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
