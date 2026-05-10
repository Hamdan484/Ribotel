import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function ContactSection() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "info@ribotel.com",
      link: "mailto:info@ribotel.com",
    },
    {
      icon: (<ion-icon name="call-outline"></ion-icon>),
      title: "Phone",
      value: "+233 534 819 667",
      link: "tel:+233534819667",
    },
    {
      icon: (<ion-icon name="location-outline"></ion-icon>),
      title: "Location",
      value: "Kumasi, Ghana",
      link: "#",
    },
    {
      icon: "🕐",
      title: "Working Hours",
      value: "Mon - Fri | 9AM - 5PM",
      link: "#",
      
    },
  ];

  return (
    <section className="section-band py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
              isDark
                ? "border-white/10 bg-slate-950/60 text-cyan-200"
                : "border-slate-200 bg-white text-teal-700"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
            Get In Touch
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-600 md:text-5xl lg:text-6xl dark:text-slate-50">
            Contact{" "}
            <span className="bg-linear-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              Us Today
            </span>
          </h2>

          <p
            className={`mx-auto max-w-2xl text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind? Need IT solutions or consulting?
            Let's discuss how we can help your business grow.
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
            className={`rounded-3xl p-8 ${
              isDark
                ? "border border-white/10 bg-slate-900/50 backdrop-blur-xl"
                : "border border-slate-200 bg-white shadow-sm"
            }`}
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400"
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400"
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
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400"
              />

              {/* Button */}
              <motion.button
                type="submit"
                className="btn-gradient w-full rounded-xl py-4 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="rounded-xl bg-green-500/20 p-4 text-center text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully ✅
                </motion.div>
              )}
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
                className={`flex items-center justify-between rounded-2xl p-6 transition hover:scale-[1.02] ${
                  isDark
                    ? "border border-white/10 bg-slate-900/40"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-slate-400">{item.icon}</div>

                  <div>
                    <h3 className="font-bold text-slate-400">{item.title}</h3>
                    <p
                      className={
                        isDark ? "text-slate-400" : "text-slate-600"
                      }
                    >
                      {item.value}
                    </p>
                  </div>
                </div>

                <span className="text-xl text-teal-500">→</span>
              </a>
            ))}

            {/* CTA Card */}
            <div
              className={`rounded-3xl p-8 ${
                isDark
                  ? "border border-white/10 bg-linear-to-r from-cyan-500/10 to-violet-500/10"
                  : "border border-slate-200 bg-linear-to-r from-teal-50 to-indigo-50"
              }`}
            >
              <h3 className={`text-2xl font-bold ${isDark ? 'text-emerald-600' : 'text-teal-700'}`}>
                Need urgent assistance?
              </h3>

              <p
                className={`mt-3 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                We typically respond within 24 hours.
                For urgent matters, call us directly.
              </p>

              <button className="btn-gradient mt-5 rounded-xl px-6 py-3 ">
                <a href="https://wa.me/233597788861" target="_blank" rel="noopener noreferrer">
  <button>Chat on WhatsApp</button>
</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}