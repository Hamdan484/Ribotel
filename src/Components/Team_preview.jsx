import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function TeamPreview() {
  const { isDark } = useTheme();

  const team = [
    {
      id: "simon",
      name: "Simon",
      role: "Founder & CEO",
      emoji: "👨‍💼",
      bio: "Tech visionary with passion for digital transformation and community empowerment.",
    },
    {
      id: "ebenezer",
      name: "Ebenezer",
      role: "Full-Stack Developer",
      emoji: "👩‍💻",
      bio: "Full-stack expert with expertise in building scalable web solutions.",
    },
    {
      id: "hamdan",
      name: "Hamdan",
      role: "Frontend Developer",
      emoji: "👩‍💻",
      bio: "Creative frontend developer passionate about building intuitive user experiences.",
    },
    {
      id: "solomon",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, idx) => (
            <motion.article
              key={member.id}
              variants={memberVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <motion.div
                className="glass-panel p-6 sm:p-7 h-full"
                whileHover={{ boxShadow: "0 20px 60px -30px rgba(20,184,166,0.45)" }}
              >
                {/* Avatar */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50/70 text-3xl text-teal-700 ring-1 ring-teal-200/60 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20">
                  <span aria-hidden="true">{member.emoji}</span>
                </div>

                {/* Name */}
                <h3 className="mb-2 font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-cyan-200">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="mb-3 text-sm font-medium bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {member.bio}
                </p>

                {/* subtle index glow (keeps card lively without affecting layout) */}
                <div
                  className="pointer-events-none mx-auto mt-5 h-1.5 w-16 rounded-full bg-linear-to-r from-teal-500/40 to-indigo-500/30"
                  style={{ opacity: 0.45 + (idx % 4) * 0.05 }}
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
