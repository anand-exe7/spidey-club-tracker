import { useEffect, useState, useRef } from "react";
import { PixelSpider, SpideySuit, EyeExpression, SpideyPose } from "./PixelSpider";
import { playThwipSound, playSwingSound } from "@/lib/spideyAudio";

const SUITS: SpideySuit[] = ["classic", "symbiote", "iron", "miles"];

/**
 * Interactive Spider-Man Component:
 * - Smoothly follows the mouse cursor across the screen.
 * - Straight vertical web rope line.
 * - Gentle idle up-and-down bobbing.
 * - Dynamic swing pose and tilt based on movement velocity.
 */
export function SpiderScroll() {
  const [mousePos, setMousePos] = useState({ x: 400, y: 250 });
  const [spideyPos, setSpideyPos] = useState({ x: 400, y: 250 });

  const [suitIndex, setSuitIndex] = useState(0);
  const [expression, setExpression] = useState<EyeExpression>("normal");
  const [pose, setPose] = useState<SpideyPose>("hanging");
  const [quip, setQuip] = useState<string | null>(null);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [holdSide, setHoldSide] = useState<"left" | "right">("right");

  const lastSoundTime = useRef<number>(0);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setMousePos({ x: t.clientX, y: t.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Animation Physics Loop: Follow Mouse Cursor Smoothly
  useEffect(() => {
    let animId: number;

    const loop = () => {
      setSpideyPos((prev) => {
        // Smooth up-and-down vertical idle bobbing
        const idleBobY = Math.sin(Date.now() / 450) * 12;

        // Target coordinates based on mouse position
        let targetX = mousePos.x;
        let targetY = mousePos.y + idleBobY;

        // Keep inside screen padding
        const padding = 70;
        targetX = Math.max(padding, Math.min(window.innerWidth - padding, targetX));
        targetY = Math.max(90, Math.min(window.innerHeight - 120, targetY));

        // Smooth delayed lerp (takes time to glide over to mouse position)
        const lerpFactor = 0.045;
        const nextX = prev.x + (targetX - prev.x) * lerpFactor;
        const nextY = prev.y + (targetY - prev.y) * lerpFactor;

        // Calculate speed & movement velocity
        const vx = nextX - prev.x;
        const vy = nextY - prev.y;
        const speed = Math.sqrt(vx * vx + vy * vy);

        // Update pose and sound based on movement speed
        if (speed > 1.2) {
          setPose((currentPose) => (currentPose === "thwip" ? "thwip" : "swinging"));
          setExpression("squint");

          const now = Date.now();
          if (speed > 2.5 && now - lastSoundTime.current > 900) {
            playSwingSound();
            lastSoundTime.current = now;
          }
        } else {
          setPose((currentPose) => (currentPose === "thwip" ? "thwip" : "hanging"));
          setExpression("normal");
        }

        // Body tilt in direction of movement
        const targetTilt = Math.max(-25, Math.min(25, vx * 4.5));
        setTiltAngle((currentTilt) => currentTilt + (targetTilt - currentTilt) * 0.08);

        // Swap which hand holds the CK logo based on travel direction
        if (vx > 0.3) setHoldSide("right");
        else if (vx < -0.3) setHoldSide("left");

        return { x: nextX, y: nextY };
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [mousePos]);

  // Click Spidey to swap suit
  const handleSpideyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSuitIndex((prev) => (prev + 1) % SUITS.length);
    playThwipSound();
    setPose("thwip");
    setExpression("wide");
    setQuip(`SUIT SWAPPED • CODEKRAFTERS 🕷️`);

    window.setTimeout(() => {
      setPose("hanging");
      setExpression("normal");
      setQuip(null);
    }, 900);
  };

  const activeSuit = SUITS[suitIndex]!;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* SVG Canvas for STRAIGHT Web Line ONLY */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        {/* Anchor point at top */}
        <circle cx={spideyPos.x} cy={6} r="4" fill="var(--primary)" />

        {/* Straight main web line */}
        <line
          x1={spideyPos.x}
          y1={0}
          x2={spideyPos.x}
          y2={spideyPos.y - 28}
          stroke="var(--foreground)"
          strokeWidth="2.5"
          strokeOpacity="0.75"
        />

        {/* Inner thin white web strand highlight */}
        <line
          x1={spideyPos.x + 1}
          y1={0}
          x2={spideyPos.x + 1}
          y2={spideyPos.y - 28}
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="6 3"
        />
      </svg>

      {/* Spider-Man Character */}
      <div
        className="pointer-events-auto absolute transition-transform duration-100 ease-out"
        style={{
          left: `${spideyPos.x - 34}px`,
          top: `${spideyPos.y - 34}px`,
          transform: `rotate(${tiltAngle}deg)`,
          transformOrigin: "top center",
        }}
      >
        {/* Spidey Character */}
        <div className="relative group cursor-pointer" onClick={handleSpideyClick}>
          <PixelSpider
            size={68}
            suit={activeSuit}
            pose={pose}
            expression={expression}
            interactive
          />

          {/* CK Logo held by Spidey */}
          <img
            src="/ck.svg"
            alt="CodeKrafters"
            draggable={false}
            className="absolute h-[26px] w-[26px] pointer-events-none select-none"
            style={{
              left: holdSide === "right" ? "46px" : "-4px",
              top: "22px",
            }}
          />

          {/* Tooltip */}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded border border-frame-dark bg-card px-2 py-0.5 text-[7px] text-primary uppercase">
            CLICK TO SWAP CODEX SUIT
          </span>
        </div>

        {/* Speech Quip */}
        {quip && (
          <div className="absolute left-1/2 top-full mt-2 max-w-[80vw] -translate-x-1/2 border-4 border-frame-dark bg-web-yellow px-3 py-1 text-center text-[8px] font-bold text-background shadow animate-drop-in">
            {quip}
          </div>
        )}
      </div>
    </div>
  );
}
