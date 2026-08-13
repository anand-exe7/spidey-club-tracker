import { useState } from "react";
import { PixelSpider, SpideySuit, EyeExpression, SpideyPose } from "./PixelSpider";
import { playThwipSound, playSwingSound, playSpiderSenseSound } from "@/lib/spideyAudio";

export function SpideyMaskShowcase() {
  const [suit, setSuit] = useState<SpideySuit>("classic");
  const [expression, setExpression] = useState<EyeExpression>("normal");
  const [pose, setPose] = useState<SpideyPose>("mask");
  const [isSwinging, setIsSwinging] = useState(false);
  const [activeQuip, setActiveQuip] = useState<string | null>("CODEKRAFTERS SUIT LAB!");

  const suits: { id: SpideySuit; name: string; badge: string; color: string }[] = [
    { id: "classic", name: "CLASSIC RED & BLUE", badge: "ORIGINAL", color: "bg-[#FA7604]" },
    { id: "symbiote", name: "SYMBIOTE BLACK SUIT", badge: "ALIEN VENOM", color: "bg-black" },
    { id: "iron", name: "IRON SPIDER ARMOR", badge: "STARK TECH", color: "bg-[#F97316]" },
    { id: "miles", name: "MILES MORALES SUIT", badge: "BROOKLYN", color: "bg-[#B4530A]" },
  ];

  const expressions: { id: EyeExpression; label: string }[] = [
    { id: "normal", label: "NORMAL LENS" },
    { id: "squint", label: "SQUINT / AIM" },
    { id: "wide", label: "WIDE SHOCK" },
  ];

  const poses: { id: SpideyPose; label: string }[] = [
    { id: "mask", label: "MASK FOCUS" },
    { id: "hanging", label: "HANGING" },
    { id: "swinging", label: "SWINGING" },
    { id: "thwip", label: "THWIP!" },
  ];

  const triggerThwip = () => {
    playThwipSound();
    setActiveQuip("THWIP! CODE WEBBED!");
    setPose("thwip");
    window.setTimeout(() => setPose("mask"), 1000);
  };

  const triggerSwing = () => {
    setIsSwinging(true);
    playSwingSound();
    setPose("swinging");
    setExpression("squint");
    setActiveQuip("MAXIMUM CODEKRAFTER SPEED!");
    window.setTimeout(() => {
      setIsSwinging(false);
      setPose("mask");
      setExpression("normal");
    }, 1200);
  };

  const triggerSense = () => {
    playSpiderSenseSound();
    setExpression("wide");
    setActiveQuip("⚡ CODING-SENSE TINGLING! ⚡");
    window.setTimeout(() => setExpression("normal"), 1500);
  };

  return (
    <div className="my-10 border-4 border-frame bg-screen p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-frame-dark pb-4">
        <div>
          <span className="text-[8px] tracking-[0.3em] text-accent">INTERACTIVE LAB</span>
          <h3 className="mt-1 text-lg text-foreground sm:text-2xl text-glow">
            SPIDER-MAN MASK & SUIT HUD
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={triggerThwip}
            className="border-2 border-frame-light bg-primary px-3 py-2 text-[8px] text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            ⚡ THWIP CODE!
          </button>
          <button
            onClick={triggerSwing}
            className="border-2 border-frame-light bg-secondary px-3 py-2 text-[8px] text-secondary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            🕸️ SWING CODEX!
          </button>
          <button
            onClick={triggerSense}
            className="border-2 border-frame-dark bg-web-yellow px-3 py-2 text-[8px] text-background transition-transform hover:scale-105 active:scale-95"
          >
            ⚡ CODE-SENSE!
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Left Column: Interactive Spidey Display */}
        <div className="flex flex-col items-center justify-center border-4 border-frame-dark bg-card p-6 text-center">
          <div
            className={`relative transition-all duration-500 origin-center ${
              isSwinging ? "animate-bounce scale-110 rotate-12" : ""
            }`}
          >
            {/* Hanging Wire if hanging/mask */}
            {(pose === "mask" || pose === "hanging") && (
              <div className="mx-auto h-8 w-[2px] bg-foreground/60" />
            )}
            <PixelSpider
              size={120}
              suit={suit}
              pose={pose}
              expression={expression}
              isSquinting={isSwinging}
              interactive
              onThwip={triggerThwip}
            />
          </div>

          {activeQuip && (
            <div className="mt-6 border-2 border-frame-dark bg-web-yellow px-3 py-1.5 text-[8px] font-bold text-background shadow">
              {activeQuip}
            </div>
          )}

          <p className="mt-4 text-[7px] tracking-widest text-muted-foreground">
            CLICK SPIDEY TO THWIP CODE
          </p>
        </div>

        {/* Right Column: Controls */}
        <div className="space-y-6">
          {/* Suit Selection */}
          <div>
            <p className="text-[8px] tracking-widest text-accent uppercase mb-3">
              1. SELECT SPIDEY SUIT
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {suits.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSuit(s.id);
                    playThwipSound();
                    setActiveQuip(`EQUIPPED ${s.name} • CK SUIT`);
                  }}
                  className={`flex items-center justify-between border-4 px-3 py-3 text-left transition-all ${
                    suit === s.id
                      ? "border-primary bg-primary text-primary-foreground scale-[1.02]"
                      : "border-frame-dark bg-screen text-foreground hover:bg-card"
                  }`}
                >
                  <span className="text-[9px] font-bold">{s.name}</span>
                  <span className="border border-frame-dark bg-background px-1.5 py-0.5 text-[7px] text-accent">
                    {s.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mask Lens Expression Selection */}
          <div>
            <p className="text-[8px] tracking-widest text-accent uppercase mb-3">
              2. MASK LENS EXPRESSION
            </p>
            <div className="flex flex-wrap gap-2">
              {expressions.map((e) => (
                <button
                  key={e.id}
                  onClick={() => {
                    setExpression(e.id);
                    playThwipSound();
                  }}
                  className={`border-4 px-3 py-2 text-[8px] transition-all ${
                    expression === e.id
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-frame-dark bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pose Selector */}
          <div>
            <p className="text-[8px] tracking-widest text-accent uppercase mb-3">
              3. SPIDER POSE & ACTION
            </p>
            <div className="flex flex-wrap gap-2">
              {poses.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPose(p.id);
                    playThwipSound();
                  }}
                  className={`border-4 px-3 py-2 text-[8px] transition-all ${
                    pose === p.id
                      ? "border-frame-light bg-card text-foreground"
                      : "border-frame-dark bg-screen text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
