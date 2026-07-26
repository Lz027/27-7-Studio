import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Mode = "studios" | "work" | "about";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  cycleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("studios");

  const setMode = useCallback((newMode: Mode) => {
    setModeState(newMode);
  }, []);

  const cycleMode = useCallback(() => {
    setModeState((current) => {
      if (current === "studios") return "work";
      if (current === "work") return "about";
      return "studios";
    });
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode, cycleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
