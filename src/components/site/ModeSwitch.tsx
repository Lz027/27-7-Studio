import { useMode, type Mode } from "./ModeContext";
import { useState, useCallback } from "react";

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

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const [rotation, setRotation] = useState(187);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    cycleMode();
    setRotation((prev) => prev - 120);
    setTimeout(() => setIsSpinning(false), 1400);
  }, [cycleMode, isSpinning]);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 font-medium">
        Click to switch
      </span>

      <button
        type="button"
        onClick={handleClick}
        aria-label={`Current mode: ${mode}. Click to switch.`}
        className="group relative cursor-pointer"
        style={{
          width: 240,
          height: 240,
          transform: "rotate(-12deg)",
          transformOrigin: "center center",
        }}
      >
        {/* ===== AMBIENT GLOW BEHIND RING ===== */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-15%",
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 70%, ${MODE_COLORS[mode]}30 0%, transparent 55%)`,
            filter: "blur(24px)",
            transition: "background 0.7s ease",
            zIndex: 1,
          }}
        />

        {/* ===== BASE RING (all colors, muted) ===== */}
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
            transition: "transform 1.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            opacity: 0.2,
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            zIndex: 2,
          }}
        />

        {/* ===== ACTIVE SECTOR RING (vivid, same rotation) ===== */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50%",
            background: `conic-gradient(
              from -90deg,
              ${MODE_COLORS[mode]} 0deg 120deg,
              transparent 120deg 360deg
            )`,
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.7s ease",
            opacity: 0.9,
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            zIndex: 3,
          }}
        />

        {/* ===== ACTIVE SECTOR INNER GLOW ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 70%, ${MODE_COLORS[mode]}40 0%, transparent 45%)`,
            mixBlendMode: "screen",
            transition: "background 0.7s ease",
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            zIndex: 4,
          }}
        />

        {/* ===== FROSTED GLASS OVERLAY ===== */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50%",
            backdropFilter: "blur(8px) saturate(140%)",
            WebkitBackdropFilter: "blur(8px) saturate(140%)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.03)",
            zIndex: 5,
          }}
        />

        {/* ===== OUTER RIM ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            zIndex: 6,
          }}
        />

        {/* ===== INNER RIM ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            mask: "radial-gradient(circle, transparent 50%, black 51%, black 52%, transparent 53%)",
            WebkitMask: "radial-gradient(circle, transparent 50%, black 51%, black 52%, transparent 53%)",
            zIndex: 6,
          }}
        />

        {/* ===== CENTER DISC ===== */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(10px) saturate(120%)",
            WebkitBackdropFilter: "blur(10px) saturate(120%)",
            border: `1.5px solid ${MODE_COLORS[mode]}50`,
            boxShadow: `
              0 0 28px -6px ${MODE_COLORS[mode]}35,
              0 4px 16px -4px rgba(0,0,0,0.08),
              inset 0 1px 2px rgba(255,255,255,0.2),
              inset 0 -1px 1px rgba(0,0,0,0.03)
            `,
            transition: "border-color 0.7s ease, box-shadow 0.7s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{
              color: MODE_COLORS[mode],
              transition: "color 0.7s ease",
            }}
          >
            {MODE_LABELS[mode]}
          </div>
          <div className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
            {MODE_DESCS[mode]}
          </div>
        </div>

        {/* ===== OUTER AMBIENT GLOW ===== */}
        <div
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "-25%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${MODE_COLORS[mode]}12 0%, transparent 60%)`,
            filter: "blur(32px)",
            transition: "background 0.7s ease",
          }}
        />
      </button>
    </div>
  );
}
