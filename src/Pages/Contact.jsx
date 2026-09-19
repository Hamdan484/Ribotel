import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
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
              company: formData.company,
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
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-slate-100 transition-colors";

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/contact_hero.png')` }}
        />
        <div className="absolute inset-0 bg-[#071333]/85 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-3xl space-y-4 -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Contact us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200"
          >
            Ribotel is ready to provide the right solution according to your needs
          </motion.p>
        </div>
      </section>

      {/* Main Content Area (Overlapping Card) */}
      <section className="relative z-20 px-6 lg:px-8 -mt-40 mb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row"
          >
            
            {/* Left Column: Get in touch */}
            <div className="lg:w-2/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Get in touch</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-10">
                We are here to help. Reach out to us for any inquiries, project requests, or IT consultations.
              </p>

              <div className="space-y-8">
                {/* Contact Items */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Head Office</h3>
                    <p className="text-sm text-slate-500 mt-1">Kumasi, Ashanti<br/>Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      <a href="mailto:info.ribotel@gmail.com" className="hover:text-blue-600 transition-colors">info.ribotel@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Call Us</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      <a href="tel:+233509659832" className="hover:text-blue-600 transition-colors">+233 509 659 832</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Follow our social media</h3>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/profile.php?id=61594326099758" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ribotel_technologies/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://whatsapp.com/channel/0029Vb4GtJuLY6dEO6V9jx08" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 2.003a9.944 9.944 0 00-8.507 15.1L2 22l5.022-1.315a9.98 9.98 0 004.995 1.337h.004c5.514 0 9.996-4.48 9.998-9.995a9.95 9.95 0 00-2.93-7.073 9.95 9.95 0 00-7.072-2.951zm5.82 14.404c-.245.69-1.448 1.319-1.99 1.405-.51.08-1.153.115-1.86-.11-.43-.137-.98-.32-1.69-.626-2.97-1.284-4.904-4.278-5.053-4.477-.147-.198-1.21-1.61-1.21-3.071s.767-2.178 1.038-2.476c.27-.297.59-.372.787-.372.197 0 .394.002.566.01.182.008.426-.069.667.51.246.593.836 2.05.91 2.2.074.148.123.322.025.52-.099.198-.148.322-.295.495-.148.173-.312.387-.444.52-.148.148-.302.308-.13.605.173.297.77 1.269 1.653 2.056 1.136 1.013 2.094 1.326 2.39 1.474.296.148.468.124.64-.074.173-.198.738-.861.935-1.158.197-.297.394-.247.665-.148.27.099 1.72.812 2.015.96.296.148.493.223.566.347.074.124.074.714-.172 1.405z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ribotel/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://x.com/RibotelTech" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Send us a message */}
            <div className="lg:w-3/5 p-8 md:p-12 bg-white">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 ml-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 ml-1">Subject</label>
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

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md mt-4 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-96 bg-slate-200">
        <iframe 
          src="https://maps.google.com/maps?q=KNUST%20School%20of%20Business&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ribotel Location"
        ></iframe>
      </section>
    </div>
  );
}
