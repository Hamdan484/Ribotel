import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact Us", href: "/contact" },
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
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      url: "#",
    },
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter",
      url: "#",
    },
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      label: "Facebook",
      url: "#",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 stroke-current fill-none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      label: "Instagram",
      url: "#",
    },
  ];

  return (
    <footer className="border-t border-slate-200/50 dark:border-tertiary/10 bg-slate-50/50 dark:bg-slate-950/20 text-left transition-colors duration-300">
      
      {/* Top Newsletter Band */}
      <div className="border-b border-slate-200/50 dark:border-tertiary/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-slate-100">
                Stay Updated
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Get the latest news and updates about our services and projects.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-300 dark:border-tertiary/20 px-4 py-3 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-other outline-none text-primary dark:text-slate-100"
                required
              />
              <button
                type="submit"
                className="btn-gradient px-6 py-3 font-semibold rounded-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Logo + About */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-primary dark:text-other">
                  Ribotel
                </span>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                Bridging the digital divide through innovative IT solutions and empowerment in Ghana.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-tertiary/20 text-slate-600 dark:text-slate-300 hover:border-other hover:text-other dark:hover:border-other dark:hover:text-other transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-slate-100">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-sm text-slate-600 dark:text-slate-400 hover:text-other transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-slate-100">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="h-5 w-5 shrink-0 text-other" />
                  <a href="mailto:info@ribotel.com" className="text-slate-600 dark:text-slate-400 hover:text-other">
                    info@ribotel.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Phone className="h-5 w-5 shrink-0 text-other" />
                  <a href="tel:+233534819667" className="text-slate-600 dark:text-slate-400 hover:text-other">
                    +233 534 819 667
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="h-5 w-5 shrink-0 text-other" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Kumasi, Ashanti, Ghana
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200/50 dark:border-tertiary/10 py-8 bg-slate-100/50 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Ribotel Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-other"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
