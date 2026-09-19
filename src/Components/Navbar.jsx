import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isTransparent = ["/", "/about", "/contact", "/portfolio"].includes(location.pathname) && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 border-b border-slate-200/50 shadow-sm backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/ribotel_logo.png" 
              alt="Ribotel Logo" 
              className={`h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : "brightness-0"
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm transition-colors duration-200 ${
                    isActive
                      ? (isTransparent ? "text-white font-bold" : "text-primary font-bold")
                      : (isTransparent ? "text-white/80 hover:text-white font-medium" : "text-slate-600 hover:text-primary font-medium")
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className={`absolute -bottom-1.5 left-0 h-0.5 w-full ${isTransparent ? 'bg-white' : 'bg-secondary'}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">


            {/* Get Started Button */}
            <div className="hidden md:block">
              <MotionLink
                to="/contact"
                className={`inline-block px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isTransparent 
                    ? "bg-white text-primary hover:bg-slate-100 shadow-lg" 
                    : "btn-gradient text-white"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </MotionLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={`p-2 md:hidden ${isTransparent ? 'text-white' : 'text-slate-700'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-2 p-5 rounded-2xl bg-white/98 dark:bg-[#0a0b26]/98 border border-slate-200/60 dark:border-tertiary/20 shadow-2xl backdrop-blur-xl text-left"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 dark:text-slate-300 font-medium text-base py-2 hover:text-primary dark:hover:text-other transition-colors border-b border-slate-100 dark:border-tertiary/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <MotionLink
                to="/contact"
                className="btn-gradient block w-full py-3 text-center text-sm font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </MotionLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
