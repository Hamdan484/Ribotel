import { motion } from "framer-motion";
import { teamImages } from "../teamImages";

export default function TeamPreview() {
  const team = [...teamImages];

  return (
    <section className="section-band py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
            Our Talent
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100">
            Meet Our <span className="text-secondary dark:text-other">Team</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Meet the talented professionals dedicated to your success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div>
                {/* Photo container */}
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                      member.objectFit || "object-cover"
                    } ${
                      member.objectPosition || "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2 text-left">
                  <h3 className="font-display text-xl font-bold text-[#071333] group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#36ADA3]">
                    {member.role}
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
