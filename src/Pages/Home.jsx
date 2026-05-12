
import { useTheme } from "../Context/Theme_context";
import HeroSection from "../Components/Hero_section";
import Services from "../Components/Services";
import About from "../Components/About";
import PortfolioPreview from "../Components/Portfolio_preview";
import TeamPreview from "../Components/Team_preview";
import CTA from "../Components/CTA";
import WhyChooseUs from "../Components/WhyChooseUs";


export default function Home() {
  const { isDark } = useTheme();

 

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
      <WhyChooseUs isDark={isDark}/>

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
