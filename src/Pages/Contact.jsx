import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";
import { Mail, Phone, Globe, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { isDark } = useTheme();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await toast.promise(
        Promise.all([
           emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        ]),
        
        {
          loading: "Sending your message...",
          success: "Message sent successfully! We'll get back to you soon.",
          error: "Failed to send message. Please try again later.",
        
          
        },
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(error?.text || error?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-secondary dark:text-other" />,
      title: "Email",
      value: "info@ribotel.com",
      link: "mailto:info@ribotel.com",
    },
    {
      icon: <Phone size={24} className="text-secondary dark:text-other" />,
      title: "Phone",
      value: "+233 509 659 832",
      link: "tel:+233509659832",
    },
    {
      icon: <Globe size={24} className="text-secondary dark:text-other" />,
      title: "Location",
      value: "Kumasi, Ghana",
      link: "#",
    },
    {
      icon: <Clock size={24} className="text-secondary dark:text-other" />,
      title: "Working Hours",
      value: "Mon - Fri | 9AM - 5PM",
      link: "#",
    },
  ];

  const inputStyles = `w-full rounded-xl border px-4 py-3 outline-none transition-all placeholder:text-slate-400 text-sm ${
    isDark
      ? "border-white/10 bg-slate-950/50 text-slate-100 focus:border-other/60 focus:ring-2 focus:ring-other/20"
      : "border-slate-200 bg-slate-50 text-slate-900 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
  }`;

  return (
    <section className="section-band py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Get In Touch
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Contact{" "}
            <span className="text-secondary dark:text-other">Us Today</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind? Need IT solutions or consulting? Let's
            discuss how we can help your business grow.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                />
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyles}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                />
              </div>

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                placeholder="Tell us more about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputStyles} resize-none`}
              />

              {/* Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-gradient w-full rounded-xl py-4 font-semibold shadow-md cursor-pointer"
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="glass-panel flex items-center justify-between p-6 transition-all duration-300 hover:border-other/60 dark:hover:border-other/50 hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {item.title}
                    </h3>
                    <p className="font-semibold text-primary dark:text-slate-100 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
                

                <span className="text-xl text-slate-400 group-hover:text-other transition-colors">
                  →
                </span>
              </a>
            ))}

            {/* CTA Card */}
            <div className="glass-panel p-8 flex flex-col justify-between items-start space-y-6 relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold text-primary dark:text-slate-100">
                  Need urgent assistance?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We typically respond within 24 hours. For urgent matters, chat
                  with our support team directly.
                </p>
              </div>

              <a
                href="https://wa.me/233509659832"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-md transition-all z-10"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
