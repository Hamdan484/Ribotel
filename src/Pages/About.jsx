import { motion } from "framer-motion";
import { MotionLink } from "../Common/MotionLink";
import { Target, Lightbulb, Users, Award, Briefcase, Rocket } from "lucide-react";
import TeamPreview from "../Components/Team_preview";

export default function AboutSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/about_hero.png')` }}
        />
        <div className="absolute inset-0 bg-[#071333]/85 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-3xl space-y-4 -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            About <span className="text-[#36ADA3]">Ribotel</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200"
          >
            Driving meaningful digital transformation through innovation and excellence.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area (Overlapping Card) */}
      <section className="relative z-20 px-6 lg:px-8 -mt-40 mb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden p-8 md:p-12 lg:p-16 space-y-20"
          >
            
            {/* Story Section */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                <Rocket className="w-4 h-4" /> Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ribotel Technologies is a dynamic technology company delivering innovative, reliable, and accessible digital solutions to individuals and organizations. We combine business insight with technical expertise to solve real-world challenges and drive meaningful digital transformation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our solutions span IT consultancy, business intelligence, academic and professional technology support, system optimization, branding, and digital media. Driven by innovation, integrity, and excellence, we create practical technology solutions that empower people and organizations and deliver lasting impact.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-50 rounded-2xl p-8 space-y-4 border-l-4 border-l-blue-600 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To harness technology and innovation to empower people and organizations, solve real-world challenges, and drive meaningful digital transformation.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-50 rounded-2xl p-8 space-y-4 border-l-4 border-l-[#36ADA3] transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 text-[#36ADA3] rounded-xl">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To lead in tech innovation that transforms lives, empowers Africa, and impacts the world.
                </p>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="pt-10 border-t border-slate-100">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-slate-900">
                  Our Core <span className="text-[#36ADA3]">Values</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((val, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white border border-slate-100 shadow-sm hover:shadow-md rounded-2xl p-8 text-center space-y-5 transition-all"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      {val.icon}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section embedded in card */}
            <div className="pt-10">
              <div className="bg-[#071333] rounded-3xl p-10 md:p-14 text-center space-y-6 relative overflow-hidden">
                <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Ready to Work With Us?</h2>
                  <p className="text-slate-300 text-lg">
                    Let's collaborate and create something amazing together. Connect with our team to discuss your project.
                  </p>
                  <div className="pt-4">
                    <MotionLink
                      to="/contact"
                      className="inline-block bg-[#36ADA3] hover:bg-[#2A8B83] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get In Touch
                    </MotionLink>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamPreview />
    </div>
  );
}
