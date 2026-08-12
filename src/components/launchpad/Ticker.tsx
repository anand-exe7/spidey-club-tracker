export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-4 border-frame-dark bg-primary py-2">
      <div className="flex w-max [animation:ticker_28s_linear_infinite]">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="px-6 text-[9px] tracking-widest text-primary-foreground sm:text-[10px]"
          >
            ◼ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
