import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

const HERO_IMAGE = "/Home_page_img.png";

export default function HeroSection() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${
                  isDark
                    ? "border border-white/10 bg-slate-950/50 text-cyan-200 backdrop-blur-md"
                    : "border border-slate-200/80 bg-white/80 text-teal-800 backdrop-blur-md"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isDark
                      ? "bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                      : "bg-teal-500"
                  }`}
                />
                Solutions engineered for success
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl leading-[1.08] font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300">
                Transforming Ideas Into
                <span className="mt-1 block bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300">
                  Digital Reality
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-300"
            >
              Delivering exceptional IT services that drive business success and
              support individual growth through innovative solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 py-4">
              {[
                "Expert IT solutions & consultancy",
                "Training that levels up your team",
                "Built for real-world impact",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-indigo-600 dark:from-cyan-400 dark:to-violet-600">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <span
                    className={`font-medium ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <MotionLink
                to="/contact"
                className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </MotionLink>

              <MotionLink
                to="/services"
                className="btn-outline-themed flex items-center justify-center px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-xl md:max-w-none lg:mx-0"
          >
            <motion.div
              animate="animate"
              variants={floatingVariants}
              className="relative"
            >
              <div
                className={`absolute inset-0 rounded-3xl blur-2xl ${
                  isDark
                    ? "bg-linear-to-br from-violet-600/40 via-cyan-500/30 to-indigo-600/40"
                    : "bg-linear-to-br from-teal-400/35 via-cyan-400/35 to-indigo-500/35"
                }`}
              />

              <div
                className={`relative overflow-hidden rounded-3xl border shadow-2xl ${
                  isDark
                    ? "border-white/10 bg-slate-950/40 ring-1 ring-white/10"
                    : "border-slate-200/80 bg-white/90 ring-1 ring-slate-200/60"
                }`}
              >
                <img
                  src={HERO_IMAGE}
                  alt="Futuristic digital innovation"
                  className="aspect-4/3 w-full object-cover object-center md:aspect-5/4 lg:aspect-auto lg:max-h-[min(560px,78vh)] lg:min-h-95"
                  width={1200}
                  height={900}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}