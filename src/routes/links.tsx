import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/launchpad/Frame";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

function LinksPage() {
  const links = [
    { label: "CodeKrafters Website", url: "https://codekrafters.tech/" },
    { label: "Instagram", url: "https://www.instagram.com/codekrafterssrm.rmp?igsh=ZjcwMHl1dWI3NWlh" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/codechef-srmrmp/" }
  ];

  return (
    <Frame>
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-3xl text-foreground text-glow sm:text-5xl mb-12">CONNECT</h1>
        <div className="flex flex-col gap-6 w-full max-w-sm">
          {links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-frame-light bg-primary px-6 py-4 text-[10px] text-primary-foreground transition-transform hover:-translate-y-1 sm:text-xs font-bold text-center uppercase shadow-md"
            >
              {link.label} →
            </a>
          ))}
        </div>
        <div className="mt-16 text-[8px] text-muted-foreground uppercase tracking-widest">
          <a href="/" className="hover:text-primary transition-colors">← RETURN TO LAUNCHPAD</a>
        </div>
      </div>
    </Frame>
  );
}
