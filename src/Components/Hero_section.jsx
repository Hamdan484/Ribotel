import { motion } from "framer-motion";
import { MotionLink } from "../Common/MotionLink";
import { Sparkles, ArrowRight, Cpu, Globe, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden py-16 md:py-24 text-white bg-[#071333]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[url('/section-pattern.png')] opacity-5 bg-repeat" />
      
      {/* Background Image with Modern Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url('/hero_image.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071333]/95 via-[#071333]/70 to-[#071333]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#36ADA3]/20 via-transparent to-[#121358]/40" />

      {/* Floating Elements (Tech Badges) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[2%] md:top-[20%] md:right-[10%] flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-0"
      >
        <Cpu className="h-8 w-8 md:h-10 md:w-10 text-[#36ADA3]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[2%] md:bottom-[20%] md:left-[5%] flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-0"
      >
        <Globe className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[5%] md:top-[35%] md:left-[15%] flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-0"
      >
        <Code2 className="h-5 w-5 md:h-7 md:w-7 text-purple-400" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Overline Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <Sparkles className="h-4 w-4 text-[#36ADA3]" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#36ADA3] uppercase">
                Solutions engineered for success
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
            Transforming Ideas Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36ADA3] to-blue-400 filter drop-shadow-lg">
              Digital Reality
            </span>
          </h1>

          {/* Subtext Paragraphs */}
          <div className="flex justify-center">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              We empower visionaries with cutting-edge IT services and scalable software solutions. From robust enterprise architecture to stunning digital products, we are your partners in driving unprecedented growth and digital transformation across Africa and beyond.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-10 flex flex-col sm:flex-row justify-center gap-5">
            <MotionLink
              to="/contact"
              className="group relative overflow-hidden bg-[#36ADA3] text-white px-8 py-4 text-center text-base font-bold rounded-xl transition-all shadow-[0_0_40px_-10px_#36ADA3]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A8B83] to-[#36ADA3] opacity-0 group-hover:opacity-100 transition-opacity" />
            </MotionLink>

            <MotionLink
              to="/services"
              className="group px-8 py-4 text-center text-base font-bold border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
