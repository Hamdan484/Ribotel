import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const { isDark } = useTheme();

  const variants = {
    primary: "btn-gradient",
    secondary: "btn-outline-themed",
    outline: isDark
      ? "border-2 border-white/20 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-200"
      : "border-2 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-800",
    ghost: isDark
      ? "text-cyan-200 hover:bg-cyan-400/10"
      : "text-teal-700 hover:bg-teal-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={`flex items-center justify-center gap-2 rounded-xl font-semibold transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
