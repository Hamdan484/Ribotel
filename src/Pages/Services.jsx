import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";
import {
  Laptop,
  Code,
  BarChart3,
  Palette,
  GraduationCap,
  ArrowRight,
  Search,
  ShieldCheck,
  Cpu,
  Download,
  Gauge,
  Wrench,
  Globe,
  AppWindow,
  Smartphone,
  Server,
  Layout,
  Film,
  FileText,
  Presentation,
  ClipboardList,
  Database,
  Key,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "support", name: "Tech Support" },
    { id: "dev", name: "Development" },
    { id: "data", name: "Data & Analytics" },
    { id: "creative", name: "Creative & Writing" },
    { id: "training", name: "Training" },
  ];

  const services = [
    {
      id: 1,
      category: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Microsoft Office Installation",
      description: "Full installation of Word, Excel, PowerPoint, and the complete Office suite.",
      image: "/images/office_install_new.png",
    },
    {
      id: 2,
      category: "support",
      icon: <Key className="h-6 w-6" />,
      title: "Microsoft 365 Activation",
      description: "Activate your Microsoft 365 subscription for full access to all Office apps.",
      image: "/images/office_365_activate.png",
    },
    {
      id: 3,
      category: "support",
      icon: <Sparkles className="h-6 w-6" />,
      title: "Windows Activation",
      description: "Genuine Windows activation to unlock all features and receive updates.",
      image: "/images/windows10-installation.avif",
    },
    {
      id: 4,
      category: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Windows 10 Installation",
      description: "Clean installation of Windows 10 with all necessary drivers and updates.",
      image: "/images/windows10-installation.avif",
    },
    {
      id: 5,
      category: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Windows 11 Installation",
      description: "Upgrade or fresh install of Windows 11 with optimized settings.",
      image: "/images/windows11-installation.jpg",
    },
    {
      id: 6,
      category: "support",
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Antivirus Installation",
      description: "Install and configure reliable antivirus protection for your device.",
      image: "/images/antivirus-installation.jpg",
    },
    {
      id: 7,
      category: "support",
      icon: <Cpu className="h-6 w-6" />,
      title: "Driver Installation",
      description: "Install missing or outdated drivers to ensure hardware compatibility.",
      image: "/images/driver-installation-new.jpg",
    },
    {
      id: 8,
      category: "support",
      icon: <Download className="h-6 w-6" />,
      title: "Software Installation",
      description: "Install any legitimate software you need for your work or projects.",
      image: "/images/software_install_new.png",
    },
    {
      id: 9,
      category: "support",
      icon: <Wrench className="h-6 w-6" />,
      title: "Troubleshooting",
      description: "Diagnose and fix common laptop issues, errors, and performance problems.",
      image: "/images/troubleshooting_new.png",
    },
    {
      id: 10,
      category: "support",
      icon: <Code className="h-6 w-6" />,
      title: "Coding Tools Setup",
      description: "Set up IDEs, compilers, runtimes, and development environments.",
      image: "/images/coding_tools_logos.png",
    },
    {
      id: 11,
      category: "support",
      icon: <Database className="h-6 w-6" />,
      title: "Database Installation",
      description: "Install and configure MySQL, PostgreSQL, MongoDB, or other databases.",
      image: "/images/database_install.png",
    },
    {
      id: 12,
      category: "support",
      icon: <Gauge className="h-6 w-6" />,
      title: "Laptop Optimization",
      description: "Speed up your laptop by cleaning junk, optimizing startup, and tuning settings.",
      image: "/images/laptop_optimization_new.png",
    },
    {
      id: 13,
      category: "dev",
      icon: <Globe className="h-6 w-6" />,
      title: "Website Development",
      description: "Custom, responsive websites built to elevate your brand and online presence.",
      image: "/images/web-apps.jpg",
    },
    {
      id: 14,
      category: "dev",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps tailored to your needs.",
      image: "/images/mobile_app_dev.png",
    },
    {
      id: 15,
      category: "dev",
      icon: <AppWindow className="h-6 w-6" />,
      title: "Web App Development",
      description: "Powerful web applications with modern frameworks and scalable architecture.",
      image: "/images/webapp_dashboard.png",
    },
    {
      id: 16,
      category: "data",
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Transform raw data into insights using Excel, Power BI, and Tableau.",
      image: "/images/data-analytics.jpg",
    },
    {
      id: 17,
      category: "creative",
      icon: <Palette className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Eye-catching logos, flyers, posters, and brand visuals for any project.",
      image: "/images/graphic-design.jpg",
    },
    {
      id: 18,
      category: "creative",
      icon: <Film className="h-6 w-6" />,
      title: "Video Editing",
      description: "Professional video editing, color grading, and motion graphics.",
      image: "/images/video-editing.avif",
    },
    {
      id: 19,
      category: "creative",
      icon: <FileText className="h-6 w-6" />,
      title: "Article Writing",
      description: "Well-researched, engaging articles, blogs, and content writing.",
      image: "/images/article-writing.jpg",
    },
    {
      id: 20,
      category: "creative",
      icon: <Presentation className="h-6 w-6" />,
      title: "PowerPoint Slides Creation",
      description: "Stunning, professional presentation slides for any occasion.",
      image: "/images/powerpoint-creation.webp",
    },
    {
      id: 21,
      category: "training",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Tutorials",
      description: "One-on-one or group tutorials on software, tools, and IT skills.",
      image: "/images/computer-tutorials.jpg",
    },
    {
      id: 22,
      category: "creative",
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Report Writing & Design",
      description: "Professional reports with clean formatting, charts, and layouts.",
      image: "/images/report-writing.jpg",
    },
    {
      id: 23,
      category: "dev",
      icon: <Server className="h-6 w-6" />,
      title: "Database Design",
      description: "Design and implement efficient, scalable database systems for your projects.",
      image: "/images/database-design.jpg",
    },
    {
      id: 24,
      category: "dev",
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered interface and experience design for web and mobile apps.",
      image: "/images/ui-ux-design.jpg",
    },
  ];

  const filteredServices = services.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.category === activeCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -6, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/services_hero.png')` }}
        />
        <div className="absolute inset-0 bg-[#071333]/85 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-3xl space-y-4 -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200"
          >
            Comprehensive tech solutions tailored to power your business forward
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-6 bg-[#36ADA3]"></div>
              <span className="text-[#36ADA3] font-semibold text-sm tracking-wide">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#071333]">
              Services That Fit <br className="hidden md:block" /> <span className="text-[#36ADA3]">Your Needs</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              We provide both on-site and remote services. No matter your location, our team is ready to assist you.
            </p>
          </div>

          {/* Search & Category Filter bar */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-center mb-16 max-w-4xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#36ADA3] text-white shadow-lg shadow-[#36ADA3]/20 scale-105"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-[#071333] hover:border-slate-300"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            key={activeCategory + searchQuery}
          >
            {filteredServices.map((service) => {
              // Use service specific image or fallback to a default
              const imageSrc = service.image || "/about_showcase_1.jpg";

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Top Image Area */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${imageSrc}')` }}
                    />
                    <div className="absolute inset-0 bg-[#071333]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"/>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 relative flex-1 flex flex-col">
                    {/* Floating Icon */}
                    <div className="absolute -top-10 left-6 h-16 w-16 bg-[#071333] rounded-full flex items-center justify-center text-white border-4 border-white shadow-md group-hover:-translate-y-2 group-hover:bg-[#36ADA3] transition-all duration-300">
                      {service.icon}
                    </div>

                    <div className="pt-6 space-y-4 flex-1">
                      <h3 className="font-display text-2xl font-bold text-[#071333] leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100">
                      <MotionLink
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#36ADA3] hover:text-[#2A8B83] transition-colors"
                      >
                        Book Now 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </MotionLink>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-500">
                No services found matching your search.
              </p>
            </div>
          )}



        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-100 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-6 bg-[#36ADA3]"></div>
            <span className="text-slate-500 font-semibold text-sm tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#071333]">
            Have a Project Idea?
          </h2>
          <div className="pt-6">
            <MotionLink
              to="/contact"
              className="inline-block bg-[#36ADA3] hover:bg-[#2A8B83] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#36ADA3]/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk!
            </MotionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
