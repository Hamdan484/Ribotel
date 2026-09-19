import { motion } from "framer-motion";
import { Zap, Target, Sprout, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const whyChooseUsItems = [
    {
      id: "fast-reliable",
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Delivery",
      description: "We don't just meet deadlines; we crush them. Expect rapid prototyping and swift execution without ever compromising on top-tier quality.",
    },
    {
      id: "goal-oriented",
      icon: <Target className="h-6 w-6" />,
      title: "Laser-Focused on ROI",
      description: "Your success is our obsession. We build solutions specifically designed to drive your KPIs, boost revenue, and create lasting business impact.",
    },
    {
      id: "growth-focused",
      icon: <Sprout className="h-6 w-6" />,
      title: "Engineered for Scale",
      description: "Future-proof your business. Our architecture and strategies are robustly designed to scale seamlessly as your enterprise grows.",
    },
    {
      id: "innovative",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Unrelenting Innovation",
      description: "We constantly push boundaries, integrating the latest tech trends and creative methodologies to keep you steps ahead of the competition.",
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
              <div className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden h-full">
                {/* Top Banner Area */}
                <div className="relative h-24 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  <div className="absolute inset-0 bg-[url('/section-pattern.png')] opacity-10" />
                </div>
                
                <div className="p-6 relative flex-1 flex flex-col">
                  {/* Floating Icon */}
                  <div className="absolute -top-8 left-6 h-14 w-14 bg-[#071333] rounded-full flex items-center justify-center text-white border-4 border-white shadow-md group-hover:-translate-y-2 group-hover:bg-[#36ADA3] transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="pt-6 space-y-3 flex-1">
                    <h3 className="font-display text-xl font-bold text-[#071333] leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
