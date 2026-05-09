import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { MotionLink } from "../Common/MotionLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-cyan-500/5"
          : "border-b border-transparent bg-white/55 backdrop-blur-md dark:bg-slate-950/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-2.5">
           
            <span className=" font-display text-xl font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300 md:block">
              Ribotel
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  to={link.href}
                  className="group relative font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-300 dark:hover:text-cyan-200"
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
              className="rounded-xl border border-slate-200/80 bg-white/80 p-2.5 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/60 dark:hover:bg-slate-800/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <svg
                  className="h-5 w-5 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zm2.828-2.828l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zm0 2.828l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414a1 1 0 111.414-1.414zM13.657 13.657l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 011.414-1.414zM9.172 5.172L7.757 3.757A1 1 0 006.343 5.172l1.414 1.414a1 1 0 001.415-1.414zM3.465 3.465a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 101.414-1.414L3.465 3.465zm2.828 9.172l-1.415 1.414a1 1 0 101.414 1.414l1.415-1.414a1 1 0 00-1.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
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
            >
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-700 dark:bg-cyan-300"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-700 dark:bg-cyan-300"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.div
                className="h-0.5 w-6 rounded-full bg-slate-700 dark:bg-cyan-300"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="border-t border-slate-200/80 pb-6 dark:border-white/10 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-3 font-medium text-slate-700 transition-colors hover:text-teal-700 dark:text-slate-300 dark:hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <MotionLink
              to="/contact"
              className="btn-gradient mt-4 block w-full py-3 text-center text-sm"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </MotionLink>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
