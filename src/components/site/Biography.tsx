import { useState, useEffect } from "react";
import { site } from "@/lib/site-content";

function useTypingEffect(fullText: string, speed = 30) {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    setDisplayedLength(0);
    const interval = setInterval(() => {
      setDisplayedLength((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return {
    displayedText: fullText.slice(0, displayedLength),
    isFinished: displayedLength >= fullText.length,
  };
}

export function Biography() {
  const fullText = site.biography.text;
  const { displayedText, isFinished } = useTypingEffect(fullText, 25);

  // Render text with clickable highlighted links once typed
  const renderFormattedText = () => {
    // Check if "Shoseki" and "research paper" are present in displayed text
    const shosekiIndex = displayedText.indexOf("Shoseki");
    const paperIndex = displayedText.indexOf("research paper");

    if (shosekiIndex === -1 && paperIndex === -1) {
      return <span>{displayedText}</span>;
    }

    return (
      <span>
        {/* Parts logic */}
        {displayedText.split("Shoseki").map((part, idx, arr) => {
          const isLast = idx === arr.length - 1;

          // Check for research paper in part
          const subParts = part.split("research paper");

          return (
            <span key={idx}>
              {subParts.map((subPart, subIdx, subArr) => {
                const isSubLast = subIdx === subArr.length - 1;
                return (
                  <span key={subIdx}>
                    {subPart}
                    {!isSubLast && (
                      <a href="#" className="highlight-link">
                        research paper
                      </a>
                    )}
                  </span>
                );
              })}
              {!isLast && (
                <a
                  href="https://project-shoseki.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="highlight-link"
                >
                  Shoseki
                </a>
              )}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <section id="biography" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.biography.label}</span>
        </div>

        {/* Content Right */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans min-h-[160px]">
            {renderFormattedText()}
            {!isFinished && (
              <span className="inline-block h-4 w-1.5 translate-y-0.5 bg-primary animate-pulse ml-0.5" />
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
