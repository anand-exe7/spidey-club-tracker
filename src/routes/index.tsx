import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Frame } from "@/components/launchpad/Frame";
import { Preloader } from "@/components/launchpad/Preloader";
import { Ticker } from "@/components/launchpad/Ticker";
import { DOMAINS } from "@/components/launchpad/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeKrafters Launchpad — Your First Step Into The Web" },
      {
        name: "description",
        content:
          "CodeKrafters Launchpad: a retro pixel tracker for the club web — explore our domains, meet the heads and leads, and enter the web.",
      },
      { property: "og:title", content: "CodeKrafters Launchpad" },
      {
        property: "og:description",
        content:
          "Explore the CodeKrafters club web: Development, Web3, Content, Creative, CP, PR and Management.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState(DOMAINS[0].id);
  const domain = DOMAINS.find((d) => d.id === active)!;

  return (
    <>
      {!booted && <Preloader onDone={() => setBooted(true)} />}

      <Frame>
        {/* HERO */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 22px, oklch(0.62 0.18 250 / 0.6) 22px 23px), repeating-linear-gradient(-45deg, transparent 0 22px, oklch(0.62 0.18 250 / 0.6) 22px 23px)",
            }}
          />
          <p className="relative text-[9px] tracking-[0.4em] text-accent sm:text-[10px]">
            CODEKRAFTERS PRESENTS
          </p>
          <h1 className="relative mt-6 text-3xl leading-tight text-foreground text-glow sm:text-6xl">
            LAUNCHPAD
          </h1>
          <h2 className="relative mt-5 text-[10px] leading-6 text-primary sm:text-sm">
            Your first step into the web.
          </h2>
          <p className="relative mt-5 max-w-xl text-[9px] leading-6 text-muted-foreground sm:text-[11px]">
            A new generation. A new chapter. A new web.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#club-web"
              className="border-4 border-frame-light bg-primary px-4 py-3 text-[9px] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
            >
              ENTER THE WEB →
            </a>
            <a
              href="#welcome"
              className="border-4 border-frame-dark bg-card px-4 py-3 text-[9px] text-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
            >
              MEET THE CLUB ↓
            </a>
          </div>
          <p className="relative mt-12 text-[8px] tracking-widest text-muted-foreground">
            SCROLL TO EXPLORE ↓
          </p>
        </section>

        <Ticker
          items={[
            "NEW GENERATION DETECTED",
            "CODEKRAFTERS ONLINE",
            "7 DOMAINS ACTIVE",
            "BUILD. BREAK. DEPLOY.",
          ]}
        />

        {/* WELCOME */}
        <section id="welcome" className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
          <h2 className="text-xl text-foreground sm:text-3xl">Welcome to the web.</h2>
          <p className="mt-6 max-w-3xl text-[9px] leading-7 text-muted-foreground sm:text-[12px] sm:leading-8">
            More than a club. A community of builders, creators, problem solvers
            and people who simply love making things.
          </p>
          <p className="mt-6 text-[10px] text-primary sm:text-sm">THIS IS CODEKRAFTERS.</p>
        </section>

        {/* CLUB WEB */}
        <section id="club-web" className="px-6 py-16 sm:px-12">
          <h2 className="text-xl text-foreground sm:text-3xl">The club web</h2>
          <p className="mt-4 text-[9px] tracking-widest text-accent">
            SELECT A NODE TO CLIMB THE DOMAINS.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d) => {
              const isActive = d.id === active;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`border-4 p-5 text-left transition-transform hover:-translate-y-1 ${
                    isActive
                      ? "border-primary bg-primary/15"
                      : "border-frame-dark bg-card"
                  }`}
                >
                  <span className="text-[8px] tracking-widest text-accent">NODE</span>
                  <p className="mt-3 text-[11px] leading-5 text-foreground sm:text-xs">
                    {d.name}
                  </p>
                  <p className="mt-3 text-[8px] leading-5 text-muted-foreground">
                    {d.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* DETAIL PANEL */}
          <div className="mt-12 border-4 border-frame bg-card p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-lg text-foreground sm:text-2xl">{domain.name}</h3>
                <p className="mt-3 text-[9px] text-muted-foreground sm:text-[11px]">
                  {domain.tagline}
                </p>
              </div>
              <span className="border-4 border-frame-dark bg-web-yellow px-3 py-2 text-[9px] text-background">
                {domain.sfx}
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {domain.people.map((p) => (
                <div
                  key={p.role}
                  className="border-4 border-frame-dark bg-screen p-5 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border-4 border-frame bg-primary text-[10px] text-primary-foreground">
                    CK
                  </div>
                  <p className="mt-4 text-[9px] text-foreground">{p.role}</p>
                  <p className="mt-2 text-[8px] text-accent">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-4 border-frame-dark px-6 py-16 text-center sm:px-12">
          <h2 className="text-lg text-foreground sm:text-2xl">Ready to enter the web?</h2>
          <p className="mt-5 text-[9px] text-muted-foreground sm:text-[11px]">
            Your story starts here.
          </p>
          <a
            href="#club-web"
            className="mt-8 inline-block border-4 border-frame-light bg-primary px-5 py-3 text-[9px] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
          >
            JOIN THE CLUB →
          </a>
        </section>

        {/* BOTTOM STATUS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-frame-dark bg-background px-4 py-4">
          <span className="text-[8px] text-accent">SYSTEM ONLINE</span>
          <span className="text-[8px] text-muted-foreground">
            CODEKRAFTERS • LAUNCHPAD 2026
          </span>
        </div>
      </Frame>
    </>
  );
}
