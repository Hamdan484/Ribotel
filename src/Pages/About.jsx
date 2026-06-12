import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";
import { Target, Lightbulb, Users, Award, Briefcase } from "lucide-react";

export default function AboutSection() {
  const { isDark } = useTheme();

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work closely with clients to understand and exceed their needs.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Impact",
      description: "We create solutions that make a real difference in communities.",
    },
  ];

  return (
    <div className="space-y-20 py-20 md:py-28 text-left">

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
              About Ribotel
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
              Our Story & <span className="text-secondary dark:text-other">Values</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              At Ribotel Technologies, we provide accessible, high-impact IT solutions that help businesses grow and drive digital inclusion in Ghana. Through innovation, expertise, and reliable technology services, we empower organizations to thrive in an evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="bg-slate-50/50 dark:bg-slate-900/10 py-16 border-y border-slate-200/50 dark:border-tertiary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 space-y-4 border-l-4 border-l-secondary dark:border-l-other">
              <h2 className="text-2xl font-bold text-primary dark:text-slate-100">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To provide accessible, high-impact IT services that empower businesses and promote digital inclusion in Ghana.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4 border-l-4 border-l-secondary dark:border-l-other">
              <h2 className="text-2xl font-bold text-primary dark:text-slate-100">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To lead in tech innovation that transforms lives, empowers Africa, and impacts the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary dark:text-slate-100">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 text-center space-y-4"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-other/10 text-other dark:bg-other/20">
                  {val.icon}
                </div>
                <h3 className="font-bold text-primary dark:text-slate-100">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-82 w-82 rounded-full bg-secondary/20 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Work With Us?</h2>
          <p className="text-slate-200 max-w-xl mx-auto">
            Let's collaborate and create something amazing together. Connect with our team to discuss your project.
          </p>
          <MotionLink
            to="/contact"
            className="btn-gradient inline-block px-8 py-4 font-bold shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </MotionLink>
        </div>
      </section>

    </div>
  );
}
