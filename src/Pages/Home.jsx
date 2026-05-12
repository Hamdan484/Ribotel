import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import HeroSection from "../Components/Hero_section";
import Services from "../Components/Services";
import About from "../Components/About";
import PortfolioPreview from "../Components/Portfolio_preview";
import TeamPreview from "../Components/Team_preview";
import CTA from "../Components/CTA";
import { Target,Zap, Sprout, Lightbulb} from "lucide-react";

export default function Home() {
  const { isDark } = useTheme();

  const whyChooseUsItems = [
    {
      id: "fast-reliable",
      icon: <Zap size={28} />,
      title: "Fast & Reliable",
      description: "Quick turnaround with consistent quality and reliability.",
    },
    {
      id: "goal-oriented",
      icon: <Target size={28} />,
      title: "Goal-Oriented",
      description:
        "Focused on achieving your business objectives and KPIs.",
    },
    {
      id: "growth-focused",
      icon: <Sprout size={28} />,
      title: "Growth Focused",
      description: "Solutions designed to scale with your business growth.",
    },
    {
      id: "innovative",
      icon: <Lightbulb size={28} />,
      title: "Innovative",
      description: "Always exploring new technologies and methodologies.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Team Preview */}
      <TeamPreview />

      {/* Why Choose Us Section */}
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
              Why{" "}
              <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
                Choose Us
              </span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              We combine expertise, innovation, and dedication to deliver
              exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUsItems.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="glass-panel p-6 sm:p-7 h-full"
                  whileHover={{ y: -6, boxShadow: "0 20px 50px -20px rgba(16, 185, 129, 0.35)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50/70 text-3xl text-teal-700 ring-1 ring-teal-200/60 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-cyan-200">
                    {item.title}
                  </h3>

                  <p className={isDark ? "text-slate-300/90" : "text-slate-600"}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section
        className={`border-y py-16 md:py-24 ${
          isDark
            ? "border-white/10 bg-gradient-to-r from-slate-950/90 via-violet-950/30 to-slate-950/90"
            : "border-slate-200/70 bg-gradient-to-r from-white/90 via-teal-50/80 to-indigo-50/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Happy Clients" },
              { value: "200+", label: "Projects Completed" },
              { value: "25+", label: "Team Members" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`mb-2 font-display text-4xl font-bold md:text-5xl ${
                    isDark ? "text-cyan-200" : "text-teal-800"
                  }`}
                >
                  {stat.value}
                </div>
                <p className={isDark ? "text-slate-400" : "text-slate-700"}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
