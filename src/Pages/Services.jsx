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
    },
    {
      id: 2,
      category: "support",
      icon: <Key className="h-6 w-6" />,
      title: "Microsoft 365 Activation",
      description: "Activate your Microsoft 365 subscription for full access to all Office apps.",
    },
    {
      id: 3,
      category: "support",
      icon: <Sparkles className="h-6 w-6" />,
      title: "Windows Activation",
      description: "Genuine Windows activation to unlock all features and receive updates.",
    },
    {
      id: 4,
      category: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Windows 10 Installation",
      description: "Clean installation of Windows 10 with all necessary drivers and updates.",
    },
    {
      id: 5,
      category: "support",
      icon: <Laptop className="h-6 w-6" />,
      title: "Windows 11 Installation",
      description: "Upgrade or fresh install of Windows 11 with optimized settings.",
    },
    {
      id: 6,
      category: "support",
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Antivirus Installation",
      description: "Install and configure reliable antivirus protection for your device.",
    },
    {
      id: 7,
      category: "support",
      icon: <Cpu className="h-6 w-6" />,
      title: "Driver Installation",
      description: "Install missing or outdated drivers to ensure hardware compatibility.",
    },
    {
      id: 8,
      category: "support",
      icon: <Download className="h-6 w-6" />,
      title: "Software Installation",
      description: "Install any legitimate software you need for your work or projects.",
    },
    {
      id: 9,
      category: "support",
      icon: <Wrench className="h-6 w-6" />,
      title: "Troubleshooting",
      description: "Diagnose and fix common laptop issues, errors, and performance problems.",
    },
    {
      id: 10,
      category: "support",
      icon: <Code className="h-6 w-6" />,
      title: "Coding Tools Setup",
      description: "Set up IDEs, compilers, runtimes, and development environments.",
    },
    {
      id: 11,
      category: "support",
      icon: <Database className="h-6 w-6" />,
      title: "Database Installation",
      description: "Install and configure MySQL, PostgreSQL, MongoDB, or other databases.",
    },
    {
      id: 12,
      category: "support",
      icon: <Gauge className="h-6 w-6" />,
      title: "Laptop Optimization",
      description: "Speed up your laptop by cleaning junk, optimizing startup, and tuning settings.",
    },
    {
      id: 13,
      category: "dev",
      icon: <Globe className="h-6 w-6" />,
      title: "Website Development",
      description: "Custom, responsive websites built to elevate your brand and online presence.",
    },
    {
      id: 14,
      category: "dev",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps tailored to your needs.",
    },
    {
      id: 15,
      category: "dev",
      icon: <AppWindow className="h-6 w-6" />,
      title: "Web App Development",
      description: "Powerful web applications with modern frameworks and scalable architecture.",
    },
    {
      id: 16,
      category: "data",
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Transform raw data into insights using Excel, Power BI, and Tableau.",
    },
    {
      id: 17,
      category: "creative",
      icon: <Palette className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Eye-catching logos, flyers, posters, and brand visuals for any project.",
    },
    {
      id: 18,
      category: "creative",
      icon: <Film className="h-6 w-6" />,
      title: "Video Editing",
      description: "Professional video editing, color grading, and motion graphics.",
    },
    {
      id: 19,
      category: "creative",
      icon: <FileText className="h-6 w-6" />,
      title: "Article Writing",
      description: "Well-researched, engaging articles, blogs, and content writing.",
    },
    {
      id: 20,
      category: "creative",
      icon: <Presentation className="h-6 w-6" />,
      title: "PowerPoint Slides Creation",
      description: "Stunning, professional presentation slides for any occasion.",
    },
    {
      id: 21,
      category: "training",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Tutorials",
      description: "One-on-one or group tutorials on software, tools, and IT skills.",
    },
    {
      id: 22,
      category: "creative",
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Report Writing & Design",
      description: "Professional reports with clean formatting, charts, and layouts.",
    },
    {
      id: 23,
      category: "dev",
      icon: <Server className="h-6 w-6" />,
      title: "Database Design",
      description: "Design and implement efficient, scalable database systems for your projects.",
    },
    {
      id: 24,
      category: "dev",
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered interface and experience design for web and mobile apps.",
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
    <section className="py-20 md:py-28 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Our Offerings
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Services We <span className="text-secondary dark:text-other">Offer</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Professional technical support, software installation, development, and training designed to empower your growth.
          </p>
        </div>

        {/* Search & Category Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-12">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-xl border pl-10 pr-4 py-3 outline-none transition-all placeholder:text-slate-400 text-sm ${
                isDark
                  ? "border-white/10 bg-slate-950/50 text-slate-100 focus:border-other/60 focus:ring-2 focus:ring-other/20"
                  : "border-slate-200 bg-slate-50 text-slate-900 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              }`}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-secondary text-white shadow-sm dark:bg-other"
                    : isDark
                      ? "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                      : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeCategory + searchQuery}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-other/10 text-other dark:bg-other/20">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 dark:border-tertiary/10">
                <MotionLink
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary dark:text-other dark:hover:text-other/80"
                >
                  Book Session
                  <ArrowRight className="h-4 w-4" />
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No services found matching your search.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
