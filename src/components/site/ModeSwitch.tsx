import { useMode, type Mode } from "./ModeContext";

const MODE_COLORS = {
  studio: "#991b42",
  work: "#10668b",
  about: "#c4942a",
};

const MODE_NEEDLE: Record<Mode, number> = {
  studio: 150,
  work: -90,
  about: 30,
};

const MODE_INFO: Record<Mode, { title: string; desc: string }> = {
  studio: { title: "Studio", desc: "Services & pricing" },
  work: { title: "Work", desc: "Projects & process" },
  about: { title: "About", desc: "Bio & contact" },
};

export function ModeSwitch() {
  const { mode, cycleMode } = useMode();
  const angle = MODE_NEEDLE[mode];

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
        Click to switch mode
      </span>

      <button
        type="button"
        onClick={cycleMode}
        aria-label={`Current mode: ${mode}. Click to switch.`}
        className="relative cursor-pointer"
        style={{ width: 220, height: 220 }}
      >
        {/* Outer colored ring */}
        <div
          className="absolute inset-0 rounded-full p-[3px]"
          style={{
            background: `conic-gradient(
              from -90deg,
              ${MODE_COLORS.work} 0deg 120deg,
              ${MODE_COLORS.about} 120deg 240deg,
              ${MODE_COLORS.studio} 240deg 360deg
            )`,
          }}
        >
          {/* Inner frosted glass face */}
          <div
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(16px) saturate(150%)",
              WebkitBackdropFilter: "blur(16px) saturate(150%)",
              boxShadow:
                "inset 0 1px 3px rgba(255,255,255,0.2), inset 0 -1px 3px rgba(0,0,0,0.05)",
            }}
          >
            {/* Tick marks */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 bg-foreground/10 origin-bottom"
                style={{
                  width: i % 3 === 0 ? 2 : 1,
                  height: i % 3 === 0 ? 10 : 5,
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-92px)`,
                }}
              />
            ))}

            {/* Mode labels */}
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest text-foreground/30">
              Work
            </span>
            <span className="absolute bottom-6 right-6 text-[9px] font-bold uppercase tracking-widest text-foreground/30">
              About
            </span>
            <span className="absolute bottom-6 left-6 text-[9px] font-bold uppercase tracking-widest text-foreground/30">
              Studio
            </span>

            {/* Compass needle */}
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transition:
                  "transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="relative" style={{ width: 4, height: 150 }}>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderBottom: `75px solid ${MODE_COLORS[mode]}`,
                    filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
                    transition: "border-bottom-color 0.7s ease",
                  }}
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: `75px solid ${MODE_COLORS[mode]}44`,
                    transition: "border-top-color 0.7s ease",
                  }}
                />
              </div>
            </div>

            {/* Center pivot */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background/50"
              style={{
                width: 14,
                height: 14,
                background: "var(--foreground)",
                boxShadow:
                  "0 0 0 2px rgba(255,255,255,0.15), 0 2px 6px rgba(0,0,0,0.2)",
              }}
            />

            {/* Center mode info */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 text-center pointer-events-none">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/70">
                {MODE_INFO[mode].title}
              </div>
              <div className="text-[9px] text-muted-foreground mt-0.5">
                {MODE_INFO[mode].desc}
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute -inset-8 rounded-full pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${MODE_COLORS[mode]}18 0%, transparent 65%)`,
            filter: "blur(24px)",
            transition: "background 0.7s ease",
          }}
        />
      </button>
    </div>
  );
}
