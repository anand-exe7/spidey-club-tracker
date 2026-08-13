import { useState, useEffect } from "react";
import { playThwipSound, playSpiderSenseSound } from "@/lib/spideyAudio";
import { PixelSpider } from "./PixelSpider";

interface LogEntry {
  id: string;
  time: string;
  domain: string;
  msg: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: "1", time: "23:58:12", domain: "DEV", msg: "Pushed 14 new web-shooter module commits." },
  { id: "2", time: "23:59:04", domain: "WEB3", msg: "Verified club token smart contract on testnet." },
  { id: "3", time: "00:01:30", domain: "CREATIVE", msg: "Rendered high-detail Spider-Man pixel mask." },
  { id: "4", time: "00:03:15", domain: "CP", msg: "Solved 8 graph traversal problems in speed run." },
  { id: "5", time: "00:04:50", domain: "PR", msg: "CodeKrafters Launchpad 2026 registered 150+ builders." },
];

/**
 * Spidey Tracker Dashboard Module (Inspired by spideytracker.net):
 * Live club web telemetry, radar threat detector, real-time activity feed,
 * and interactive Spidey web metrics.
 */
export function SpideyTracker() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [radarAngle, setRadarAngle] = useState(0);
  const [thwipCount, setThwipCount] = useState(1420);
  const [threatLevel, setThreatLevel] = useState<"LOW" | "MODERATE" | "HIGH">("LOW");

  // Rotate radar sweeper
  useEffect(() => {
    const id = window.setInterval(() => {
      setRadarAngle((a) => (a + 6) % 360);
    }, 50);
    return () => window.clearInterval(id);
  }, []);

  // Periodically add live simulated club activity log
  useEffect(() => {
    const activityMsgs = [
      { domain: "DEV", msg: "Member #028 thwipped 4 syntax bugs in index.tsx." },
      { domain: "CONTENT", msg: "Published CodeKrafters tech blog: Web Slinger Tech Stack." },
      { domain: "MANAGEMENT", msg: "Scheduled Semester Loop Sprint 03 kickoff." },
      { domain: "CREATIVE", msg: "Generated dynamic neon web UI animations." },
    ];

    const id = window.setInterval(() => {
      const item = activityMsgs[Math.floor(Math.random() * activityMsgs.length)]!;
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0]!;

      setLogs((prev) => [
        { id: String(Date.now()), time: timeStr, domain: item.domain, msg: item.msg },
        ...prev.slice(0, 5),
      ]);
      setThwipCount((c) => c + 1);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  const handlePulseScan = () => {
    playSpiderSenseSound();
    playThwipSound();
    setThreatLevel((t) => (t === "LOW" ? "MODERATE" : t === "MODERATE" ? "HIGH" : "LOW"));
  };

  return (
    <div className="relative mt-16 mb-24 min-h-[800px] sm:min-h-[700px] w-full max-w-[1400px] mx-auto border-[6px] sm:border-[8px] border-frame-dark bg-screen overflow-hidden shadow-2xl">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--frame-dark) 1px, transparent 1px), linear-gradient(to bottom, var(--frame-dark) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--screen)_100%)] pointer-events-none" />

      {/* Top Center Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[4px] sm:-translate-y-[6px] z-10 flex items-center justify-center">
        <div className="flex items-center border-[4px] sm:border-[6px] border-frame-dark bg-card px-4 py-1.5 sm:py-2">
          <span className="text-[10px] sm:text-sm font-bold text-foreground mr-3">SPIDEY</span>
          <PixelSpider size={32} suit="classic" pose="mask" expression="normal" />
          <span className="text-[10px] sm:text-sm font-bold text-foreground ml-3">TRACKER</span>
        </div>
      </div>

      {/* Top Left Navigation Buttons */}
      <div className="absolute top-12 left-0 sm:left-4 z-10 flex flex-col gap-4 pointer-events-none sm:pointer-events-auto scale-90 sm:scale-100 origin-top-left">
        <div className="flex items-center group cursor-pointer pointer-events-auto">
          <div className="border-y-4 border-r-4 sm:border-4 border-frame-dark bg-card p-2 sm:p-3 hover:-translate-y-0.5 transition-transform">
            <PixelSpider size={20} suit="classic" pose="hanging" expression="squint" />
          </div>
          <span className="ml-3 text-[7px] sm:text-[9px] font-bold text-accent tracking-widest uppercase hidden md:block">
            NAVIGATION
          </span>
        </div>
        <div className="flex items-center group cursor-pointer pointer-events-auto">
          <div className="border-y-4 border-r-4 sm:border-4 border-frame-dark bg-card p-2 sm:p-3 hover:-translate-y-0.5 transition-transform">
            <PixelSpider size={20} suit="iron" pose="mask" expression="normal" />
          </div>
          <span className="ml-3 text-[7px] sm:text-[9px] font-bold text-accent tracking-widest uppercase hidden md:block">
            MAP FILTERS
          </span>
        </div>
      </div>

      {/* Top Right Message Center (Decorative) */}
      <div className="absolute top-12 right-4 z-10 hidden md:flex items-start justify-end gap-3 pointer-events-none">
        <span className="mt-2 text-[8px] font-bold text-muted-foreground tracking-widest uppercase text-right">
          MESSAGE<br/>CENTER
        </span>
        <div className="border-4 border-frame-dark bg-card p-3">
          <PixelSpider size={24} suit="symbiote" pose="mask" expression="wide" />
        </div>
      </div>

      {/* Bottom Right: Radar Scanner */}
      <div className="absolute bottom-16 sm:bottom-10 right-4 sm:right-10 z-10 flex flex-col items-end pointer-events-none scale-75 sm:scale-100 origin-bottom-right">
        {/* Interactive Radar Circle */}
        <div className="relative flex h-32 w-32 sm:h-48 sm:w-48 items-center justify-center rounded-full border-4 border-primary/40 bg-screen shadow-inner backdrop-blur-md">
          {/* Concentric rings */}
          <div className="absolute h-24 w-24 sm:h-36 sm:w-36 rounded-full border border-primary/30" />
          <div className="absolute h-16 w-16 sm:h-24 sm:w-24 rounded-full border border-primary/20" />
          <div className="absolute h-8 w-8 sm:h-12 sm:w-12 rounded-full border border-primary/20" />

          {/* Radar Sweeper Line */}
          <div
            className="absolute top-1/2 left-1/2 h-[64px] sm:h-[96px] w-[2px] origin-top bg-gradient-to-b from-primary to-transparent"
            style={{ transform: `rotate(${radarAngle}deg)` }}
          />

          {/* Radar Center Spidey Icon */}
          <PixelSpider size={24} suit="classic" pose="mask" expression="normal" />

          {/* Simulated Radar Node Pings */}
          <div className="absolute top-6 left-8 sm:top-8 sm:left-10 h-1.5 w-1.5 sm:h-2 sm:w-2 animate-ping rounded-full bg-web-yellow" />
          <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-8 h-1.5 w-1.5 sm:h-2 sm:w-2 animate-ping rounded-full bg-primary" />
        </div>
        <div className="mt-4 flex flex-col items-end gap-2 text-[7px] sm:text-[8px] font-bold text-accent tracking-widest uppercase">
          <span className="flex items-center gap-2">GLOBAL MAP ⊛</span>
          <span className="flex items-center gap-2 text-muted-foreground">CENTER MAP ◎</span>
        </div>
      </div>

      {/* Center Layout: Terminal and Stats */}
      <div className="absolute inset-0 flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 pt-32 sm:pt-6 z-0 pointer-events-none">
        <div className="text-center mb-6 sm:mb-8 pointer-events-auto">
          <h3 className="text-[9px] sm:text-xs font-bold text-web-yellow tracking-widest leading-relaxed max-w-[280px] sm:max-w-sm mx-auto uppercase">
            WELCOME! HERE'S A HANDY GUIDE TO HELP YOU NAVIGATE THE EXPERIENCE.
          </h3>
          <p className="mt-2 text-[8px] text-muted-foreground tracking-[0.2em] uppercase">
            THREAT LEVEL: <span className="text-primary">{threatLevel}</span>
          </p>
        </div>

        {/* Live Terminal & Stats */}
        <div className="w-full max-w-lg space-y-4 sm:space-y-6 pointer-events-auto">
          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="border-4 border-frame-dark bg-card p-2 sm:p-3 text-center">
              <p className="text-xs sm:text-lg text-primary text-glow font-bold">{thwipCount}</p>
              <p className="mt-1 text-[5px] sm:text-[7px] text-muted-foreground uppercase">THWIPS</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-2 sm:p-3 text-center">
              <p className="text-xs sm:text-lg text-accent text-glow font-bold">100%</p>
              <p className="mt-1 text-[5px] sm:text-[7px] text-muted-foreground uppercase">STABILITY</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-2 sm:p-3 text-center">
              <p className="text-xs sm:text-lg text-foreground text-glow font-bold">7</p>
              <p className="mt-1 text-[5px] sm:text-[7px] text-muted-foreground uppercase">NODES</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-2 sm:p-3 text-center">
              <p className="text-xs sm:text-lg text-web-yellow text-glow font-bold">42</p>
              <p className="mt-1 text-[5px] sm:text-[7px] text-muted-foreground uppercase">CREW</p>
            </div>
          </div>

          {/* Terminal */}
          <div className="border-4 border-frame-dark bg-screen/90 backdrop-blur p-4">
            <div className="flex items-center justify-between border-b-4 border-frame-dark pb-2 mb-3">
              <span className="text-[7px] sm:text-[8px] tracking-widest text-accent">/LIVE_TELEMETRY</span>
              <span className="text-[6px] sm:text-[7px] text-primary animate-pulse">● LIVE</span>
            </div>
            <div className="space-y-2.5 font-mono text-[7px] sm:text-[9px] leading-4 sm:leading-6">
              {logs.map((log) => (
                <div key={log.id} className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-1.5 sm:gap-2">
                  <span className="text-muted-foreground opacity-70">[{log.time}]</span>
                  <span className="border border-frame-dark bg-card px-1 py-0.5 text-[6px] sm:text-[7px] text-accent font-bold">
                    {log.domain}
                  </span>
                  <span className="text-foreground">{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Corner Spidey */}
      <div className="absolute bottom-[-4px] sm:bottom-[-8px] left-[-4px] sm:left-[-8px] z-20 pointer-events-none drop-shadow-2xl scale-75 sm:scale-100 origin-bottom-left">
        <PixelSpider size={64} suit="classic" pose="hanging" expression="normal" />
      </div>

      {/* Bottom Center Control Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[4px] sm:translate-y-[6px] z-20 flex items-center justify-center">
        <button
          onClick={handlePulseScan}
          className="flex items-center gap-3 sm:gap-6 border-[4px] sm:border-[6px] border-frame-dark bg-card px-4 sm:px-8 py-1.5 sm:py-2 text-[7px] sm:text-[10px] font-bold text-foreground tracking-widest uppercase hover:bg-muted transition-colors active:scale-95"
        >
          <span className="hidden sm:inline">PULSE SCAN</span>
          <span className="hidden sm:inline text-primary opacity-50">▪</span>
          <span>TAP TO SCAN</span>
          <span className="hidden sm:inline text-primary opacity-50">▪</span>
          <span className="hidden sm:inline">PULSE SCAN</span>
        </button>
      </div>
    </div>
  );
}
