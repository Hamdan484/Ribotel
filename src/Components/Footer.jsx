import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services" },
        { name: "Data Analytics", href: "/services" },
        { name: "IT Consultancy", href: "/services" },
        { name: "Training", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Support", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: (<ion-icon name="logo-linkedin"></ion-icon>), label: "LinkedIn", url: "#" },
    { icon: "𝕏", label: "Twitter", url: "#" },
    { icon: (<ion-icon name="logo-facebook"></ion-icon>), label: "Facebook", url: "#" },
    { icon: (<ion-icon name="logo-instagram"></ion-icon>), label: "Instagram", url: "#" },
  ];

  return (
    <footer
      className="transition-colors duration-300 border-t theme-border"
    >

      <motion.div
        className="py-12 md:py-16 border-b theme-border theme-surface-2"

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3
                className="mb-2 text-2xl font-bold md:text-3xl bg-linear-to-r from-teal-800 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300"
              >

                Stay Updated
              </h3>
              <p
                className="theme-muted"
              >

                Get the latest news and updates about our services and projects.
              </p>
            </div>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 theme-border bg-white/60 dark:bg-slate-950/60 theme-text"

              />
              <button
                type="submit"
                className="btn-gradient whitespace-nowrap rounded-xl px-6 py-3 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`py-16 ${
          isDark ? "border-b border-white/10" : "border-b border-slate-200/70"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="group mb-6 flex items-center gap-2">
               
                <span
                  className={`font-display text-xl font-bold tracking-tight bg-linear-to-b from-white to-black bg-clip-text text-transparent dark:from-cyan-200 dark:to-violet-300`}
                >
                  Ribotel
                </span>
              </Link>
              <p
                className={`mb-6 text-sm leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Bridging the digital divide through innovative IT solutions and
                empowerment.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-all ${
                      isDark
                        ? "border border-white/10 bg-slate-900/60 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                        : "border border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50"
                    }`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {footerSections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4
                  className={`mb-6 font-display text-lg font-bold ${
                    isDark ? "text-cyan-200" : "text-teal-800"
                  }`}
                >
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href + link.name}>
                      <Link
                        to={link.href}
                        className={`text-sm transition-colors ${
                          isDark
                            ? "text-slate-400 hover:text-cyan-300"
                            : "text-slate-600 hover:text-teal-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4
                className={`mb-6 font-display text-lg font-bold ${
                  isDark ? "text-cyan-200" : "text-teal-800"
                }`}
              >
                Contact
              </h4>
              <div className="flex flex-col space-y-4 text-sm sm:flex-row sm:space-y-0 sm:space-x-8">
                <div>
                  <p
                    className={`mb-1 font-semibold ${
                      isDark ? "text-cyan-300/90" : "text-teal-700"
                    }`}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@ribotel.com"
                    className={`transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-cyan-300"
                        : "text-slate-600 hover:text-teal-700"
                    }`}
                  >
                    info@ribotel.com
                  </a>
                </div>
                <div>
                  <p
                    className={`mb-1 font-semibold ${
                      isDark ? "text-cyan-300/90" : "text-teal-700"
                    }`}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+233534819667"
                    className={`transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-cyan-300"
                        : "text-slate-600 hover:text-teal-700"
                    }`}
                  >
                    0534819667
                  </a>
                </div>
                <div>
                  <p
                    className={`mb-1 font-semibold ${
                      isDark ? "text-cyan-300/90" : "text-teal-700"
                    }`}
                  >
                    Location
                  </p>
                  <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                    Kumasi, Ashanti, Ghana
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <p
            className={`text-sm ${isDark ? "text-slate-500" : "text-slate-600"}`}
          >
            © {currentYear} Ribotel Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((label) => (
              <Link
                key={label}
                to="#"
                className={`text-sm transition-colors ${
                  isDark
                    ? "text-slate-500 hover:text-cyan-300"
                    : "text-slate-600 hover:text-teal-700"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
