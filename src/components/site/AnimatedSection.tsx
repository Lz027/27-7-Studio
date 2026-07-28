import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} reveal-delay-${Math.min(delay, 4)} ${className}`}
    >
      {children}
    </div>
  );
}
