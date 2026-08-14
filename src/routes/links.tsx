import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Frame } from "@/components/launchpad/Frame";
import { PixelSpider } from "@/components/launchpad/PixelSpider";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

interface LinkItem {
  label: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  tagline: string;
}

// LinkedIn Logo Component
function LinkedInLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="64"
      height="64"
      fill="currentColor"
      className="text-blue-600"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

// Instagram Logo Component
function InstagramLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="64"
      height="64"
      fill="currentColor"
      className="text-pink-600"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  );
}

function LinksPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links: LinkItem[] = [
    {
      label: "CodeKrafters Website",
      url: "https://codekrafters.tech/",
      description: "Explore our official hub. Discover all domains, projects, and initiatives of CodeKrafters.",
      icon: "🌐",
      tagline: "EXPLORE THE WEB",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/codekrafterssrm.rmp?igsh=ZjcwMHl1dWI3NWlh",
      description: "Follow our daily stories, behind-the-scenes moments, and community highlights.",
      icon: <InstagramLogo />,
      tagline: "FOLLOW THE ACTION",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/codechef-srmrmp/",
      description: "Connect with our team, job opportunities, and professional achievements.",
      icon: <LinkedInLogo />,
      tagline: "BUILD CONNECTIONS",
    },
  ];

  return (
    <Frame>
      <div className="flex min-h-[100vh] flex-col px-4 py-12 sm:px-8 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="mx-auto h-8 w-[2px] bg-foreground/60" />
              <PixelSpider
                size={56}
                suit="classic"
                pose="hanging"
                expression="normal"
                className="mx-auto"
              />
            </div>
          </div>

          <h1 className="text-3xl text-foreground text-glow sm:text-6xl mb-4 font-bold">
            STAY CONNECTED
          </h1>
          <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] mb-3">
            JOIN THE CODEKRAFTERS COMMUNITY
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-8 bg-primary" />
            <div className="h-1 w-8 bg-primary/60" />
            <div className="h-1 w-8 bg-primary/30" />
          </div>
          <p className="text-[9px] sm:text-[10px] text-muted-foreground max-w-md mx-auto leading-6">
            Connect with us across all platforms. Find the best way to stay updated with CodeKrafters activities, projects, and opportunities.
          </p>
        </div>

        {/* Links Container */}
        <div className="max-w-5xl mx-auto w-full flex-1 mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="group relative h-full flex-1"
              >
                {/* Background shimmer effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-none transition-opacity duration-300 pointer-events-none ${
                    hoveredLink === link.label ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Main Card */}
                <div className="relative border-4 border-frame-dark bg-card hover:bg-screen px-6 py-8 sm:px-8 sm:py-10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl h-full flex flex-col">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300" />

                  {/* Icon */}
                  <div
                    className={`mb-4 transition-transform duration-300 flex items-center justify-center h-16 ${
                      hoveredLink === link.label ? "scale-110" : "scale-100"
                    }`}
                  >
                    {typeof link.icon === "string" ? (
                      <span className="text-5xl sm:text-6xl">{link.icon}</span>
                    ) : (
                      link.icon
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-[8px] tracking-[0.3em] text-accent uppercase font-bold mb-3">
                    {link.tagline}
                  </p>

                  {/* Title */}
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-foreground uppercase leading-tight mb-4">
                    {link.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[8px] sm:text-[9px] text-muted-foreground leading-5 mb-6 flex-1">
                    {link.description}
                  </p>

                  {/* CTA Button */}
                  <div className="border-2 border-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 transition-colors">
                    <p className="text-[9px] font-bold text-primary uppercase">
                      VISIT NOW →
                    </p>
                  </div>

                  {/* Hover Corner Accent */}
                  <div
                    className={`absolute bottom-0 right-0 w-12 h-12 border-t-2 border-l-2 border-primary transition-opacity duration-300 ${
                      hoveredLink === link.label ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-auto pt-12 sm:pt-16 border-t-4 border-frame-dark text-center">
          <p className="text-[8px] text-muted-foreground uppercase tracking-[0.2em] mb-6">
            READY TO EXPLORE MORE?
          </p>
          <a
            href="/"
            className="inline-block border-4 border-frame-dark bg-card hover:bg-primary/20 px-8 py-4 text-[10px] text-foreground transition-all hover:-translate-y-1 uppercase font-bold shadow-md hover:shadow-lg"
          >
            ← RETURN TO LAUNCHPAD
          </a>
          <p className="mt-6 text-[7px] text-muted-foreground uppercase tracking-widest">
            CODEKRAFTERS CLUB • CONNECTING THE WEB
          </p>
        </div>
      </div>
    </Frame>
  );
}
