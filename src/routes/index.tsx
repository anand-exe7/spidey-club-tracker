import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Frame } from "@/components/launchpad/Frame";
import { Preloader } from "@/components/launchpad/Preloader";
import { GlobeIntro } from "@/components/launchpad/GlobeIntro";
import { Ticker } from "@/components/launchpad/Ticker";
import { SpiderScroll } from "@/components/launchpad/SpiderScroll";
import { PixelSpider } from "@/components/launchpad/PixelSpider";
import { SpideyMaskShowcase } from "@/components/launchpad/SpideyMaskShowcase";
import { SpideyTracker } from "@/components/launchpad/SpideyTracker";
import { playThwipSound } from "@/lib/spideyAudio";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";
import {
  DOMAINS,
  ABOUT_PARAS,
  STATS,
  VALUES,
  TIMELINE,
  LEADERSHIP,
} from "@/components/launchpad/data";

// LinkedIn Logo Component
function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-foreground">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

// Instagram Logo Component
function InstagramLogo() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-pink-600">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeKrafters Launchpad — Your First Step Into The Web" },
      {
        name: "description",
        content:
          "CodeKrafters Launchpad: retro pixel tracker for CodeKrafters club web — explore club domains, meet heads and leads, and track Spidey web telemetry.",
      },
      { property: "og:title", content: "CodeKrafters Launchpad" },
      {
        property: "og:description",
        content:
          "Explore the CodeKrafters club web: Development, Web3, Content, Creative, Competitive Programming, PR and Management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-center text-[8px] tracking-[0.4em] text-accent sm:text-[9px] uppercase">
      {children}
    </p>
  );
}

