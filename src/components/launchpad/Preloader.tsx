import { useEffect, useState } from "react";
import { BOOT_LINES } from "./data";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLines(BOOT_LINES.slice(0, i));
      if (i >= BOOT_LINES.length) {
        window.clearInterval(id);
        window.setTimeout(() => setLeaving(true), 500);
        window.setTimeout(onDone, 1100);
      }
    }, 190);
    return () => window.clearInterval(id);
  }, [onDone]);

  const pct = Math.round((lines.length / BOOT_LINES.length) * 100);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-screen screen-scan px-6 transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-2xl">
        <div className="h-64 overflow-hidden text-[9px] leading-5 text-accent sm:text-[10px]">
          {lines.map((l) => (
            <p key={l} className="text-glow">
              &gt; {l}
            </p>
          ))}
          <span className="inline-block h-3 w-2 bg-accent align-middle [animation:blink_1s_steps(1)_infinite]" />
        </div>
        <div className="mt-6 border-4 border-frame-dark bg-muted p-1">
          <div
            className="h-4 bg-primary transition-all duration-200"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-3 text-center text-[9px] text-muted-foreground">
          LOADING {pct}%
        </p>
      </div>
    </div>
  );
}
