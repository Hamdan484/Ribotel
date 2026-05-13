import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const navShell = scrolled
    ? "border-b theme-border/70 bg-white/70 backdrop-blur-xl shadow-sm shadow-slate-900/5"
    : "border-b border-transparent bg-white/55 backdrop-blur-md";


  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${navShell}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="font-display text-xl font-bold tracking-tight bg-linear-to-b from-teal-700 to-black bg-clip-text text-transparent md:block dark:from-cyan-200 dark:to-violet-300">
              Ribotel
            </span>

          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
              >
                <Link
                  to={link.href}
                  className="group relative font-medium transition-colors theme-muted hover:theme-text"

                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-teal-500 to-indigo-500 transition-all duration-300 group-hover:w-full dark:from-cyan-400 dark:to-violet-400" />

                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl border theme-border bg-white/50 theme-text p-2.5 transition-colors hover:bg-white/70 dark:bg-slate-950/60 dark:hover:bg-slate-900/70"

              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {isDark ? (
                  <Moon className="h-5 w-5 theme-text" />
                ) : (
                  <Sun className="h-5 w-5 theme-text" />

                )}
              </motion.div>
            </motion.button>

            <div className="hidden md:block">
              <MotionLink
                to="/contact"
                className="btn-gradient inline-block px-6 py-2.5 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </MotionLink>
            </div>

            <motion.button
              type="button"
              className="flex flex-col gap-1.5 p-2 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Menu"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-800/80 dark:bg-cyan-300"

                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-800/80 dark:bg-cyan-300"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-800/80 dark:bg-cyan-300"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="border-t border-slate-200/80 pb-6 pt-2 dark:border-white/10">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
              >
                <Link
                  to={link.href}
                className="block py-3 font-medium transition-colors theme-muted hover:theme-text"

                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <MotionLink
              to="/contact"
              className="btn-gradient mt-4 block w-full py-3 text-center text-sm"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