function Index() {
  const [stage, setStage] = useState<"boot" | "globe" | "landing">("boot");
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  // Auto-advance domains carousel
  useEffect(() => {
    if (stage !== "landing") return;

    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev === DOMAINS.length - 1 ? 0 : prev + 1));
    }, 6000); // Change domain every 6 seconds

    return () => clearInterval(interval);
  }, [stage, currentDomainIndex]);

  return (
    <>
      {stage === "boot" && <Preloader onDone={() => setStage("globe")} />}
      {stage === "globe" && <GlobeIntro onDone={() => setStage("landing")} />}
      {stage === "landing" && <SpiderScroll />}

      {stage === "landing" && (
        <Frame>
          {/* HERO SECTION */}
          <section className="relative flex min-h-[60svh] flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[82vh] sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0 22px, oklch(0.846 0.159 82.6 / 0.18) 22px 23px), repeating-linear-gradient(-45deg, transparent 0 22px, oklch(0.846 0.159 82.6 / 0.18) 22px 23px)",
              }}
            />

            {/* Hero Logo */}
            <div className="relative mb-6 group cursor-pointer" onClick={() => playThwipSound()}>
              <div className="mx-auto h-12 w-[2px] bg-foreground/60" />
              <img
                src="/ck.png"
                alt="CodeKrafters logo"
                className="mx-auto w-24 h-24 object-contain transition-transform group-hover:scale-110 sm:w-32 sm:h-32 pixel-border"
                draggable={false}
              />
              <span className="mt-2 inline-block border-2 border-frame-dark bg-web-yellow px-3 py-1 text-[7px] text-background font-bold shadow">
                CLICK LOGO TO THWIP WEB! 🕸️
              </span>
            </div>

            <p className="relative text-[9px] tracking-[0.4em] text-accent sm:text-[10px] uppercase">
              CODEKRAFTERS CLUB PRESENTS
            </p>
            <h1
              className="relative mt-4 text-2xl leading-tight text-foreground text-glow sm:text-6xl glitch"
              data-text="LAUNCHPAD"
            >
              LAUNCHPAD
            </h1>
            <h2 className="relative mt-4 text-[10px] leading-6 text-primary sm:text-sm max-w-lg mx-auto">
              Your first step into the web.
            </h2>
            <p className="relative mt-4 max-w-xl text-[9px] leading-6 text-muted-foreground sm:text-[11px] mx-auto">
              A new generation of student builders. A new chapter. A new web.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#club-domains"
                onClick={() => playThwipSound()}
                className="border-4 border-frame-light bg-primary px-5 py-3 text-[9px] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
              >
                EXPLORE CLUB DOMAINS ↓
              </a>
              <a
                href="#spidey-tracker"
                onClick={() => playThwipSound()}
                className="border-4 border-frame-dark bg-card px-5 py-3 text-[9px] text-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
              >
                SPIDEY TRACKER 🕸️
              </a>
            </div>

            {/* Stat Strip */}
            <div className="relative mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-4 border-frame-dark bg-card px-3 py-4">
                  <p className="text-base text-primary text-glow sm:text-xl font-bold">{s.value}</p>
                  <p className="mt-2 text-[7px] leading-4 tracking-widest text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="relative mt-10 text-[8px] tracking-widest text-muted-foreground uppercase">
              DOUBLE CLICK TO SWAP SUIT • SCROLL TO EXPLORE ↓
            </p>
          </section>

          <Ticker
            items={[
              "CODEKRAFTERS CLUB ONLINE",
              "SPIDER-MAN MASK ENGINE v2.0",
              "7 CLUB DOMAINS ACTIVE",
              "BUILD. BREAK. DEPLOY.",
              "SPIDEY TRACKER NOMINAL",
            ]}
          />

          {/* 01 // ABOUT US SECTION */}
          <section id="about" className="border-b-4 border-frame-dark px-6 py-8 sm:px-12 sm:py-16">
            <SectionLabel>01 // ABOUT CODEKRAFTERS</SectionLabel>
            <h2 className="mt-4 text-center text-lg text-foreground sm:text-3xl">
              Welcome to the web.
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center max-w-5xl mx-auto">
              <div className="space-y-6 text-left">
                {ABOUT_PARAS.map((p) => (
                  <p
                    key={p.slice(0, 20)}
                    className="text-[9px] leading-7 text-muted-foreground sm:text-[11px] sm:leading-8"
                  >
                    {p}
                  </p>
                ))}
                <p className="text-[10px] text-primary sm:text-sm font-bold">
                  THIS IS CODEKRAFTERS.
                </p>
              </div>

              <div className="border-4 border-frame bg-screen p-8 text-center shadow-lg">
                <div className="relative">
                  <div className="mx-auto h-10 w-[2px] bg-foreground/60" />
                  <PixelSpider
                    size={84}
                    suit="classic"
                    pose="hanging"
                    expression="squint"
                    interactive
                    onThwip={() => playThwipSound()}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-6 text-[9px] leading-6 text-accent font-bold">
                  &ldquo;WITH GREAT COMMITS COMES GREAT RESPONSIBILITY.&rdquo;
                </p>
                <p className="mt-3 text-[8px] text-muted-foreground uppercase">
                  — CODEKRAFTERS GUILD
                </p>
              </div>
            </div>

            {/* Club Core Values */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 max-w-5xl mx-auto">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="border-4 border-frame-dark bg-card p-3 sm:p-5 text-center"
                >
                  <span className="text-base text-primary">{v.icon}</span>
                  <p className="mt-3 text-[10px] font-bold leading-5 text-foreground">{v.title}</p>
                  <p className="mt-2 text-[8px] leading-5 text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02 // CLUB DOMAINS (Single Domain View Carousel) */}
          <section
            id="club-domains"
            className="border-b-4 border-frame-dark px-6 py-8 sm:px-12 sm:py-16"
          >
            <SectionLabel>02 // CLUB DOMAINS</SectionLabel>
            <h2 className="mt-4 text-center text-lg text-foreground sm:text-3xl">
              Explore All 7 Domains
            </h2>
            <p className="mt-3 text-center text-[9px] tracking-widest text-accent uppercase">
              EVERY NODE OF THE CODEKRAFTERS WEB
            </p>

            {/* EXECUTIVE BOARD - VERTICAL SECTION */}
            <div className="mt-8 flex flex-col gap-6 sm:gap-10 max-w-7xl mx-auto w-full px-2 sm:px-6">
              {/* NODE 00: EXECUTIVE BOARD */}
              <div className="w-full border-4 border-web-yellow bg-card p-3 sm:p-8 transition-transform hover:-translate-y-1 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-frame-dark pb-4">
                  <span className="self-center sm:self-start border-4 border-frame-dark bg-web-yellow px-3 py-1.5 text-[9px] text-background font-bold">
                    NODE 00
                  </span>
                  <div className="flex-1 text-center">
                    <h3 className="text-lg sm:text-2xl text-web-yellow font-bold leading-tight break-words">
                      EXECUTIVE BOARD
                    </h3>
                    <p className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest break-words mt-1">
                      Core Leadership
                    </p>
                  </div>
                  {/* Invisible spacer on desktop to balance the NODE badge for perfect centering */}
                  <span className="hidden sm:block opacity-0 px-3 py-1.5 text-[9px]">NODE 00</span>
                </div>

                <div className="mt-8 sm:mt-12">
                  <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-6 text-center">
                    PRESIDENT & VICE PRESIDENT
                  </p>
                  <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
                    {LEADERSHIP.map((leader) => (
                      <div
                        key={leader.id}
                        className="border-4 border-frame-light bg-screen transition-transform hover:scale-105 flex flex-col overflow-hidden shadow-lg"
                      >
                        {/* Profile Image */}
                        <div className="w-full border-b-4 border-frame-dark bg-primary overflow-hidden">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-auto object-cover aspect-square"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                          {/* Header */}
                          <div className="mb-4 sm:mb-6">
                            <div className="inline-block border-2 border-web-yellow bg-web-yellow px-2 py-1 mb-3">
                              <p className="text-[7px] sm:text-[8px] text-background font-bold uppercase tracking-widest">
                                {leader.title}
                              </p>
                            </div>
                            <h3 className="text-base sm:text-xl font-bold text-foreground">
                              {leader.name}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-[8px] sm:text-[9px] leading-5 sm:leading-6 text-muted-foreground mb-4 flex-1">
                            {leader.description}
                          </p>

                          {/* LinkedIn Button */}
                          {leader.linkedin && (
                            <a
                              href={leader.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 border-4 border-frame-dark bg-card hover:bg-primary hover:text-primary-foreground hover:border-frame-light px-3 py-2 text-[8px] sm:text-[9px] text-foreground font-bold uppercase tracking-widest transition-all"
                              onClick={() => playThwipSound()}
                            >
                              <LinkedInLogo />
                              <span>Connect on LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DOMAINS CAROUSEL - One Domain at a Time */}
            <div className="mt-16 max-w-5xl mx-auto">
              {/* Current Domain Display */}
              {DOMAINS[currentDomainIndex] && (
                <div className="w-full border-4 border-frame bg-card p-6 sm:p-10 shadow-lg">
                  {/* Domain Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-frame-dark pb-6 mb-8">
                    <span className="self-center sm:self-start border-4 border-frame-dark bg-primary px-3 py-1.5 text-[8px] sm:text-[9px] text-primary-foreground font-bold">
                      NODE {String(currentDomainIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0 text-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl text-foreground font-bold break-words uppercase">
                        {DOMAINS[currentDomainIndex]?.name}
                      </h3>
                      <p className="mt-2 text-[9px] sm:text-[10px] text-muted-foreground italic truncate">
                        {DOMAINS[currentDomainIndex]?.tagline}
                      </p>
                    </div>

                    <span className="self-center sm:self-auto border-4 border-frame-dark bg-web-yellow px-3 py-1.5 text-[8px] sm:text-[9px] text-background font-bold">
                      {DOMAINS[currentDomainIndex]?.sfx}
                    </span>
                  </div>

                  {/* Team — vertical portrait cards, heads then leads */}
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-5">
                    {[
                      ...(DOMAINS[currentDomainIndex]?.people ?? []).filter(
                        (p) => p.title.toLowerCase() === "head",
                      ),
                      ...(DOMAINS[currentDomainIndex]?.people ?? []).filter(
                        (p) => p.title.toLowerCase() === "lead",
                      ),
                    ].map((p) => (
                      <div
                        key={p.role}
                        onClick={() => {
                          setSelectedPerson({ ...p, domain: DOMAINS[currentDomainIndex]?.name });
                          playThwipSound();
                        }}
                        className="mx-auto flex flex-col items-center justify-between bg-card border-4 border-frame-dark rounded-2xl px-2 py-4 sm:px-5 sm:py-6 w-full max-w-[140px] sm:max-w-[170px] flex-shrink-0 transition-transform hover:-translate-y-1 shadow-md cursor-pointer hover:border-primary group"
                      >
                        {/* Circular photo */}
                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-frame-dark group-hover:border-primary transition-colors overflow-hidden mb-3 sm:mb-4 bg-screen flex-shrink-0">
                          <img
                            src={p.image}
                            alt={p.role}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: p.objectPosition ?? "top" }}
                          />
                        </div>

                        {/* Name */}
                        <p className="text-[10px] sm:text-[11px] font-bold text-foreground text-center leading-snug mb-1">
                          {p.role}
                        </p>

                        {/* Domain + Role label */}
                        <p className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-accent text-center leading-tight mb-4">
                          {DOMAINS[currentDomainIndex]?.name} {p.title}
                        </p>

                        {/* LinkedIn icon button — only shown when URL is provided */}
                        {p.linkedin ? (
                          <a
                            href={p.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-frame-dark hover:bg-primary hover:border-frame-light transition-all"
                            onClick={() => playThwipSound()}
                            aria-label={`${p.role} LinkedIn`}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="text-foreground"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                          </a>
                        ) : (
                          <div className="mt-auto w-8 h-8 rounded-full bg-background border-2 border-frame-dark opacity-20 flex items-center justify-center">
                            <svg
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="text-foreground"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Previous/Next Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setCurrentDomainIndex((prev) => (prev === 0 ? DOMAINS.length - 1 : prev - 1));
                      playThwipSound();
                    }}
                    className="border-4 border-frame-dark bg-card px-6 py-3 text-[9px] text-foreground uppercase font-bold transition-transform hover:scale-105"
                  >
                    ← PREVIOUS
                  </button>
                  <button
                    onClick={() => {
                      setCurrentDomainIndex((prev) => (prev === DOMAINS.length - 1 ? 0 : prev + 1));
                      playThwipSound();
                    }}
                    className="border-4 border-frame-dark bg-card px-6 py-3 text-[9px] text-foreground uppercase font-bold transition-transform hover:scale-105"
                  >
                    NEXT →
                  </button>
                </div>

                {/* Domain Navigation Dots */}
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  {DOMAINS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentDomainIndex(index);
                        playThwipSound();
                      }}
                      className={`w-3 h-3 sm:w-4 sm:h-4 border-2 transition-all ${
                        index === currentDomainIndex
                          ? "bg-primary border-primary"
                          : "border-frame-dark bg-card hover:bg-frame-dark"
                      }`}
                      title={DOMAINS[index]?.name}
                    />
                  ))}
                </div>

                {/* Domain Name Strip */}
                <div className="w-full border-4 border-frame-dark bg-screen p-4 flex flex-wrap justify-center gap-3 items-center">
                  {DOMAINS.map((domain, index) => (
                    <button
                      key={domain.id}
                      onClick={() => {
                        setCurrentDomainIndex(index);
                        playThwipSound();
                      }}
                      className={`text-[8px] sm:text-[9px] px-3 py-2 border-2 uppercase font-bold tracking-widest transition-all ${
                        index === currentDomainIndex
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-frame-dark text-foreground hover:bg-frame-dark"
                      }`}
                    >
                      {domain.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 03 // THE SEMESTER LOOP */}
          <section id="loop" className="border-b-4 border-frame-dark px-6 py-8 sm:px-12 sm:py-16">
            <SectionLabel>03 // THE SEMESTER LOOP</SectionLabel>
            <h2 className="mt-4 text-center text-lg text-foreground sm:text-3xl">How It Runs</h2>
            <p className="mt-3 text-center text-[9px] tracking-widest text-accent uppercase">
              OUR SEMESTER DEVELOPMENT CYCLE
            </p>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 max-w-5xl mx-auto">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.phase}
                  className="relative border-4 border-frame-dark bg-card p-3 sm:p-6 text-center shadow"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 border-4 border-frame-dark bg-web-yellow px-3 py-1 text-[7px] font-bold text-background uppercase">
                    {t.phase}
                  </span>
                  <p className="mt-4 text-[11px] font-bold leading-5 text-foreground">{t.title}</p>
                  <p className="mt-3 text-[8px] leading-5 text-muted-foreground">{t.text}</p>
                  <p className="mt-4 text-[8px] font-bold text-accent">
                    {i < TIMELINE.length - 1 ? "NEXT PHASE →" : "LOOP ↺"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 04 // READY TO ENTER THE WEB CTA */}
          <section className="border-b-4 border-frame-dark px-6 py-10 text-center sm:px-12 sm:py-20">
            <div className="relative">
              <div className="mx-auto h-12 w-[2px] bg-foreground/60" />
              <PixelSpider
                size={64}
                suit="classic"
                pose="hanging"
                expression="squint"
                interactive
                onThwip={() => playThwipSound()}
                className="mx-auto"
              />
            </div>
            <h2 className="mt-6 text-lg text-foreground sm:text-3xl">Ready to enter the web?</h2>
            <p className="mt-3 text-[9px] text-muted-foreground sm:text-[11px]">
              Join CodeKrafters and build your first project with us.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                playThwipSound();
                toast("Club registrations are not yet open! Stay tuned.");
              }}
              className="mt-8 inline-block border-4 border-frame-light bg-primary px-6 py-3.5 text-[9px] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px] font-bold"
            >
              JOIN CODEKRAFTERS CLUB →
            </button>
          </section>

          {/* 06 // SPIDEY MASK & SUIT HUD LAB */}
          <section
            id="spidey-hud"
            className="px-6 py-8 sm:px-12 sm:py-12 border-b-4 border-frame-dark"
          >
            <SpideyMaskShowcase />
          </section>

          {/* 07 // SPIDEY TRACKER DASHBOARD */}
          <section
            id="spidey-tracker"
            className="px-6 py-8 sm:px-12 sm:py-12 border-b-4 border-frame-dark overflow-hidden w-full max-w-[100vw]"
          >
            <SpideyTracker />
          </section>

          {/* 08 // CONNECT QR CODE */}
          <section className="px-6 py-8 sm:px-12 sm:py-16 flex flex-col items-center text-center">
            <h2 className="text-lg text-foreground sm:text-3xl mb-4">CONNECT</h2>
            <p className="text-[9px] text-muted-foreground sm:text-[11px] mb-8">
              SCAN TO ACCESS ALL CLUB LINKS
            </p>

            <div
              className="border-4 border-frame-dark bg-transparent p-4 shadow-lg transition-transform hover:scale-105 cursor-pointer text-primary"
              onClick={() => {
                window.location.href = "/links";
              }}
            >
              <QRCodeSVG
                value="https://launchpad-ck.vercel.app/links"
                size={180}
                bgColor="transparent"
                fgColor="currentColor"
                level="Q"
                className="rendering-pixelated"
              />
            </div>
            <a
              href="/links"
              className="mt-6 text-[9px] text-primary font-bold hover:underline tracking-widest uppercase"
            >
              OR CLICK HERE TO VIEW LINKS
            </a>

            {/* Social Media Links Section */}
            <div className="mt-12 w-full max-w-2xl">
              <p className="text-[9px] tracking-[0.4em] text-accent uppercase font-bold mb-6">
                FOLLOW OUR SOCIAL WEB
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <a
                  href="https://codekrafters.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-frame-dark bg-card hover:bg-primary/20 px-4 py-6 sm:px-6 sm:py-8 transition-all hover:scale-105 hover:-translate-y-1 shadow-md"
                  title="CodeKrafters Website"
                >
                  <div className="text-3xl sm:text-4xl mb-3">🌐</div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-foreground uppercase">
                    Website
                  </p>
                  <p className="text-[7px] text-muted-foreground mt-1">Visit Our Site</p>
                </a>
                <a
                  href="https://www.instagram.com/codekrafterssrm.rmp?igsh=ZjcwMHl1dWI3NWlh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-frame-dark bg-card hover:bg-primary/20 px-4 py-6 sm:px-6 sm:py-8 transition-all hover:scale-105 hover:-translate-y-1 shadow-md flex flex-col items-center"
                  title="Instagram"
                >
                  <div className="mb-3 flex justify-center">
                    <InstagramLogo />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-foreground uppercase">
                    Instagram
                  </p>
                  <p className="text-[7px] text-muted-foreground mt-1">Follow Us</p>
                </a>
                <a
                  href="https://www.linkedin.com/company/codechef-srmrmp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-frame-dark bg-card hover:bg-primary/20 px-4 py-6 sm:px-6 sm:py-8 transition-all hover:scale-105 hover:-translate-y-1 shadow-md flex flex-col items-center"
                  title="LinkedIn"
                >
                  <div className="mb-3 flex justify-center">
                    <LinkedInLogo />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-foreground uppercase">
                    LinkedIn
                  </p>
                  <p className="text-[7px] text-muted-foreground mt-1">Connect</p>
                </a>
              </div>
            </div>
          </section>

          {/* BOTTOM STATUS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-frame-dark bg-background px-6 py-4">
            <span className="text-[8px] text-accent font-bold">● SYSTEM ONLINE</span>
            <span className="text-[8px] text-muted-foreground">
              CODEKRAFTERS CLUB • LAUNCHPAD 2026 • LAUNCHPAD-CK.VERCEL.APP
            </span>
          </div>

          {/* Modal Overlay for Domain Leads/Heads */}
          {selectedPerson && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedPerson(null)}
            >
              <div
                className="relative border-4 border-frame-dark bg-card p-6 sm:p-10 max-w-sm w-full flex flex-col items-center shadow-2xl transition-all animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-4 text-foreground hover:text-primary transition-colors text-3xl font-bold"
                  onClick={() => setSelectedPerson(null)}
                >
                  ×
                </button>
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-primary overflow-hidden mb-6 bg-screen flex-shrink-0 shadow-lg">
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.role}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: selectedPerson.objectPosition ?? "top" }}
                  />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-foreground text-center mb-2 text-glow uppercase">
                  {selectedPerson.role}
                </h3>
                <div className="inline-block border-2 border-web-yellow bg-web-yellow px-3 py-1 mb-6">
                  <p className="text-[10px] sm:text-xs font-bold text-background uppercase tracking-widest text-center">
                    {selectedPerson.domain} {selectedPerson.title}
                  </p>
                </div>
                {selectedPerson.linkedin && (
                  <a
                    href={selectedPerson.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border-4 border-frame-dark bg-screen hover:bg-primary hover:text-primary-foreground hover:border-frame-light px-6 py-4 text-[10px] sm:text-xs text-foreground font-bold uppercase tracking-widest transition-all w-full"
                    onClick={() => playThwipSound()}
                  >
                    <LinkedInLogo />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </Frame>
      )}
    </>
  );
}
