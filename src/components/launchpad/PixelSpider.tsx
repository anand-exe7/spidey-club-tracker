import React from "react";

export type SpideySuit = "classic" | "symbiote" | "iron" | "miles";
export type SpideyPose = "hanging" | "swinging" | "thwip" | "mask";
export type EyeExpression = "normal" | "squint" | "wide" | "wink";

type Props = {
  size?: number;
  className?: string;
  suit?: SpideySuit;
  pose?: SpideyPose;
  expression?: EyeExpression;
  isSquinting?: boolean;
  interactive?: boolean;
  onThwip?: () => void;
};

// Color palettes for different Spider-Man suits
const SUIT_THEMES: Record<
  SpideySuit,
  {
    red: string;
    redDark: string;
    redHighlight: string;
    blue: string;
    blueDark: string;
    lensBorder: string;
    lensFill: string;
    lensGlow: string;
    webLine: string;
    emblem: string;
    gold?: string;
  }
> = {
  classic: {
    red: "#EF4444",
    redDark: "#B91C1C",
    redHighlight: "#FCA5A5",
    blue: "#2563EB",
    blueDark: "#1E3A8A",
    lensBorder: "#090D16",
    lensFill: "#FFFFFF",
    lensGlow: "#38BDF8",
    webLine: "#1E1E1E",
    emblem: "#0F172A",
  },
  symbiote: {
    red: "#1E293B",
    redDark: "#0F172A",
    redHighlight: "#475569",
    blue: "#020617",
    blueDark: "#000000",
    lensBorder: "#0F172A",
    lensFill: "#F8FAFC",
    lensGlow: "#E2E8F0",
    webLine: "#334155",
    emblem: "#FFFFFF",
  },
  iron: {
    red: "#DC2626",
    redDark: "#991B1B",
    redHighlight: "#F87171",
    blue: "#D97706", // Gold primary sub
    blueDark: "#92400E",
    lensBorder: "#451A03",
    lensFill: "#38BDF8",
    lensGlow: "#0EA5E9",
    webLine: "#78350F",
    emblem: "#F59E0B",
    gold: "#F59E0B",
  },
  miles: {
    red: "#0F172A",
    redDark: "#020617",
    redHighlight: "#334155",
    blue: "#DC2626", // Red accent suit trim
    blueDark: "#991B1B",
    lensBorder: "#000000",
    lensFill: "#FFFFFF",
    lensGlow: "#EF4444",
    webLine: "#E11D48",
    emblem: "#E11D48",
  },
};

/**
 * High-Fidelity Pixel Spider-Man Component with Detailed Mask, Dynamic Suits,
 * Spider Webbing Grid, Angled Expressive Eye Lenses & Swing Mechanics.
 */
