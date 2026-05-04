import { useTheme } from "../Context/Theme_context";

export default function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const { isDark } = useTheme();

  const variants = {
    default: isDark
      ? "border border-white/10 bg-slate-950/60 text-cyan-200"
      : "border border-slate-200/80 bg-white/90 text-teal-800",
    primary: isDark
      ? "border border-cyan-400/40 bg-cyan-500/10 text-cyan-200"
      : "border border-teal-300 bg-teal-50 text-teal-900",
    success: isDark
      ? "bg-emerald-500/15 text-emerald-300"
      : "bg-emerald-50 text-emerald-800",
    warning: isDark
      ? "bg-amber-500/15 text-amber-200"
      : "bg-amber-50 text-amber-900",
    error: isDark ? "bg-red-500/15 text-red-300" : "bg-red-50 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
