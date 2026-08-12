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
    <div className="border-4 border-frame bg-screen p-6 sm:p-10 my-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-frame-dark pb-6">
        <div className="flex items-center gap-4">
          <PixelSpider size={48} suit="classic" pose="mask" expression="squint" />
          <div>
            <span className="text-[8px] tracking-[0.3em] text-accent">SPIDEYTRACKER.NET / INTL / IN</span>
            <h2 className="mt-1 text-xl text-foreground sm:text-3xl text-glow">
              SPIDEY CLUB TRACKER 🕸️
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="border-4 border-frame-dark bg-card px-3 py-1.5 text-[8px] text-muted-foreground">
            THREAT: <strong className="text-primary">{threatLevel}</strong>
          </span>
          <button
            onClick={handlePulseScan}
            className="border-4 border-frame-light bg-primary px-4 py-2 text-[9px] text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            ⚡ PULSE RADAR SCAN
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Left Column: Radar Scanner */}
        <div className="flex flex-col items-center justify-center border-4 border-frame-dark bg-card p-6 text-center">
          <p className="text-[8px] tracking-widest text-accent mb-4">SPIDER-SENSE RADAR</p>

          {/* Interactive Radar Circle */}
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-primary/40 bg-screen shadow-inner">
            {/* Concentric rings */}
            <div className="absolute h-36 w-36 rounded-full border border-primary/30" />
            <div className="absolute h-24 w-24 rounded-full border border-primary/20" />
            <div className="absolute h-12 w-12 rounded-full border border-primary/20" />

            {/* Radar Sweeper Line */}
            <div
              className="absolute top-1/2 left-1/2 h-[96px] w-[2px] origin-top bg-gradient-to-b from-primary to-transparent"
              style={{ transform: `rotate(${radarAngle}deg)` }}
            />

            {/* Radar Center Spidey Icon */}
            <PixelSpider size={36} suit="classic" pose="mask" expression="normal" />

            {/* Simulated Radar Node Pings */}
            <div className="absolute top-8 left-10 h-2 w-2 animate-ping rounded-full bg-web-yellow" />
            <div className="absolute bottom-12 right-8 h-2 w-2 animate-ping rounded-full bg-primary" />
          </div>

          <p className="mt-6 text-[8px] leading-5 text-muted-foreground">
            SCANNING CODEKRAFTERS CLUB WEB NODES...
          </p>
        </div>

        {/* Right Column: Telemetry Stats & Live Activity Log */}
        <div className="space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="border-4 border-frame-dark bg-card p-4">
              <p className="text-lg text-primary text-glow font-bold">{thwipCount}</p>
              <p className="mt-1 text-[7px] text-muted-foreground uppercase">TOTAL THWIPS</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-4">
              <p className="text-lg text-accent text-glow font-bold">100%</p>
              <p className="mt-1 text-[7px] text-muted-foreground uppercase">WEB STABILITY</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-4">
              <p className="text-lg text-foreground text-glow font-bold">7 NODES</p>
              <p className="mt-1 text-[7px] text-muted-foreground uppercase">ACTIVE DOMAINS</p>
            </div>
            <div className="border-4 border-frame-dark bg-card p-4">
              <p className="text-lg text-web-yellow text-glow font-bold">42 CREW</p>
              <p className="mt-1 text-[7px] text-muted-foreground uppercase">LEADS & HEADS</p>
            </div>
          </div>

          {/* Live Activity Terminal Feed */}
          <div className="border-4 border-frame-dark bg-screen p-5">
            <div className="flex items-center justify-between border-b-4 border-frame-dark pb-3">
              <span className="text-[8px] tracking-widest text-accent">
                /LIVE_CLUB_ACTIVITY_FEED
              </span>
              <span className="text-[7px] text-primary animate-pulse">● LIVE TELEMETRY</span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-[9px] leading-6">
              {logs.map((log) => (
                <div key={log.id} className="flex flex-wrap items-center gap-2 border-b border-frame-dark/40 pb-2">
                  <span className="text-muted-foreground text-[8px]">[{log.time}]</span>
                  <span className="border border-frame-dark bg-card px-1.5 py-0.5 text-[7px] text-accent font-bold">
                    {log.domain}
                  </span>
                  <span className="text-foreground">{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
