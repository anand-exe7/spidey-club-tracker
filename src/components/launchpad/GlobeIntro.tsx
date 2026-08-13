import { useEffect, useMemo, useRef, useState } from "react";
import { geoGraticule, geoOrthographic, geoPath, type GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldTopo from "world-atlas/countries-110m.json";

// Chennai, India (CodeKrafters HQ)
const CHENNAI: [number, number] = [80.2707, 13.0827];
// India centroid for the intermediate zoom step
const INDIA: [number, number] = [78.9, 20.6];

type Phase = {
  label: string;
  dur: number;
  lon: number;
  lat: number;
  scale: number;
  spin?: boolean;
};

const PHASES: Phase[] = [
  { label: "SCANNING GLOBE…", dur: 2600, lon: 0, lat: -20, scale: 1, spin: true },
  { label: "LOCATING INDIA", dur: 2200, lon: INDIA[0], lat: INDIA[1], scale: 1.8 },
  { label: "LOCKING CHENNAI", dur: 2200, lon: CHENNAI[0], lat: CHENNAI[1], scale: 3.2 },
  { label: "NODE FOUND", dur: 2000, lon: CHENNAI[0], lat: CHENNAI[1], scale: 3.2 },
];

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export function GlobeIntro({ onDone }: { onDone: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const sphereRef = useRef<SVGPathElement>(null);
  const graticuleRef = useRef<SVGPathElement>(null);
  const countriesRef = useRef<(SVGPathElement | null)[]>([]);
  const markerRef = useRef<HTMLDivElement>(null);
  const markerPinRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [phaseIdx, setPhaseIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const audio = new Audio("/ck.mp3");
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [leaving]);

  const countries = useMemo(() => {
    const topo = worldTopo as unknown as Topology;
    const fc = feature(topo, topo.objects["countries"] as unknown as GeometryCollection);
    return fc.features;
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    let width = wrap.clientWidth;
    let height = wrap.clientHeight;
    let cx = width / 2;
    let cy = height / 2;
    let baseScale = Math.min(width, height) * 0.42;

    const proj: GeoProjection = geoOrthographic()
      .rotate([0, -20])
      .scale(baseScale)
      .translate([cx, cy]);
    const pathGen = geoPath(proj);
    const graticule = geoGraticule().step([15, 15]);

    let lon = 0;
    let lat = -20;
    let phase = 0;
    let phaseStart = performance.now();
    let done = false;
    let idle = 0;

    const draw = () => {
      if (sphereRef.current) sphereRef.current.setAttribute("d", pathGen({ type: "Sphere" }) ?? "");
      if (graticuleRef.current) graticuleRef.current.setAttribute("d", pathGen(graticule()) ?? "");
      countriesRef.current.forEach((el, i) => {
        if (el) el.setAttribute("d", pathGen(countries[i] as never) ?? "");
      });
    };

    const placeMarker = () => {
      const pos = proj(CHENNAI);
      if (!pos) return;
      const [x, y] = pos;
      if (markerRef.current) {
        markerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (markerPinRef.current) {
        markerPinRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    let raf = 0;
    const loop = (now: number) => {
      if (!started) {
        // Idle spin before the user taps to enter
        idle += 0.5;
        lon = idle % 360;
        proj.rotate([-lon, -lat]).scale(baseScale).translate([cx, cy]);
        draw();
        raf = requestAnimationFrame(loop);
        return;
      }

      const target = PHASES[phase];
      if (!target) return;
      const t = now - phaseStart;

      if (target.spin) {
        lon = (t / target.dur) * 360;
        lat += (target.lat - lat) * 0.02;
      } else {
        const progress = easeInOut(Math.min(1, t / 1000));
        lon += (target.lon - lon) * progress;
        lat += (target.lat - lat) * progress;
      }

      proj
        .rotate([-lon, -lat])
        .scale(baseScale * target.scale)
        .translate([cx, cy]);
      draw();
      placeMarker();

      if (t >= target.dur && !done) {
        if (phase < PHASES.length - 1) {
          phase += 1;
          phaseStart = now;
          setPhaseIdx(phase);
          if (phase === PHASES.length - 1) setMarkerVisible(true);
        } else {
          done = true;
          setLeaving(true);
          window.setTimeout(onDone, 520);
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    const onResize = () => {
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      cx = width / 2;
      cy = height / 2;
      baseScale = Math.min(width, height) * 0.42;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [countries, onDone, started]);

  const handleStart = () => {
    audioRef.current?.play().catch(() => {});
    setStarted(true);
  };

  const handleSkip = () => {
    if (leaving) return;
    setMarkerVisible(true);
    setLeaving(true);
    window.setTimeout(onDone, 550);
  };

  const active = PHASES[phaseIdx];

  return (
    <div
      ref={wrapRef}
      onClick={started ? handleSkip : handleStart}
      className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-screen screen-scan transition-opacity duration-500 ${
        leaving ? "opacity-0" : entered ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg ref={svgRef} className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          ref={sphereRef}
          className="fill-[#181818] stroke-primary"
          strokeWidth={2}
          shapeRendering="crispEdges"
        />
        <path
          ref={graticuleRef}
          className="fill-none stroke-accent/30"
          strokeWidth={0.5}
          shapeRendering="crispEdges"
        />
        {countries.map((_: GeoJSON.Feature, i: number) => (
          <path
            key={i}
            ref={(el) => {
              countriesRef.current[i] = el;
            }}
            className="fill-muted/20 stroke-primary/60"
            strokeWidth={0.6}
            shapeRendering="crispEdges"
          />
        ))}
      </svg>

      {/* Locating Marker at Chennai */}
      <div
        ref={markerRef}
        className={`absolute left-0 top-0 z-10 transition-opacity duration-500 ${markerVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="-translate-x-1/2 -translate-y-full">
          <div className="mx-auto -mb-1 h-10 w-10 rounded-full border-2 border-frame-light bg-card p-1 shadow-lg">
            <img
              src="/ck.png"
              alt="CodeKrafters"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
          <div className="mx-auto h-8 w-[2px] bg-primary" />
        </div>
      </div>

      {/* Ping pulse at the pin point */}
      <div
        ref={markerPinRef}
        className={`absolute left-0 top-0 z-10 transition-opacity duration-500 ${markerVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inline-flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative block h-3 w-3 rounded-full border-2 border-frame-light bg-primary shadow-lg" />
        </div>
      </div>

      {/* Status Readout */}
      <div className="absolute top-[18%] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-4">
        {started ? (
          <>
            <p className="text-[10px] tracking-[0.5em] text-accent text-glow uppercase">
              {active?.label ?? ""}
            </p>
            <p className="text-[8px] tracking-widest text-muted-foreground uppercase">
              CLICK TO SKIP
            </p>
          </>
        ) : (
          <>
            <p className="text-[10px] tracking-[0.5em] text-accent text-glow uppercase">
              CODEKRAFTERS
            </p>
            <p className="border-4 border-frame-light bg-primary px-6 py-3 text-[9px] font-bold text-primary-foreground uppercase [animation:blink_1s_steps(1)_infinite]">
              🔊 TAP TO ENTER
            </p>
          </>
        )}
      </div>
    </div>
  );
}
