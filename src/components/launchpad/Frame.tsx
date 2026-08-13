import type { ReactNode } from "react";

function CornerBadge({ label }: { label: string }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center border-4 border-frame-dark bg-frame-light text-[8px] text-background">
      {label}
    </div>
  );
}

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-2 sm:p-4">
      <div className="relative border-8 border-frame bg-frame/40 p-2 sm:p-3">
        {/* top header pill */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="border-4 border-frame-light bg-background px-3 py-1.5 text-[8px] tracking-widest text-foreground sm:px-4 sm:py-2 sm:text-xs">
            CODEKRAFTERS <span className="text-primary">◼</span> LAUNCHPAD
          </div>
        </div>

        <div className="absolute left-2 top-2 z-20 hidden flex-col gap-2 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center border-4 border-frame-dark bg-frame-light p-1">
            <img
              src="/ck.svg"
              alt="CodeKrafters"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
          <CornerBadge label="01" />
          <CornerBadge label="02" />
        </div>
        <div className="absolute right-2 top-2 z-20 hidden sm:block">
          <CornerBadge label="✦" />
        </div>

        <div className="relative overflow-hidden border-4 border-frame-dark bg-screen screen-scan">
          {children}
        </div>
      </div>
    </div>
  );
}
