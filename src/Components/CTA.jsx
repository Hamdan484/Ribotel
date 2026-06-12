import { motion } from "framer-motion";
import { MotionLink } from "../Common/MotionLink";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none"
        style={{ backgroundImage: "url('/cta_overlay.jpg')" }}
      />
      {/* Navy and Teal Gradient Overlay to ensure contrast and theme integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121358]/96 via-[#232F72]/92 to-[#2F578A]/96 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-other/10" />

      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-96 w-96 rounded-full bg-other/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Ready to Transform Your <span className="text-other">Business?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
            Let's work together to create innovative solutions that drive growth and success. Contact our team today to discuss your project.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row pt-2">
          <MotionLink
            to="/contact"
            className="btn-gradient inline-flex justify-center px-8 py-4 text-base font-bold shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </MotionLink>
          <MotionLink
            to="/services"
            className="inline-flex justify-center px-8 py-4 text-base font-bold border-2 border-white/80 hover:bg-white hover:text-primary transition-all rounded-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </MotionLink>
        </div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-slate-300">Need immediate assistance?</p>
          <a
            href="mailto:info@ribotel.com"
            className="inline-flex items-center gap-2 text-lg font-bold text-other hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
            info@ribotel.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
