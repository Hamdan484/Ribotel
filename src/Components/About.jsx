import { motion } from "framer-motion";
import { Rocket, Users, Award, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Rocket className="h-6 w-6" />,
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
      icon: <Shield className="h-6 w-6" />,
      title: "Impact",
      description: "We create solutions that make a real difference in communities.",
    },
  ];

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: About Text */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
              Empowering Ghana Through <span className="text-secondary dark:text-other">Technology</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              At <strong className="text-primary dark:text-white">Ribotel Technologies</strong>, we don't just write code; we engineer futures. We are a dynamic, full-spectrum technology hub committed to delivering innovative, highly reliable, and universally accessible digital solutions. By blending sharp business acumen with elite technical mastery, we dismantle complex real-world bottlenecks to spark true digital transformation for our clients.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Our diverse portfolio of expertise spans high-end IT consultancy, predictive data analytics, custom enterprise software development, system optimizations, and striking digital branding. Fueled by a relentless passion for innovation and an uncompromising standard of excellence, we build practical, scalable technology ecosystems that empower individuals, amplify organizational growth, and leave a lasting, positive footprint on the world.
            </p>
          </motion.div>

          {/* Right: Mission & Vision */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >


            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm p-8 text-left border-l-4 border-l-[#36ADA3] relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#071333] mb-2 group-hover:text-blue-600 transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To harness technology and innovation to empower people and organizations, solve real-world challenges, and drive meaningful digital transformation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm p-8 text-left border-l-4 border-l-[#36ADA3] relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#071333] mb-2 group-hover:text-blue-600 transition-colors">
                Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To lead in tech innovation that transforms lives, empowers Africa, and impacts the world.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Block */}
        <div className="space-y-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-3xl font-bold text-primary dark:text-slate-100">
              Our Core Values
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Top Banner Area */}
                <div className="relative h-20 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  <div className="absolute inset-0 bg-[url('/section-pattern.png')] opacity-10" />
                </div>
                
                <div className="p-6 relative flex-1 flex flex-col">
                  {/* Floating Icon */}
                  <div className="absolute -top-8 left-6 h-14 w-14 bg-[#071333] rounded-full flex items-center justify-center text-white border-4 border-white shadow-md group-hover:-translate-y-2 group-hover:bg-[#36ADA3] transition-all duration-300">
                    {val.icon}
                  </div>
                  
                  <div className="pt-6 space-y-2">
                    <h4 className="font-bold text-[#071333] group-hover:text-blue-600 transition-colors text-left">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-left">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