export function PixelSpider({
  size = 64,
  className = "",
  suit = "classic",
  pose = "hanging",
  expression = "normal",
  isSquinting = false,
  interactive = false,
  onThwip,
}: Props) {
  const theme = SUIT_THEMES[suit] || SUIT_THEMES.classic;
  const activeExpression = isSquinting ? "squint" : expression;

  // Grid renderer helper for 32x32 pixel coordinate grid
  const gridScale = size / 32;
  const px = (val: number) => val * gridScale;

  const rect = (
    x: number,
    y: number,
    w: number,
    h: number,
    fill: string,
    key: string,
    opacity: number = 1
  ) => (
    <rect
      key={key}
      x={px(x)}
      y={px(y)}
      width={px(w)}
      height={px(h)}
      fill={fill}
      opacity={opacity}
      shapeRendering="crispEdges"
    />
  );

  const path = (d: string, fill: string, key: string, stroke?: string, strokeW?: number) => (
    <path
      key={key}
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeW ? strokeW * gridScale : undefined}
      shapeRendering="geometricPrecision"
    />
  );

  // Dynamic Eye Lens height & squint transforms based on expression
  const getEyeLenses = () => {
    // Eye geometry coordinates inside 32x32 space
    if (activeExpression === "squint") {
      return (
        <g id="eyes-squint">
          {/* Left Eye Lens (Squinting/Aggressive Angle) */}
          <polygon
            points={`${px(8)},${px(10)} ${px(14)},${px(12)} ${px(13)},${px(14)} ${px(9)},${px(13)}`}
            fill={theme.lensBorder}
          />
          <polygon
            points={`${px(9)},${px(11)} ${px(13)},${px(12.2)} ${px(12.4)},${px(13.4)} ${px(9.5)},${px(12.7)}`}
            fill={theme.lensFill}
          />
          {/* Right Eye Lens */}
          <polygon
            points={`${px(24)},${px(10)} ${px(18)},${px(12)} ${px(19)},${px(14)} ${px(23)},${px(13)}`}
            fill={theme.lensBorder}
          />
          <polygon
            points={`${px(23)},${px(11)} ${px(19)},${px(12.2)} ${px(19.6)},${px(13.4)} ${px(22.5)},${px(12.7)}`}
            fill={theme.lensFill}
          />
        </g>
      );
    }

    if (activeExpression === "wide") {
      return (
        <g id="eyes-wide">
          {/* Left Eye Lens (Wide Shocked Spidey Eyes) */}
          <polygon
            points={`${px(7)},${px(8)} ${px(15)},${px(11)} ${px(14)},${px(17)} ${px(8)},${px(15)}`}
            fill={theme.lensBorder}
          />
          <polygon
            points={`${px(8.5)},${px(9.5)} ${px(14)},${px(11.8)} ${px(13.2)},${px(15.8)} ${px(9.2)},${px(14.2)}`}
            fill={theme.lensFill}
          />
          {/* Right Eye Lens */}
          <polygon
            points={`${px(25)},${px(8)} ${px(17)},${px(11)} ${px(18)},${px(17)} ${px(24)},${px(15)}`}
            fill={theme.lensBorder}
          />
          <polygon
            points={`${px(23.5)},${px(9.5)} ${px(18)},${px(11.8)} ${px(18.8)},${px(15.8)} ${px(22.8)},${px(14.2)}`}
            fill={theme.lensFill}
          />
        </g>
      );
    }

    // Default Expressive Classic Curved/Angular Eye Lenses
    return (
      <g id="eyes-classic">
        {/* Left Lens Outer Border */}
        <polygon
          points={`${px(7.5)},${px(9)} ${px(14.5)},${px(11.5)} ${px(13.5)},${px(16)} ${px(8.5)},${px(14)}`}
          fill={theme.lensBorder}
        />
        {/* Left Lens Inner White Glowing Core */}
        <polygon
          points={`${px(9)},${px(10.2)} ${px(13.5)},${px(12.1)} ${px(12.7)},${px(14.8)} ${px(9.7)},${px(13.3)}`}
          fill={theme.lensFill}
        />
        {/* Left Lens Cyan Glow Highlight */}
        <polygon
          points={`${px(10)},${px(11)} ${px(13)},${px(12.3)} ${px(12.5)},${px(13.5)} ${px(10.3)},${px(12.5)}`}
          fill={theme.lensGlow}
          opacity={0.4}
        />

        {/* Right Lens Outer Border */}
        <polygon
          points={`${px(24.5)},${px(9)} ${px(17.5)},${px(11.5)} ${px(18.5)},${px(16)} ${px(23.5)},${px(14)}`}
          fill={theme.lensBorder}
        />
        {/* Right Lens Inner White Glowing Core */}
        <polygon
          points={`${px(23)},${px(10.2)} ${px(18.5)},${px(12.1)} ${px(19.3)},${px(14.8)} ${px(22.3)},${px(13.3)}`}
          fill={theme.lensFill}
        />
        {/* Right Lens Cyan Glow Highlight */}
        <polygon
          points={`${px(22)},${px(11)} ${px(19)},${px(12.3)} ${px(19.5)},${px(13.5)} ${px(21.7)},${px(12.5)}`}
          fill={theme.lensGlow}
          opacity={0.4}
        />
      </g>
    );
  };

  // Mask Web Grid lines (Web pattern across mask hood)
  const getMaskWebGrid = (headX: number, headY: number) => {
    if (suit === "symbiote") return null; // Venom symbiote suit has no webbing pattern
    const ox = headX;
    const oy = headY;

    return (
      <g id="mask-webbing" opacity={0.35}>
        {/* Vertical webbing lines */}
        <line x1={px(ox + 8)} y1={px(oy + 1)} x2={px(ox + 8)} y2={px(oy + 14)} stroke={theme.webLine} strokeWidth={px(0.7)} />
        <line x1={px(ox + 4)} y1={px(oy + 2)} x2={px(ox + 6)} y2={px(oy + 13)} stroke={theme.webLine} strokeWidth={px(0.7)} />
        <line x1={px(ox + 12)} y1={px(oy + 2)} x2={px(ox + 10)} y2={px(oy + 13)} stroke={theme.webLine} strokeWidth={px(0.7)} />
        {/* Horizontal spider web arcs */}
        <path d={`M ${px(ox + 2)} ${px(oy + 5)} Q ${px(ox + 8)} ${px(oy + 3)} ${px(ox + 14)} ${px(oy + 5)}`} fill="none" stroke={theme.webLine} strokeWidth={px(0.7)} />
        <path d={`M ${px(ox + 3)} ${px(oy + 8)} Q ${px(ox + 8)} ${px(oy + 6)} ${px(ox + 13)} ${px(oy + 8)}`} fill="none" stroke={theme.webLine} strokeWidth={px(0.7)} />
        <path d={`M ${px(ox + 4)} ${px(oy + 12)} Q ${px(ox + 8)} ${px(oy + 10)} ${px(ox + 12)} ${px(oy + 12)}`} fill="none" stroke={theme.webLine} strokeWidth={px(0.7)} />
      </g>
    );
  };

  // Spider Emblem on Chest
  const getSpiderEmblem = (cx: number, cy: number) => (
    <g id="spider-emblem">
      {/* Spider body core */}
      {rect(cx, cy, 2, 3, theme.emblem, "emb-body")}
      {rect(cx + 0.5, cy - 1, 1, 1, theme.emblem, "emb-head")}
      {/* Spider legs */}
      {rect(cx - 2, cy - 1, 2, 1, theme.emblem, "leg-tl")}
      {rect(cx + 2, cy - 1, 2, 1, theme.emblem, "leg-tr")}
      {rect(cx - 3, cy + 1, 3, 1, theme.emblem, "leg-ml")}
      {rect(cx + 2, cy + 1, 3, 1, theme.emblem, "leg-mr")}
      {rect(cx - 2, cy + 3, 2, 2, theme.emblem, "leg-bl")}
      {rect(cx + 2, cy + 3, 2, 2, theme.emblem, "leg-br")}
    </g>
  );

  // Render pose specific SVGs
  const renderContent = () => {
    // -------------------------------------------------------------
    // POSE: MASK CLOSE-UP (Ideal for HUD / Showcase / Avatars)
    // -------------------------------------------------------------
    if (pose === "mask") {
      return (
        <g id="spidey-mask-only">
          {/* Mask Base Outline Shadow */}
          {rect(7, 4, 18, 24, theme.redDark, "m-base-dark")}
          {/* Mask Main Red Shape */}
          {rect(8, 3, 16, 24, theme.red, "m-base")}
          {rect(9, 2, 14, 25, theme.red, "m-base-2")}
          {rect(10, 1, 12, 26, theme.red, "m-base-3")}
          {/* Top Forehead Highlight */}
          {rect(11, 2, 10, 2, theme.redHighlight, "m-highlight")}
          {/* Mask Web Pattern */}
          {getMaskWebGrid(8, 2)}
          {/* Eye Lenses */}
          {getEyeLenses()}
        </g>
      );
    }

    // -------------------------------------------------------------
    // POSE: SWINGING (Dynamic high-speed acrobat mid-air swing pose)
    // -------------------------------------------------------------
    if (pose === "swinging") {
      return (
        <g id="spidey-swinging-pose">
          {/* Web Shooter Line from front hand */}
          <line
            x1={px(28)}
            y1={px(2)}
            x2={px(20)}
            y2={px(10)}
            stroke="#FFFFFF"
            strokeWidth={px(1.5)}
            strokeDasharray={`${px(3)} ${px(1)}`}
          />

          {/* Extended Arm 1 (Web shooting hand) */}
          {rect(20, 9, 7, 2, theme.red, "arm-reach-1")}
          {rect(25, 7, 3, 3, theme.redHighlight, "glove-reach")}
          {rect(27, 6, 2, 2, "#FFFFFF", "web-shooter-spark")}

          {/* Head (Angled looking forward) */}
          {rect(14, 4, 9, 8, theme.red, "head-swing")}
          {rect(15, 3, 7, 10, theme.red, "head-swing-2")}
          {rect(17, 3, 4, 1, theme.redHighlight, "head-swing-hi")}
          {getMaskWebGrid(13, 3)}
          {getEyeLenses()}

          {/* Torso & Suit */}
          {rect(12, 12, 8, 8, theme.red, "torso-swing")}
          {rect(10, 14, 3, 6, theme.blue, "side-blue-l")}
          {rect(17, 14, 3, 6, theme.blue, "side-blue-r")}
          {getSpiderEmblem(15, 14)}

          {/* Arm 2 (Back stability arm) */}
          {rect(8, 11, 5, 2, theme.redDark, "arm-back")}

          {/* Dynamic Bent Swinging Legs */}
          {/* Front Leg extended back */}
          {rect(10, 20, 4, 6, theme.blue, "leg-front-1")}
          {rect(8, 25, 4, 5, theme.red, "boot-front")}

          {/* Back Leg tucked up in acrobatic leap */}
          {rect(16, 20, 5, 4, theme.blueDark, "leg-back-1")}
          {rect(20, 22, 5, 3, theme.redDark, "boot-back")}
        </g>
      );
    }

    // -------------------------------------------------------------
    // POSE: THWIP (Hand forward web blast stance)
    // -------------------------------------------------------------
    if (pose === "thwip") {
      return (
        <g id="spidey-thwip-pose">
          {/* Web Blast Effect Ring */}
          <circle cx={px(30)} cy={px(16)} r={px(3)} fill="none" stroke="#FFFFFF" strokeWidth={px(1)} />
          <line x1={px(22)} y1={px(16)} x2={px(31)} y2={px(16)} stroke="#FFFFFF" strokeWidth={px(1.5)} />

          {/* Front Hand Thwip Gesture */}
          {rect(18, 15, 6, 2, theme.red, "thwip-arm")}
          {rect(23, 14, 3, 4, theme.redHighlight, "thwip-hand")}

          {/* Head */}
          {rect(10, 5, 9, 8, theme.red, "thwip-head")}
          {rect(11, 4, 7, 10, theme.red, "thwip-head-2")}
          {getMaskWebGrid(9, 4)}
          {getEyeLenses()}

          {/* Torso & Suit */}
          {rect(9, 13, 8, 8, theme.red, "thwip-torso")}
          {rect(7, 14, 3, 6, theme.blue, "thwip-blue-l")}
          {rect(14, 14, 3, 6, theme.blue, "thwip-blue-r")}
          {getSpiderEmblem(12, 15)}

          {/* Crouch Legs */}
          {rect(7, 21, 5, 5, theme.blue, "thwip-leg-1")}
          {rect(13, 21, 5, 5, theme.blueDark, "thwip-leg-2")}
          {rect(6, 26, 5, 3, theme.red, "thwip-boot-1")}
          {rect(13, 26, 5, 3, theme.redDark, "thwip-boot-2")}
        </g>
      );
    }

    // -------------------------------------------------------------
    // POSE: HANGING (Default classic hanging Spidey on web line)
    // -------------------------------------------------------------
    return (
      <g id="spidey-hanging-pose">
        {/* Upper Web Line hands */}
        {rect(13, 0, 2, 4, theme.red, "arm-l-web")}
        {rect(17, 0, 2, 4, theme.red, "arm-r-web")}

        {/* Head */}
        {rect(11, 3, 10, 8, theme.red, "head-base")}
        {rect(12, 2, 8, 10, theme.red, "head-base-2")}
        {rect(13, 2, 6, 1, theme.redHighlight, "head-highlight")}
        {getMaskWebGrid(11, 2)}
        {getEyeLenses()}

        {/* Shoulders & Torso */}
        {rect(11, 12, 10, 8, theme.red, "torso-main")}
        {rect(9, 12, 2, 6, theme.red, "shoulder-l")}
        {rect(21, 12, 2, 6, theme.red, "shoulder-r")}
        {rect(11, 13, 3, 7, theme.blue, "chest-blue-l")}
        {rect(18, 13, 3, 7, theme.blue, "chest-blue-r")}
        {getSpiderEmblem(15, 14)}

        {/* Wrists & Web Shooters */}
        {rect(9, 18, 2, 1, "#FFFFFF", "webshooter-l")}
        {rect(21, 18, 2, 1, "#FFFFFF", "webshooter-r")}

        {/* Legs */}
        {rect(11, 20, 4, 7, theme.blue, "leg-l")}
        {rect(17, 20, 4, 7, theme.blue, "leg-r")}
        {rect(10, 27, 4, 3, theme.red, "boot-l")}
        {rect(18, 27, 4, 3, theme.red, "boot-r")}

        {/* Suit details highlight */}
        {theme.gold && rect(15, 12, 2, 1, theme.gold, "iron-trim-1")}
      </g>
    );
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`transition-transform duration-200 select-none ${
        interactive ? "cursor-pointer hover:scale-110 active:scale-95" : ""
      } ${className}`}
      onClick={() => {
        if (onThwip) onThwip();
      }}
      aria-label="Pixel Spider-Man Hero"
      role="img"
    >
      <defs>
        {/* Glow filter for lens eyes */}
        <filter id="lens-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {renderContent()}
    </svg>
  );
}
