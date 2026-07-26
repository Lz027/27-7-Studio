import { useMode, type Mode } from "./ModeContext";

export function ModeSwitch() {
  const { mode, setMode, cycleMode } = useMode();

  const getRotation = (currentMode: Mode) => {
    switch (currentMode) {
      case "studios":
        return 0;
      case "work":
        return 120;
      case "about":
        return 240;
      default:
        return 0;
    }
  };

  const rotation = getRotation(mode);

  return (
    <div className="group relative flex flex-col items-center justify-center">
      {/* Outer blurred mode glow container */}
      <div className="relative flex items-center justify-center">
        {/* Glow backdrop */}
        <div
          className="absolute h-12 w-12 rounded-full blur-md opacity-40 transition-colors duration-700 pointer-events-none"
          style={{ backgroundColor: "var(--mode-glow, var(--primary))" }}
        />

        {/* Clickable button wrapper */}
        <button
          type="button"
          onClick={cycleMode}
          aria-label={`Current mode: ${mode}. Click to switch mode.`}
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-card p-1 shadow-md transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {/* Conic Gradient Wheel */}
          <div
            className="relative h-9 w-9 rounded-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              transform: `rotate(${rotation}deg)`,
              background:
                "conic-gradient(from 0deg, #991b42 0deg 120deg, #10668b 120deg 240deg, #855716 240deg 360deg)",
            }}
          >
            {/* Inner cutout ring */}
            <div className="absolute inset-1.5 rounded-full bg-card shadow-inner" />
          </div>

          {/* Fixed Top Indicator Dot */}
          <div className="absolute top-1.5 h-1.5 w-1.5 rounded-full bg-foreground shadow-sm pointer-events-none" />
        </button>
      </div>

      {/* Mode Label on Hover / Active Indicator */}
      <div className="absolute -bottom-6 text-[11px] font-medium tracking-wide text-muted-foreground uppercase opacity-80 group-hover:opacity-100 transition-opacity">
        {mode}
      </div>
    </div>
  );
}
