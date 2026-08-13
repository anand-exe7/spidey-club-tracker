import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { DOMAINS, ABOUT_PARAS, STATS, VALUES, TIMELINE } from "@/components/launchpad/data";

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
          "Explore the CodeKrafters club web: Development, Web3, Content, Creative, CP, PR and Management.",
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

  return (
    <>
      {stage === "boot" && <Preloader onDone={() => setStage("globe")} />}
      {stage === "globe" && <GlobeIntro onDone={() => setStage("landing")} />}
      {stage === "landing" && <SpiderScroll />}

      {stage === "landing" && (
        <Frame>
          {/* HERO SECTION */}
          <section className="relative flex min-h-[80svh] flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[82vh]">
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
              className="relative mt-4 text-3xl leading-tight text-foreground text-glow sm:text-6xl glitch"
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
          <section id="about" className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
            <SectionLabel>01 // ABOUT CODEKRAFTERS</SectionLabel>
            <h2 className="mt-4 text-center text-xl text-foreground sm:text-3xl">
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
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {VALUES.map((v) => (
                <div key={v.title} className="border-4 border-frame-dark bg-card p-5 text-center">
                  <span className="text-base text-primary">{v.icon}</span>
                  <p className="mt-3 text-[10px] font-bold leading-5 text-foreground">{v.title}</p>
                  <p className="mt-2 text-[8px] leading-5 text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02 // CLUB DOMAINS (Continuous Vertical Display) */}
          <section id="club-domains" className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
            <SectionLabel>02 // CLUB DOMAINS</SectionLabel>
            <h2 className="mt-4 text-center text-xl text-foreground sm:text-3xl">
              Explore All 7 Domains
            </h2>
            <p className="mt-3 text-center text-[9px] tracking-widest text-accent uppercase">
              EVERY NODE OF THE CODEKRAFTERS WEB
            </p>

            <div className="mt-8 flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:flex-col sm:gap-8 sm:overflow-visible sm:snap-none sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-4xl mx-auto">
              {DOMAINS.map((domain, index) => (
                <div
                  key={domain.id}
                  className="w-full shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none border-4 border-frame bg-card p-4 sm:p-8 transition-transform hover:-translate-y-1 shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-frame-dark pb-3 sm:gap-4 sm:pb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="border-4 border-frame-dark bg-primary px-2 py-1 text-[8px] sm:px-3 sm:py-1.5 sm:text-[9px] text-primary-foreground font-bold">
                        NODE {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm text-foreground sm:text-2xl font-bold leading-tight">
                          {domain.name}
                        </h3>
                        <p className="text-[7px] sm:text-[9px] text-muted-foreground">{domain.tagline}</p>
                      </div>
                    </div>

                    <span className="border-4 border-frame-dark bg-web-yellow px-2 py-1 text-[7px] sm:px-3 sm:py-1.5 sm:text-[9px] text-background font-bold">
                      {domain.sfx}
                    </span>
                  </div>

                  {/* Domain Crew List */}
                  <div className="mt-4 sm:mt-6">
                    <p className="text-[7px] sm:text-[8px] tracking-widest text-accent uppercase mb-2 sm:mb-3">
                      DOMAIN CREW & LEADS
                    </p>
                    <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-4">
                      {domain.people.map((p) => (
                        <div
                          key={p.role}
                          className="border-2 sm:border-4 border-frame-dark bg-screen p-2 sm:p-4 text-center transition-transform hover:scale-105"
                        >
                          <div className="mx-auto flex h-6 w-6 sm:h-10 sm:w-10 items-center justify-center border-2 border-frame bg-primary text-[7px] sm:text-[9px] text-primary-foreground font-bold">
                            CK
                          </div>
                          <p className="mt-2 text-[8px] sm:text-[9px] font-bold text-foreground">{p.role}</p>
                          <p className="text-[7px] sm:text-[8px] text-accent">{p.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 // THE SEMESTER LOOP */}
          <section id="loop" className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
            <SectionLabel>03 // THE SEMESTER LOOP</SectionLabel>
            <h2 className="mt-4 text-center text-xl text-foreground sm:text-3xl">How It Runs</h2>
            <p className="mt-3 text-center text-[9px] tracking-widest text-accent uppercase">
              OUR SEMESTER DEVELOPMENT CYCLE
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.phase}
                  className="relative border-4 border-frame-dark bg-card p-6 text-center shadow"
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
          <section className="border-b-4 border-frame-dark px-6 py-20 text-center sm:px-12">
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
            <h2 className="mt-6 text-xl text-foreground sm:text-3xl">Ready to enter the web?</h2>
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
          <section id="spidey-hud" className="px-6 py-12 sm:px-12 border-b-4 border-frame-dark">
            <SpideyMaskShowcase />
          </section>

          {/* 07 // SPIDEY TRACKER DASHBOARD */}
          <section id="spidey-tracker" className="px-6 py-12 sm:px-12 border-b-4 border-frame-dark">
            <SpideyTracker />
          </section>

          {/* 08 // CONNECT QR CODE */}
          <section className="px-6 py-16 sm:px-12 flex flex-col items-center text-center">
            <h2 className="text-xl text-foreground sm:text-3xl mb-4">CONNECT</h2>
            <p className="text-[9px] text-muted-foreground sm:text-[11px] mb-8">
              SCAN TO ACCESS ALL CLUB LINKS
            </p>
            <div className="border-4 border-frame-dark bg-transparent p-4 shadow-lg transition-transform hover:scale-105 cursor-pointer text-primary" onClick={() => {window.location.href = "/links"}}>
              <QRCodeSVG 
                value="https://spideytracker.net/links" 
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
          </section>

          {/* BOTTOM STATUS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-frame-dark bg-background px-6 py-4">
            <span className="text-[8px] text-accent font-bold">● SYSTEM ONLINE</span>
            <span className="text-[8px] text-muted-foreground">
              CODEKRAFTERS CLUB • LAUNCHPAD 2026 • SPIDEYTRACKER.NET
            </span>
          </div>
        </Frame>
      )}
    </>
  );
}
