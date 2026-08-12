import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Frame } from "@/components/launchpad/Frame";
import { Preloader } from "@/components/launchpad/Preloader";
import { Ticker } from "@/components/launchpad/Ticker";
import { SpiderScroll } from "@/components/launchpad/SpiderScroll";
import { PixelSpider } from "@/components/launchpad/PixelSpider";
import {
  DOMAINS,
  ABOUT_PARAS,
  STATS,
  VALUES,
  TIMELINE,
  FAQS,
} from "@/components/launchpad/data";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[8px] tracking-[0.4em] text-accent sm:text-[9px]">{children}</p>
  );
}

function Index() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState(DOMAINS[0]!.id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const domain = DOMAINS.find((d) => d.id === active)!;
  const activeIndex = DOMAINS.findIndex((d) => d.id === active);

  return (
    <>
      {!booted && <Preloader onDone={() => setBooted(true)} />}
      {booted && <SpiderScroll />}

      <Frame>
        {/* HERO */}
        <section className="relative flex min-h-[78vh] flex-col items-center justify-center px-4 py-20 text-center">
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
              href="#about"
              className="border-4 border-frame-dark bg-card px-4 py-3 text-[9px] text-foreground transition-transform hover:-translate-y-0.5 sm:text-[10px]"
            >
              MEET THE CLUB ↓
            </a>
          </div>

          {/* stat strip */}
          <div className="relative mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-4 border-frame-dark bg-card px-3 py-4"
              >
                <p className="text-base text-primary text-glow sm:text-xl">{s.value}</p>
                <p className="mt-3 text-[7px] leading-4 tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
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

        {/* ABOUT */}
        <section
          id="about"
          className="border-b-4 border-frame-dark px-6 py-16 sm:px-12"
        >
          <SectionLabel>01 // ABOUT US</SectionLabel>
          <h2 className="mt-5 text-xl text-foreground sm:text-3xl">Welcome to the web.</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              {ABOUT_PARAS.map((p) => (
                <p
                  key={p.slice(0, 20)}
                  className="text-[9px] leading-7 text-muted-foreground sm:text-[11px] sm:leading-8"
                >
                  {p}
                </p>
              ))}
              <p className="text-[10px] text-primary sm:text-sm">THIS IS CODEKRAFTERS.</p>
            </div>

            <div className="border-4 border-frame bg-screen p-6 text-center">
              <div className="[animation:swing_3.6s_ease-in-out_infinite] origin-top">
                <div className="mx-auto h-10 w-[2px] bg-foreground/50" />
                <PixelSpider size={72} className="mx-auto" />
              </div>
              <p className="mt-6 text-[9px] leading-6 text-accent">
                &ldquo;WITH GREAT COMMITS COMES GREAT RESPONSIBILITY.&rdquo;
              </p>
              <p className="mt-4 text-[8px] text-muted-foreground">— THE CLUB, PROBABLY</p>
            </div>
          </div>

          {/* values */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="border-4 border-frame-dark bg-card p-5">
                <span className="text-sm text-primary">{v.icon}</span>
                <p className="mt-4 text-[10px] leading-5 text-foreground">{v.title}</p>
                <p className="mt-3 text-[8px] leading-5 text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLUB WEB — terminal node selector */}
        <section
          id="club-web"
          className="border-b-4 border-frame-dark px-6 py-16 sm:px-12"
        >
          <SectionLabel>02 // CLUB DOMAINS</SectionLabel>
          <h2 className="mt-5 text-xl text-foreground sm:text-3xl">The club web</h2>
          <p className="mt-4 text-[9px] tracking-widest text-accent">
            SELECT A NODE TO CLIMB THE DOMAINS.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[300px_1fr]">
            {/* node list */}
            <div className="border-4 border-frame-dark bg-screen">
              <div className="border-b-4 border-frame-dark bg-muted px-3 py-2 text-[8px] tracking-widest text-muted-foreground">
                /DOMAIN_REGISTRY
              </div>
              <ul>
                {DOMAINS.map((d, i) => {
                  const isActive = d.id === active;
                  return (
                    <li key={d.id}>
                      <button
                        onClick={() => setActive(d.id)}
                        className={`flex w-full items-center gap-3 border-b-4 border-frame-dark px-3 py-4 text-left transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-card"
                        }`}
                      >
                        <span className="text-[8px] opacity-70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] leading-4">{d.name}</span>
                        <span className="ml-auto text-[9px]">{isActive ? "▶" : "·"}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* DETAIL PANEL */}
            <div className="border-4 border-frame bg-card p-6 sm:p-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[8px] tracking-widest text-accent">
                    NODE {String(activeIndex + 1).padStart(2, "0")} / {DOMAINS.length}
                  </p>
                  <h3 className="mt-4 text-lg text-foreground sm:text-2xl">
                    {domain.name}
                  </h3>
                  <p className="mt-3 text-[9px] text-muted-foreground sm:text-[11px]">
                    {domain.tagline}
                  </p>
                </div>
                <span className="border-4 border-frame-dark bg-web-yellow px-3 py-2 text-[9px] text-background">
                  {domain.sfx}
                </span>
              </div>

              <div className="mt-8 border-t-4 border-frame-dark pt-8">
                <p className="text-[8px] tracking-widest text-accent">CREW</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {domain.people.map((p) => (
                    <div
                      key={p.role}
                      className="border-4 border-frame-dark bg-screen p-5 text-center transition-transform hover:-translate-y-1"
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
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
          <SectionLabel>03 // THE SEMESTER LOOP</SectionLabel>
          <h2 className="mt-5 text-xl text-foreground sm:text-3xl">How it runs</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <div
                key={t.phase}
                className="relative border-4 border-frame-dark bg-card p-5"
              >
                <span className="absolute -top-3 left-4 border-4 border-frame-dark bg-web-yellow px-2 py-1 text-[7px] text-background">
                  {t.phase}
                </span>
                <p className="mt-5 text-[10px] leading-5 text-foreground">{t.title}</p>
                <p className="mt-3 text-[8px] leading-5 text-muted-foreground">
                  {t.text}
                </p>
                <p className="mt-5 text-[8px] text-accent">
                  {i < TIMELINE.length - 1 ? "NEXT →" : "LOOP ↺"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b-4 border-frame-dark px-6 py-16 sm:px-12">
          <SectionLabel>04 // FREQUENTLY ASKED</SectionLabel>
          <h2 className="mt-5 text-xl text-foreground sm:text-3xl">Questions?</h2>

          <div className="mt-10 max-w-3xl">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="mb-3 border-4 border-frame-dark bg-card">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <span className="text-[9px] leading-5 text-foreground sm:text-[10px]">
                      {f.q}
                    </span>
                    <span className="text-[10px] text-primary">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <p className="border-t-4 border-frame-dark bg-screen px-4 py-4 text-[8px] leading-6 text-muted-foreground sm:text-[9px]">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center sm:px-12">
          <div className="[animation:swing_3s_ease-in-out_infinite] origin-top">
            <div className="mx-auto h-12 w-[2px] bg-foreground/50" />
            <PixelSpider size={56} className="mx-auto" />
          </div>
          <h2 className="mt-8 text-lg text-foreground sm:text-2xl">
            Ready to enter the web?
          </h2>
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
