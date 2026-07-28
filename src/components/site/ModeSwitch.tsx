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

// Rotation angles for the disc so the active sector aligns with the pointer
const DISC_ROTATION: Record<Mode, number> = {
  studio: 30,
  work: 150,
  about: 270,
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const rotation = DISC_ROTATION[mode];

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Instruction */}
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 font-medium">
        Click to switch
      </span>

      <button
        type="button"
        onClick={cycleMode}
        aria-label={`Current mode: ${mode}. Click to switch.`}
        className="relative cursor-pointer"
        style={{
          width: 280,
          height: 180,
          // Tilt: up-right to down-left
          transform: "rotate(-22deg)",
          transformOrigin: "center center",
        }}
      >
        {/* ===== SEMI-CIRCLE WINDOW (bottom-flat, top-arc) ===== */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "140px 140px 0 0",
            // Liquid glass base frame
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.25), 0 8px 32px -4px rgba(0,0,0,0.12)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* ===== ROTATING DISC (full circle, clipped by parent) ===== */}
          <div
            className="absolute"
            style={{
              width: 280,
              height: 280,
              top: -100,
              left: 0,
              borderRadius: "50%",
              background: `conic-gradient(
                from 0deg,
                ${MODE_COLORS.studio} 0deg 120deg,
                ${MODE_COLORS.work} 120deg 240deg,
                ${MODE_COLORS.about} 240deg 360deg
              )`,
              transform: `rotate(${rotation}deg)`,
              transition:
                "transform 1s cubic-bezier(0.34, 1.8, 0.64, 1)",
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)",
            }}
          />

          {/* ===== LIQUID GLASS OVERLAY ===== */}
          {/* Center is clear, edges are heavily blurred — only active mode shows through */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 45% 55% at 50% 75%, transparent 0%, transparent 35%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.85) 100%)
              `,
              mixBlendMode: "overlay",
            }}
          />

          {/* Frosted glass layer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: "blur(6px) saturate(140%)",
              WebkitBackdropFilter: "blur(6px) saturate(140%)",
              maskImage:
                "radial-gradient(ellipse 50% 60% at 50% 80%, transparent 25%, black 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 60% at 50% 80%, transparent 25%, black 70%)",
            }}
          />

          {/* Inner highlight ring */}
          <div
            className="absolute inset-0 pointer-events-none rounded-t-full"
            style={{
              boxShadow: "inset 0 2px 8px rgba(255,255,255,0.2), inset 0 -2px 6px rgba(0,0,0,0.05)",
            }}
          />

          {/* Mode labels — positioned along the arc */}
          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest text-foreground/40 pointer-events-none"
            style={{ left: "50%", top: "18%", transform: "translateX(-50%)" }}
          >
            {MODE_LABELS.work}
          </span>
          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest text-foreground/40 pointer-events-none"
            style={{ right: "12%", top: "42%", transform: "rotate(25deg)" }}
          >
            {MODE_LABELS.about}
          </span>
          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest text-foreground/40 pointer-events-none"
            style={{ left: "12%", top: "42%", transform: "rotate(-25deg)" }}
          >
            {MODE_LABELS.studio}
          </span>
        </div>

        {/* ===== FIXED POINTER (triangle on the flat edge, pointing up into the arc) ===== */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            bottom: -2,
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: `14px solid ${MODE_COLORS[mode]}`,
              filter: "drop-shadow(0 -1px 3px rgba(0,0,0,0.3))",
              transition: "border-bottom-color 0.7s ease",
            }}
          />
        </div>

        {/* ===== ACTIVE MODE LABEL below pointer ===== */}
        <div
          className="absolute pointer-events-none text-center"
          style={{
            left: "50%",
            bottom: -28,
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <div
            className="text-[11px] font-bold uppercase tracking-[0.15em]"
            style={{ color: MODE_COLORS[mode], transition: "color 0.7s ease" }}
          >
            {MODE_LABELS[mode]}
          </div>
        </div>

        {/* ===== AMBIENT GLOW ===== */}
        <div
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "-30% -20% -40% -20%",
            borderRadius: "50%",
            background: `radial-gradient(ellipse at 50% 60%, ${MODE_COLORS[mode]}22 0%, transparent 55%)`,
            filter: "blur(30px)",
            transition: "background 0.7s ease",
          }}
        />
      </button>
    </div>
  );
}
