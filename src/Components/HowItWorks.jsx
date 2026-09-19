import { motion } from "framer-motion";
import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <Search className="h-6 w-6" />,
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, auditing your current systems and strategizing a roadmap tailored precisely for you.",
    },
    {
      id: "02",
      icon: <PenTool className="h-6 w-6" />,
      title: "Design & Architecture",
      description: "Our experts craft intuitive UI/UX and robust technical architectures ensuring scalable and maintainable solutions.",
    },
    {
      id: "03",
      icon: <Rocket className="h-6 w-6" />,
      title: "Agile Development",
      description: "We build your product in iterative cycles, allowing you to see progress in real-time and provide feedback along the way.",
    },
    {
      id: "04",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Deployment & Support",
      description: "We launch your solution flawlessly and provide ongoing maintenance to ensure everything runs smoothly 24/7.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#36ADA3] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#36ADA3]/10 text-[#36ADA3]">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#071333]">
            How We <span className="text-[#36ADA3]">Work</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            A seamless, transparent, and collaborative workflow designed to turn your complex challenges into elegant digital realities.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative pt-6 text-center"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-xl relative z-10 group transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#36ADA3] to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-[#071333] group-hover:text-white transition-colors duration-300 relative z-20">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 bg-[#071333] text-white text-xs font-bold flex items-center justify-center rounded-full shadow-lg">
                  {step.id}
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <h3 className="font-display text-xl font-bold text-[#071333]">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
