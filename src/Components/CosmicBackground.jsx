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
          isDark ? "bg-slate-950" : "bg-white"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-slate-950/20" : "bg-white/30"
        }`}
      />

      {/* Top right blob */}
      <div
        className={`absolute top-24 -right-16 h-80 w-80 rounded-full blur-3xl animate-blob ${
          isDark
            ? "bg-violet-600/25 mix-blend-screen"
            : "bg-teal-400/25 mix-blend-multiply"
        }`}
      />

      {/* Bottom left blob */}
      <div
        className={`absolute bottom-0 -left-12 h-80 w-80 rounded-full blur-3xl animate-blob animation-delay-2000 ${
          isDark
            ? "bg-cyan-500/20 mix-blend-screen"
            : "bg-indigo-400/20 mix-blend-multiply"
        }`}
      />

      {/* Center glow */}
      <div
        className={`absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          isDark ? "bg-indigo-600/15" : "bg-sky-300/20"
        }`}
      />

      {/* Optional stars texture */}
      <div
        className={`absolute inset-0 bg-[url('/stars.png')] bg-repeat ${
          isDark ? "opacity-20" : "opacity-10"
        }`}
      />
    </div>
  );
}