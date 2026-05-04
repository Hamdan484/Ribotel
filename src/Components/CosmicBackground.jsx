import { useTheme } from "../Context/Theme_context";

export default function CosmicBackground() {
  const { isDark } = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base background */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,#0f3b82_0%,#081229_40%,#020817_100%)]"
            : "bg-[radial-gradient(circle_at_center,#dbeafe_0%,#ffffff_60%,#f8fafc_100%)]"
        }`}
      />

      {/* Soft glow orb (your idea, improved positioning + animation-ready) */}
      <div
        className={`absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[140px] transition-colors duration-700 ${
          isDark ? "bg-blue-500/20" : "bg-blue-300/30"
        }`}
      />

      {/* Star layer (replaceable with real texture or animation later) */}
      <div
        className={`absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-30 ${
          isDark ? "opacity-40" : "opacity-20"
        }`}
      />

      {/* Optional subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.25))] dark:bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.55))]" />
    </div>
  );
}