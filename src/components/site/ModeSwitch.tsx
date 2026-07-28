import { useMode, type Mode } from "./ModeContext";

const MODE_ORDER: Mode[] = ["studio", "work", "about"];

const MODE_ROTATION: Record<Mode, number> = {
  studio: 0,
  work: -120,
  about: 120,
};

const MODE_COLORS = {
  studio: "#991b42", // magenta
  work: "#10668b",   // blue
  about: "#c4942a",  // amber/gold (brighter for visibility)
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const rotation = MODE_ROTATION[mode];

  return (
    <button
      type="button"
      onClick={cycleMode}
      aria-label={`Current mode: ${mode}. Click to switch mode.`}
      className="group relative cursor-pointer"
      style={{
        width: 260,
        height: 200,
        // Tilted 3D perspective
        transform: "perspective(700px) rotateX(45deg) rotateZ(-18deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* ===== GAUGE MASK — semi-circle window ===== */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          // Flat side on left, arc on right — "D" shape
          borderRadius: "0 50% 50% 0",
          // Liquid glass base
          background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
          backdropFilter: "blur(20px) saturate(160%) brightness(1.05)",
          WebkitBackdropFilter: "blur(20px) saturate(160%) brightness(1.05)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: `
            inset 0 1px 2px rgba(255,255,255,0.25),
            0 12px 40px -8px rgba(0,0,0,0.15),
            0 0 0 1px rgba(255,255,255,0.08)
          `,
        }}
      >
        {/* ===== THE DISC — 3-sector pie ===== */}
        <div
          className="absolute"
          style={{
            width: 360,
            height: 360,
            left: -140,
            top: -80,
            borderRadius: "50%",
            background: `conic-gradient(
              from 0deg,
              ${MODE_COLORS.work} 0deg 120deg,
              ${MODE_COLORS.about} 120deg 240deg,
              ${MODE_COLORS.studio} 240deg 360deg
            )`,
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.9s cubic-bezier(0.34, 1.8, 0.64, 1)",
            // Inner depth ring
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.2), inset 0 0 12px rgba(0,0,0,0.1)",
          }}
        />

        {/* ===== LIQUID GLASS OVERLAY ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)
            `,
            mixBlendMode: "overlay",
          }}
        />

        {/* ===== BLURRED EDGES MASK ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 30px 12px rgba(255,255,255,0.35)",
          }}
        />
      </div>

      {/* ===== FIXED POINTER ===== */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1"
        style={{ zIndex: 20 }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "10px solid var(--foreground)",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
            transition: "border-left-color 0.7s ease",
          }}
        />
      </div>

      {/* ===== MODE GLOW BELOW ===== */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 180,
          height: 40,
          borderRadius: "50%",
          background: MODE_COLORS[mode],
          filter: "blur(24px)",
          opacity: 0.35,
          transition: "background 0.7s ease, opacity 0.7s ease",
        }}
      />
    </button>
  );
}
