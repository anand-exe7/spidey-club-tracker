type Props = { size?: number; className?: string };

/** Pixel-art style hanging Spider-hero built from blocks (no external assets). */
export function PixelSpider({ size = 48, className = "" }: Props) {
  const px = (n: number) => (n * size) / 16;
  const b = (
    x: number,
    y: number,
    w: number,
    h: number,
    fill: string,
    key: string,
  ) => (
    <rect key={key} x={px(x)} y={px(y)} width={px(w)} height={px(h)} fill={fill} />
  );

  const RED = "var(--web-red)";
  const BLUE = "var(--web-blue)";
  const DARK = "var(--frame-dark)";
  const WHITE = "var(--foreground)";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {[
        // arms reaching up (holding web)
        b(6, 0, 1, 4, RED, "arm-l"),
        b(9, 0, 1, 4, RED, "arm-r"),
        // head
        b(5, 3, 6, 4, RED, "head"),
        b(6, 4, 2, 2, WHITE, "eye-l"),
        b(8, 4, 2, 2, WHITE, "eye-r"),
        b(7, 5, 1, 1, DARK, "eyeline"),
        // torso
        b(5, 7, 6, 4, RED, "torso"),
        b(7, 7, 2, 4, BLUE, "chest"),
        b(4, 7, 1, 3, RED, "shoulder-l"),
        b(11, 7, 1, 3, RED, "shoulder-r"),
        // legs
        b(5, 11, 2, 4, BLUE, "leg-l"),
        b(9, 11, 2, 4, BLUE, "leg-r"),
        b(4, 14, 2, 1, RED, "foot-l"),
        b(10, 14, 2, 1, RED, "foot-r"),
      ]}
    </svg>
  );
}
