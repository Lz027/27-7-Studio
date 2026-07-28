import { useMode, type Mode } from "./ModeContext";
import { useState } from "react";

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
  // Start at 255° so studio sits at bottom-left.
  // Each click adds 120° — the ring keeps spinning forward.
  const [rotation, setRotation] = useState(255);

  const handleClick = () => {
    cycleMode();
    setRotation((prev) => prev + 120);
  };

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
          // CSS var for dynamic hover text glow
          "--glow-color": `${MODE_COLORS[mode]}90`,
        } as React.CSSProperties}
      >
        {/* ===== ACTIVE SECTOR GLOW (behind ring, bottom-left) ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            background: `radial-gradient(circle at 28% 72%, ${MODE_COLORS[mode]}60 0%, transparent 45%)`,
            filter: "blur(18px)",
            transition: "background 0.7s ease",
            zIndex: 1,
          }}
        />

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
            opacity: 0.45,
            mask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 53%, black 100%)",
            zIndex: 2,
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
            zIndex: 3,
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
            zIndex: 4,
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
            zIndex: 4,
          }}
        />

        {/* ===== CENTER GLASS DISC (grows from center on hover) ===== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="transition-transform duration-300 ease-out group-hover:scale-110"
            style={{
              width: 125,
              height: 125,
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
            }}
          >
            {/* Mode label — no permanent glow, hover glow only */}
            <div
              className="text-[13px] font-bold uppercase tracking-[0.18em] transition-all duration-300 [text-shadow:none] group-hover:[text-shadow:0_0_12px_var(--glow-color)]"
              style={{
                color: MODE_COLORS[mode],
                transition: "color 0.7s ease, text-shadow 0.3s ease",
              }}
            >
              {MODE_LABELS[mode]}
            </div>
            <div className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              {MODE_DESCS[mode]}
            </div>
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
