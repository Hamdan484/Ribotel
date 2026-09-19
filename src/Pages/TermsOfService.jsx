import { motion } from "framer-motion";
import { Scale, CheckCircle, FileText, AlertTriangle, ShieldAlert, Edit, Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 text-left space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
          <Scale className="w-4 h-4" /> Legal
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100 flex items-center gap-3">
          Terms of Service
        </h1>
        <p className="text-slate-500 dark:text-slate-400">Last Updated: September 2026</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:text-primary dark:prose-headings:text-slate-100 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-other hover:prose-a:text-other/80 space-y-6"
      >
        <p>
          Welcome to Ribotel Technologies. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-other" /> 1. Acceptance of Terms</h2>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Ribotel Technologies if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-other" /> 2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, Ribotel Technologies and/or its licensors own the intellectual property rights for all material on Ribotel Technologies. All intellectual property rights are reserved. You may access this from Ribotel Technologies for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republish material from Ribotel Technologies</li>
          <li>Sell, rent or sub-license material from Ribotel Technologies</li>
          <li>Reproduce, duplicate or copy material from Ribotel Technologies</li>
          <li>Redistribute content from Ribotel Technologies</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-other" /> 3. User Conduct</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-other" /> 4. Limitation of Liability</h2>
        <p>
          In no event shall Ribotel Technologies, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Ribotel Technologies, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Scale className="w-6 h-6 text-other" /> 5. Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Ribotel Technologies from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Edit className="w-6 h-6 text-other" /> 6. Modifications to Terms</h2>
        <p>
          Ribotel Technologies is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Mail className="w-6 h-6 text-other" /> 7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at: <a href="mailto:info.ribotel@gmail.com">info.ribotel@gmail.com</a>.
        </p>
      </motion.div>
    </div>
  );
}
