import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";
import { Check } from "lucide-react";

const HERO_IMAGE = "/hero_image.jpg";

export default function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-other/10 text-other ring-1 ring-other/20">
                <span className="h-1.5 w-1.5 rounded-full bg-other animate-pulse" />
                Solutions engineered for success
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-primary dark:text-slate-100 leading-[1.1]">
              Transforming Ideas Into
              <span className="mt-2 block text-secondary dark:text-other">
                Digital Reality
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Delivering exceptional IT services that drive business success and
              support individual growth through innovative solutions.
            </p>

            <ul className="space-y-3.5">
              {[
                "Expert IT solutions & consultancy",
                "Training that levels up your team",
                "Built for real-world impact",
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-other/15 text-other">
                    <Check className="h-3 w-3" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
              <MotionLink
                to="/contact"
                className="btn-gradient px-8 py-4 text-center text-base font-bold shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </MotionLink>

              <MotionLink
                to="/services"
                className="btn-outline-themed px-8 py-4 text-center text-base font-bold border border-slate-300 hover:border-primary dark:border-tertiary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </MotionLink>
            </div>
          </motion.div>

          {/* Right Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background ambient glow */}
              <div className="absolute -inset-4 rounded-3xl bg-other/10 dark:bg-other/5 blur-2xl" />

              {/* Mockup Window */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-tertiary/10 bg-white dark:bg-slate-900 shadow-xl">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-tertiary/10 bg-slate-50/80 dark:bg-slate-900/80 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">ribotel.com</span>
                  <div className="w-9" />
                </div>

                <div className="p-1">
                  <img
                    src={HERO_IMAGE}
                    alt="Ribotel Innovation Dashboard"
                    className="w-full h-auto object-cover rounded-b-xl"
                    width={800}
                    height={600}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}