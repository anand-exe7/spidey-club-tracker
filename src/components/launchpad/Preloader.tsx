import { useEffect, useState } from "react";
import { BOOT_LINES } from "./data";
import { PixelSpider } from "./PixelSpider";

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
        window.setTimeout(onDone, 1000);
      }
    }, 190);
    return () => window.clearInterval(id);
  }, [onDone]);

  const pct = Math.round((lines.length / BOOT_LINES.length) * 100);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-screen screen-scan px-6 transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* swinging hero across the boot screen */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 [animation:swing_2.6s_ease-in-out_infinite] origin-top"
      >
        <div className="mx-auto h-[14vh] w-[2px] bg-foreground/50 sm:h-[22vh]" />
        <PixelSpider
          size={56}
          suit="classic"
          pose="hanging"
          expression="squint"
          className="mx-auto sm:hidden"
        />
        <PixelSpider
          size={72}
          suit="classic"
          pose="hanging"
          expression="squint"
          className="mx-auto hidden sm:block"
        />
      </div>

      <div className="mt-[18vh] w-full max-w-2xl px-2 sm:mt-[26vh] sm:px-0">
        <div className="h-40 overflow-hidden text-[8px] leading-5 text-accent sm:h-56 sm:text-[10px]">
          {lines.map((l) => (
            <p key={l} className="text-glow break-words">
              &gt; {l}
            </p>
          ))}
          <span className="inline-block h-3 w-2 bg-accent align-middle [animation:blink_1s_steps(1)_infinite]" />
        </div>
        <div className="mt-4 border-4 border-frame-dark bg-muted p-1 sm:mt-6">
          <div
            className="h-3 bg-primary transition-all duration-200 sm:h-4"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-3 text-center text-[9px] text-muted-foreground">LOADING {pct}%</p>
      </div>
    </div>
  );
}
