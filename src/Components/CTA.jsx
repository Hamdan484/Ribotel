import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";


export default function CTA() {
  const { isDark } = useTheme();

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-linear-to-r from-slate-950 via-violet-950/40 to-slate-950"
            : "bg-linear-to-r from-teal-50/95 via-white to-indigo-50/90"
        }`}
      />
      <div
        className={`absolute top-10 right-20 h-64 w-64 rounded-full blur-3xl ${
          isDark ? "bg-cyan-500/15" : "bg-teal-400/25"
        }`}
      />
      <div
        className={`absolute bottom-10 left-20 h-64 w-64 rounded-full blur-3xl ${
          isDark ? "bg-violet-600/20" : "bg-indigo-400/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-slate-600 md:text-5xl lg:text-6xl dark:text-slate-50">
            Ready to Transform Your{" "}
            <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
              Business?
            </span>
          </h2>

          <p
            className={`mb-8 max-w-2xl mx-auto text-lg md:text-xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Let&apos;s work together to create innovative solutions that drive
            growth and success. Contact our team today to discuss your project.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <MotionLink
              to="/contact"
              className="btn-gradient inline-flex justify-center px-8 py-4 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </MotionLink>
            <MotionLink
              to="/services"
              className="btn-outline-themed inline-flex justify-center px-8 py-4 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </MotionLink>
          </div>

          <motion.div
            className={`mt-12 border-t pt-8 ${isDark ? "border-white/10" : "border-slate-200/80"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p
              className={`mb-4 text-3xl ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Need immediate assistance?
            </p>
            <a
              href="mailto:info@ribotel.com"
              className={`inline-block text-lg font-bold transition-colors ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-teal-700 hover:text-teal-800"
              }`}
            >
              info@ribotel.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
