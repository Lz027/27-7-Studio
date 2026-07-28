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

// Needle angles pointing to each mode on the arc
const NEEDLE_ANGLE: Record<Mode, number> = {
  studio: -130, // down-left
  work: -90,    // straight up
  about: -50,   // down-right
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const angle = NEEDLE_ANGLE[mode];

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
          width: 260,
          height: 160,
          // Tilt: up-right to down-left
          transform: "rotate(-18deg)",
          transformOrigin: "center center",
        }}
      >
        {/* ===== ARC WINDOW (semi-circle, flat bottom) ===== */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "130px 130px 0 0",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.2), 0 6px 24px -4px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* ===== ARC SCALE LINE ===== */}
          <div
            className="absolute inset-x-4 top-4"
            style={{
              height: "calc(100% - 16px)",
              borderRadius: "inherit",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
            }}
          />

          {/* ===== TICK MARKS ===== */}
          {[...Array(7)].map((_, i) => {
            const tickAngle = -150 + i * 25;
            return (
              <div
                key={i}
                className="absolute top-full left-1/2 bg-foreground/15 origin-top"
                style={{
                  width: i === 3 ? 2 : 1,
                  height: i === 3 ? 10 : 5,
                  transform: `translate(-50%, -100%) rotate(${tickAngle}deg) translateY(-118px)`,
                }}
              />
            );
          })}

          {/* ===== MODE LABELS (fixed positions along arc) ===== */}
          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest transition-all duration-700"
            style={{
              left: "18%",
              bottom: "12%",
              color: mode === "studio" ? MODE_COLORS.studio : "rgba(0,0,0,0.15)",
              transform: mode === "studio" ? "scale(1.1)" : "scale(0.9)",
              filter: mode === "studio" ? "none" : "blur(1.5px)",
            }}
          >
            {MODE_LABELS.studio}
          </span>

          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest transition-all duration-700"
            style={{
              left: "50%",
              top: "10%",
              transform: `translateX(-50%) ${mode === "work" ? "scale(1.1)" : "scale(0.9)"}`,
              color: mode === "work" ? MODE_COLORS.work : "rgba(0,0,0,0.15)",
              filter: mode === "work" ? "none" : "blur(1.5px)",
            }}
          >
            {MODE_LABELS.work}
          </span>

          <span
            className="absolute text-[10px] font-bold uppercase tracking-widest transition-all duration-700"
            style={{
              right: "18%",
              bottom: "12%",
              color: mode === "about" ? MODE_COLORS.about : "rgba(0,0,0,0.15)",
              transform: mode === "about" ? "scale(1.1)" : "scale(0.9)",
              filter: mode === "about" ? "none" : "blur(1.5px)",
            }}
          >
            {MODE_LABELS.about}
          </span>

          {/* ===== LIQUID GLASS OVERLAY (edges blurred, center clear) ===== */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 55% 70% at 50% 85%, transparent 0%, transparent 30%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.8) 100%)
              `,
              mixBlendMode: "overlay",
            }}
          />

          {/* Frosted edge mask */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
              maskImage:
                "radial-gradient(ellipse 60% 75% at 50% 80%, transparent 30%, black 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 75% at 50% 80%, transparent 30%, black 75%)",
            }}
          />

          {/* Inner rim light */}
          <div
            className="absolute inset-0 pointer-events-none rounded-t-full"
            style={{
              boxShadow:
                "inset 0 2px 6px rgba(255,255,255,0.15), inset 0 -1px 4px rgba(0,0,0,0.04)",
            }}
          />
        </div>

        {/* ===== NEEDLE (pivots from bottom center) ===== */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            bottom: 0,
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transformOrigin: "bottom center",
            transition:
              "transform 1s cubic-bezier(0.34, 1.8, 0.64, 1)",
            zIndex: 20,
          }}
        >
          {/* Needle shaft */}
          <div
            style={{
              width: 3,
              height: 110,
              background: `linear-gradient(to top, ${MODE_COLORS[mode]} 0%, ${MODE_COLORS[mode]}dd 60%, transparent 100%)`,
              borderRadius: "2px 2px 0 0",
              transition: "background 0.7s ease",
              boxShadow: "0 0 6px rgba(0,0,0,0.15)",
            }}
          />
          {/* Needle tip */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderBottom: `8px solid ${MODE_COLORS[mode]}`,
              transition: "border-bottom-color 0.7s ease",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
            }}
          />
        </div>

        {/* ===== CENTER PIVOT ===== */}
        <div
          className="absolute pointer-events-none rounded-full border-2 border-background/60"
          style={{
            left: "50%",
            bottom: -6,
            transform: "translateX(-50%)",
            width: 16,
            height: 16,
            background: "var(--foreground)",
            boxShadow:
              "0 0 0 2px rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 25,
          }}
        />

        {/* ===== ACTIVE LABEL BELOW ===== */}
        <div
          className="absolute pointer-events-none text-center"
          style={{
            left: "50%",
            bottom: -32,
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
            inset: "-25% -15% -35% -15%",
            borderRadius: "50%",
            background: `radial-gradient(ellipse at 50% 60%, ${MODE_COLORS[mode]}20 0%, transparent 55%)`,
            filter: "blur(28px)",
            transition: "background 0.7s ease",
          }}
        />
      </button>
    </div>
  );
}
