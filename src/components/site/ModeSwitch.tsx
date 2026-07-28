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
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    cycleMode();
    setRotation((prev) => prev + 120);
    setTimeout(() => setIsSpinning(false), 900);
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
          width: 220,
          height: 220,
        }}
      >
        {/* ===== SINGLE COLOR RING ===== */}
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
            transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
            opacity: 0.55,
            mask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
          }}
        />

        {/* ===== FIXED SPOTLIGHT (brightens active sector at bottom-left) ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 28% 72%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 25%, transparent 50%)",
            mixBlendMode: "overlay",
            mask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
          }}
        />

        {/* ===== FROSTED GLASS OVERLAY ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            backdropFilter: "blur(6px) saturate(130%)",
            WebkitBackdropFilter: "blur(6px) saturate(130%)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            mask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
          }}
        />

        {/* ===== SUBTLE RIM ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            mask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 54%, black 55%, black 100%)",
          }}
        />

        {/* ===== CENTER DISC ===== */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            width: 116,
            height: 116,
            borderRadius: "50%",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(10px) saturate(120%)",
            WebkitBackdropFilter: "blur(10px) saturate(120%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 2px 12px -2px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.2)",
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
      </button>
    </div>
  );
}
