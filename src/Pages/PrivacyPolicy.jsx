import { motion } from "framer-motion";
import { Shield, Database, Activity, Share2, Lock, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 text-left space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary dark:bg-other/10 dark:text-other">
          <Shield className="w-4 h-4" /> Legal
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-slate-100 flex items-center gap-3">
          Privacy Policy
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
          At Ribotel Technologies, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Database className="w-6 h-6 text-other" /> 1. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us. This may include your name, email address, phone number, and any other information you choose to provide.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Activity className="w-6 h-6 text-other" /> 2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes, including to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Improve, personalize, and expand our website and services.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li>Send you emails.</li>
          <li>Find and prevent fraud.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Share2 className="w-6 h-6 text-other" /> 3. Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
          <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
          <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Lock className="w-6 h-6 text-other" /> 4. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Mail className="w-6 h-6 text-other" /> 5. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info.ribotel@gmail.com">info.ribotel@gmail.com</a>.
        </p>
      </motion.div>
    </div>
  );
}
