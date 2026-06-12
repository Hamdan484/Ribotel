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
    outline:
      "border-2 theme-border theme-btn-outline hover:opacity-95 transition-colors",
    ghost:
      "hover:bg-teal-50/70 dark:hover:bg-cyan-400/10 hover:opacity-95 transition-colors",
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
