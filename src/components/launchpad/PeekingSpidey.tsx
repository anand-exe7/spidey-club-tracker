import { useState, useEffect, useCallback } from "react";
import { playThwipSound } from "@/lib/spideyAudio";

const QUOTES = [
  "My Spidey-Sense is tingling...",
  "Did someone say web development?",
  "With great commits comes great responsibility.",
  "Just hanging out on the DOM...",
  "Whoops, wrong node!",
  "Is this the multiverse of madness?",
  "Thwip! Deploying webs...",
  "Anyone seen my other suit?"
];

type Side = "left" | "right" | "bottom";

export function PeekingSpidey() {
  const [isVisible, setIsVisible] = useState(false);
  const [side, setSide] = useState<Side>("left");
  const [quote, setQuote] = useState("");

  const triggerPeek = useCallback(() => {
    // Pick random quote and side
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    const sides: Side[] = ["left", "right", "bottom"];
    setSide(sides[Math.floor(Math.random() * sides.length)]);
    
    // Show
    setIsVisible(true);
    // Add a slight delay before sound so it matches the visual pop
    setTimeout(() => playThwipSound(), 200);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const loop = () => {
      // Random delay between 15s and 30s
      const delay = Math.floor(Math.random() * 15000) + 15000;
      timeoutId = setTimeout(() => {
        triggerPeek();
        loop(); // schedule next
      }, delay);
    };

    // Initial delay shorter so user sees it quickly (e.g. 5 seconds)
    timeoutId = setTimeout(() => {
      triggerPeek();
      loop();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [triggerPeek]);

  // Determine styles based on side
  const getContainerStyles = () => {
    const base = "fixed z-50 flex items-center gap-2 sm:gap-4 transition-transform duration-[600ms] ease-out pointer-events-none";
    if (side === "left") {
      return `${base} left-0 top-1/3 -translate-y-1/2 ${isVisible ? "translate-x-4" : "-translate-x-[120%]"}`;
    }
    if (side === "right") {
      return `${base} right-0 top-2/3 -translate-y-1/2 flex-row-reverse ${isVisible ? "-translate-x-4" : "translate-x-[120%]"}`;
    }
    if (side === "bottom") {
      return `${base} bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse ${isVisible ? "-translate-y-4" : "translate-y-[120%]"}`;
    }
    return base;
  };

  // Determine image source based on side
  const getImageSource = () => {
    if (side === "left") return "/left-removebg-preview.png";
    if (side === "right") return "/right-removebg-preview.png";
    return "/top_ornament.png";
  };

  return (
    <div className={getContainerStyles()}>
      <img 
        src={getImageSource()} 
        alt="Peeking Spidey" 
        className="w-16 h-auto sm:w-28 drop-shadow-2xl cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
        style={side === "bottom" ? { filter: "hue-rotate(55deg) saturate(1.5)" } : undefined}
        draggable={false}
        onClick={() => {
            playThwipSound();
            setIsVisible(false);
        }}
      />
      <div className="border-2 sm:border-4 border-frame-dark bg-card p-2 sm:p-4 shadow-xl max-w-[140px] sm:max-w-[240px] pointer-events-auto">
        <p className="text-[9px] sm:text-[11px] font-bold text-foreground leading-tight sm:leading-5">{quote}</p>
      </div>
    </div>
  );
}
