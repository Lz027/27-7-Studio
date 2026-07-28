import { useMode, type Mode } from "./ModeContext";

const MODE_COLORS = {
  studio: "#991b42",
  work: "#10668b",
  about: "#c4942a",
};

const MODE_LABELS: Record<Mode, string> = {
  studio: "STUDIO",
  work: "WORK",
  about: "ABOUT",
};

const MODE_DESCS: Record<Mode, string> = {
  studio: "Services & pricing",
  work: "Projects & process",
  about: "Bio & contact",
};

const RING_ROTATION: Record<Mode, number> = {
  studio: 0,
  work: 120,
  about: 240,
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const rotation = RING_ROTATION[mode];

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 font-medium">
        Click to switch
      </span>

      <button
        type="button"
        onClick={cycleMode}
        aria-label={`Current mode: ${mode}. Click to switch.`}
        className="group relative cursor-pointer"
        style={{
          width: 240,
          height: 240,
          transform: "rotate(-12deg)",
          transformOrigin: "center center",
        }}
      >
        {/* ===== COLORED RING (donut) ===== */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50%",
            background: `conic-gradient(
              from -90deg,
              ${MODE_COLORS.studio} 0deg 120deg,
              ${MODE_COLORS.work} 120deg 240deg,
              ${MODE_COLORS.about} 240deg 360deg
            )`,
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1.2s cubic-bezier(0.34, 1.8, 0.64, 1)",
            opacity: 0.3,
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
          }}
        />

        {/* ===== FROSTED GLASS OVERLAY ===== */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50%",
            backdropFilter: "blur(10px) saturate(150%)",
            WebkitBackdropFilter: "blur(10px) saturate(150%)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.04)",
          }}
        />

        {/* ===== OUTER RIM LINE ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
          }}
        />

        {/* ===== INNER RIM LINE ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            mask: "radial-gradient(circle, transparent 50%, black 51%, black 52%, transparent 53%)",
            WebkitMask: "radial-gradient(circle, transparent 50%, black 51%, black 52%, transparent 53%)",
          }}
        />

        {/* ===== CENTER GLOW BACKDROP ===== */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "58%",
            height: "58%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${MODE_COLORS[mode]}35 0%, ${MODE_COLORS[mode]}10 50%, transparent 70%)`,
            filter: "blur(16px)",
            transition: "background 0.7s ease",
            zIndex: 5,
          }}
        />

        {/* ===== HOVER GLOW RING (subtle edge glow on hover) ===== */}
        <div
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "56%",
            height: "56%",
            borderRadius: "50%",
            boxShadow: `0 0 28px 4px ${MODE_COLORS[mode]}40, 0 0 60px 12px ${MODE_COLORS[mode]}18`,
            transition: "box-shadow 0.7s ease, opacity 0.3s ease",
            zIndex: 6,
          }}
        />

        {/* ===== CENTER GLASS DISC ===== */}
        <div
          className="absolute transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "52%",
            height: "52%",
            borderRadius: "50%",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 100%)",
            backdropFilter: "blur(8px) saturate(130%)",
            WebkitBackdropFilter: "blur(8px) saturate(130%)",
            border: `1px solid ${MODE_COLORS[mode]}40`,
            boxShadow: `
              0 0 24px -4px ${MODE_COLORS[mode]}50,
              0 4px 20px -6px rgba(0,0,0,0.1),
              inset 0 1px 2px rgba(255,255,255,0.25)
            `,
            transition: "border-color 0.7s ease, box-shadow 0.7s ease, transform 0.3s ease-out",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <div
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{
              color: MODE_COLORS[mode],
              textShadow: `0 0 20px ${MODE_COLORS[mode]}60, 0 0 40px ${MODE_COLORS[mode]}30`,
              transition: "color 0.7s ease, text-shadow 0.7s ease",
            }}
          >
            {MODE_LABELS[mode]}
          </div>
          <div className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
            {MODE_DESCS[mode]}
          </div>
        </div>

        {/* ===== AMBIENT COLOR GLOW ===== */}
        <div
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "-25%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${MODE_COLORS[mode]}18 0%, transparent 60%)`,
            filter: "blur(32px)",
            transition: "background 0.7s ease",
          }}
        />
      </button>
    </div>
  );
}
