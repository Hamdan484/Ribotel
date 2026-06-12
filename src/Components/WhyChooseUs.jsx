import { motion } from "framer-motion";
import { Zap, Target, Sprout, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const whyChooseUsItems = [
    {
      id: "fast-reliable",
      icon: <Zap className="h-6 w-6" />,
      title: "Fast & Reliable",
      description: "Quick turnaround with consistent quality and reliability.",
    },
    {
      id: "goal-oriented",
      icon: <Target className="h-6 w-6" />,
      title: "Goal-Oriented",
      description: "Focused on achieving your business objectives and KPIs.",
    },
    {
      id: "growth-focused",
      icon: <Sprout className="h-6 w-6" />,
      title: "Growth Focused",
      description: "Solutions designed to scale with your business growth.",
    },
    {
      id: "innovative",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovative",
      description: "Always exploring new technologies and methodologies.",
    },
  ];

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Why Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Why <span className="text-secondary dark:text-other">Choose Us</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We combine expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 text-center space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-other/10 text-other dark:bg-other/20">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
