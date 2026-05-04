import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme_context";

export default function Card({
  children,
  hover = true,
  className = "",
  ...props
}) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`glass-panel rounded-2xl transition-all ${className} ${
        hover ? "cursor-pointer" : ""
      }`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: isDark
                ? "0 20px 50px -20px rgba(34, 211, 238, 0.2)"
                : "0 20px 50px -20px rgba(15, 118, 110, 0.15)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
