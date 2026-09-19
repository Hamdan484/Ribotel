import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Rocket } from "lucide-react";

export default function WhoWeServe() {
  const industries = [
    {
      id: "corporate",
      icon: <Building2 className="h-8 w-8" />,
      title: "Enterprise & Corporate",
      description: "Robust, secure, and highly scalable enterprise solutions for large-scale operations.",
    },
    {
      id: "education",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educational Institutions",
      description: "Digital tools, student management systems, and e-learning platforms for modern academia.",
    },
    {
      id: "startups",
      icon: <Rocket className="h-8 w-8" />,
      title: "Startups & SMEs",
      description: "Agile, cost-effective tech solutions to help you launch fast and scale rapidly.",
    },
    {
      id: "agencies",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Creative Agencies",
      description: "White-label development and technical partnerships to bring your creative campaigns to life.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
            Industries
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#071333]">
            Who We <span className="text-[#36ADA3]">Serve</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our technology adapts to your industry. We empower diverse sectors with specialized digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex items-start gap-6"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#36ADA3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex-shrink-0 h-16 w-16 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-[#36ADA3] group-hover:scale-110 group-hover:bg-[#36ADA3] group-hover:text-white transition-all duration-300">
                {ind.icon}
              </div>
              
              <div className="relative z-10 space-y-2">
                <h3 className="font-display text-xl font-bold text-[#071333] group-hover:text-blue-600 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
