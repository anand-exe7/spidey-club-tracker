import { useEffect, useState } from "react";
import { PixelSpider } from "./PixelSpider";

const QUIPS = ["THWIP!", "WHAM!", "ZIP!", "SWOOSH!"];

/**
 * A pixel hero that hangs from a web line, follows the scroll position and
 * every few seconds swings across to the other side of the viewport.
 */
export function SpiderScroll() {
  const [progress, setProgress] = useState(0);
  const [side, setSide] = useState<"left" | "right">("right");
  const [swinging, setSwinging] = useState(false);
  const [quip, setQuip] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSwinging(true);
      setQuip(QUIPS[Math.floor(Math.random() * QUIPS.length)]!);
      setSide((s) => (s === "right" ? "left" : "right"));
      window.setTimeout(() => setSwinging(false), 1400);
      window.setTimeout(() => setQuip(null), 1600);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  // vertical anchor of the web line inside the viewport
  const top = 12 + progress * 55; // percent

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden overflow-hidden md:block">
      <div
        className="absolute transition-all duration-[1400ms] ease-in-out"
        style={{
          top: `${top}%`,
          [side === "right" ? "right" : "left"]: "3.5rem",
          transform: `rotate(${swinging ? (side === "right" ? 16 : -16) : 0}deg)`,
          transformOrigin: "top center",
        }}
      >
        {/* web line up to the top of the screen */}
        <div
          className="absolute bottom-full left-1/2 w-[2px] -translate-x-1/2 bg-foreground/60"
          style={{ height: "100vh" }}
        />
        <div className="relative [animation:swing_3.4s_ease-in-out_infinite] origin-top">
          <PixelSpider size={56} />
        </div>
        {quip && (
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap border-4 border-frame-dark bg-web-yellow px-2 py-1 text-[8px] text-background">
            {quip}
          </span>
        )}
      </div>
    </div>
  );
}
