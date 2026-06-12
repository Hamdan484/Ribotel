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
              At Ribotel Technologies, we provide accessible, high-impact IT solutions that help businesses grow and drive digital inclusion in Ghana. Through innovation, expertise, and reliable technology services, we empower organizations to thrive in an evolving digital world.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Our vision is to lead in tech innovation that transforms industries, empowers Africa, and creates global impact. We are committed to building solutions that shape the future and make technology accessible to all.
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
              className="glass-panel p-8 text-left border-l-4 border-l-secondary dark:border-l-other"
            >
              <h3 className="text-xl font-bold text-primary dark:text-slate-100 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To provide accessible, high-impact IT services that empower businesses and promote digital inclusion in Ghana.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-panel p-8 text-left border-l-4 border-l-secondary dark:border-l-other"
            >
              <h3 className="text-xl font-bold text-primary dark:text-slate-100 mb-2">
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
                className="glass-panel p-6 text-center space-y-4"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-other/10 text-other dark:bg-other/20">
                  {val.icon}
                </div>
                <h4 className="font-bold text-primary dark:text-slate-100">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
