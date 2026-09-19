import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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
      url: "https://www.linkedin.com/company/ribotel/",
    },
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      label: "X (Twitter)",
      url: "https://x.com/RibotelTech",
    },
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
  <path d="M12.017 2.003a9.944 9.944 0 00-8.507 15.1L2 22l5.022-1.315a9.98 9.98 0 004.995 1.337h.004c5.514 0 9.996-4.48 9.998-9.995a9.95 9.95 0 00-2.93-7.073 9.95 9.95 0 00-7.072-2.951zm5.82 14.404c-.245.69-1.448 1.319-1.99 1.405-.51.08-1.153.115-1.86-.11-.43-.137-.98-.32-1.69-.626-2.97-1.284-4.904-4.278-5.053-4.477-.147-.198-1.21-1.61-1.21-3.071s.767-2.178 1.038-2.476c.27-.297.59-.372.787-.372.197 0 .394.002.566.01.182.008.426-.069.667.51.246.593.836 2.05.91 2.2.074.148.123.322.025.52-.099.198-.148.322-.295.495-.148.173-.312.387-.444.52-.148.148-.302.308-.13.605.173.297.77 1.269 1.653 2.056 1.136 1.013 2.094 1.326 2.39 1.474.296.148.468.124.64-.074.173-.198.738-.861.935-1.158.197-.297.394-.247.665-.148.27.099 1.72.812 2.015.96.296.148.493.223.566.347.074.124.074.714-.172 1.405z"/>
</svg>
      ),
      label: "WhatsApp",
      url: "https://whatsapp.com/channel/0029Vb4GtJuLY6dEO6V9jx08",
    },
    {
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61594326099758",
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
      url: "https://www.instagram.com/ribotel_technologies/",
    },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-[#040A1E] text-left overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#36ADA3] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none" />
      
      {/* Main Links */}
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Logo + About */}
            <div className="lg:col-span-4 space-y-8">
              <Link to="/" className="inline-block">
                <img src="/ribotel_logo.png" alt="Ribotel Logo" className="h-16 md:h-20 w-auto object-contain brightness-0 invert transition-transform hover:scale-105"/>
              </Link>
              <p className="text-base text-slate-400 leading-relaxed max-w-sm">
                Bridging the digital divide through innovative IT solutions and empowerment in Ghana. Building the future, today.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-[#36ADA3] hover:border-[#36ADA3] hover:text-white hover:shadow-[0_0_20px_rgba(54,173,163,0.5)] transition-all duration-300 hover:-translate-y-1"
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
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="group inline-flex items-center text-slate-400 hover:text-[#36ADA3] transition-colors text-base"
                        >
                          {link.name}
                          <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Details & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-[#36ADA3]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</span>
                    <a href="mailto:info.ribotel@gmail.com" className="text-slate-300 hover:text-[#36ADA3] transition-colors">
                      info.ribotel@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-[#36ADA3]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Phone</span>
                    <a href="tel:+233509659832" className="text-slate-300 hover:text-[#36ADA3] transition-colors">
                      +233 509 659 832
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-[#36ADA3]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Location</span>
                    <span className="text-slate-300">
                      Kumasi, Ashanti, Ghana
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-900/50 backdrop-blur-md py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {currentYear} Ribotel Technologies. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-sm font-medium text-slate-500 hover:text-[#36ADA3] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-medium text-slate-500 hover:text-[#36ADA3] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
