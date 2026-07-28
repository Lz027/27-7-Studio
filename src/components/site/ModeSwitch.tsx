import { useMode, type Mode } from "./ModeContext";

const MODE_ROTATION: Record<Mode, number> = {
  studio: 0,
  work: 120,
  about: 240,
};

const MODE_COLORS: Record<Mode, string> = {
  studio: "#991b42", // magenta
  work: "#10668b",   // blue
  about: "#855716",  // amber/gold
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const rotation = MODE_ROTATION[mode];

  return (
    <div className="group relative flex flex-col items-center gap-3">
      {/* Wheel Window — half-circle, clips the disc */}
      <div
        className="relative"
        style={{
          width: 80,
          height: 40,
          perspective: 500,
          overflow: "hidden",
          borderRadius: "40px 40px 0 0",
        }}
      >
        {/* Glow backdrop */}
        <div
          className="absolute inset-0 blur-xl opacity-50 transition-colors duration-700"
          style={{ backgroundColor: MODE_COLORS[mode] }}
        />

        {/* The Disc — 3-sector pie, rotates on Z with 3D tilt */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `conic-gradient(
              ${MODE_COLORS.studio} 0deg 120deg,
              ${MODE_COLORS.work} 120deg 240deg,
              ${MODE_COLORS.about} 240deg 360deg
            )`,
            transformOrigin: "center center",
            transform: `rotate(${rotation}deg) rotateX(55deg)`,
            transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)",
          }}
        >
          {/* Inner cutout ring for depth */}
          <div
            className="absolute inset-3 rounded-full bg-card shadow-inner"
            style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Fixed indicator dot at top center */}
        <div
          className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-background shadow-sm"
          style={{ zIndex: 10 }}
        />
      </div>

      {/* Click target + label */}
      <button
        type="button"
        onClick={cycleMode}
        aria-label={`Current mode: ${mode}. Click to switch mode.`}
        className="relative -mt-1 cursor-pointer rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {mode}
      </button>

      {/* Color burst glow below */}
      <div
        className="pointer-events-none absolute -bottom-4 h-8 w-24 rounded-full blur-xl transition-colors duration-700 opacity-40"
        style={{ backgroundColor: MODE_COLORS[mode] }}
      />
    </div>
  );
}
