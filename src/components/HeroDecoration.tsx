export function HeroDecoration() {
  return (
    <div className="relative w-full h-[340px] md:h-[420px] select-none" aria-hidden>
      {/* Large background circle */}
      <div className="absolute top-8 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-50 opacity-80" />

      {/* Main accent block */}
      <div className="absolute top-12 left-4 md:left-8 w-56 h-72 md:w-64 md:h-80 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 -rotate-6 shadow-card animate-fade-up">
        {/* Dashboard mockup lines */}
        <div className="absolute inset-6 flex flex-col gap-4 pt-6">
          <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/15" />
          <div className="mt-4 flex gap-3">
            <div className="h-16 w-8 rounded-md bg-white/20" />
            <div className="h-20 w-8 rounded-md bg-white/25" />
            <div className="h-12 w-8 rounded-md bg-white/15" />
            <div className="h-24 w-8 rounded-md bg-white/20" />
            <div className="h-14 w-8 rounded-md bg-white/15" />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-white/10" />
          <div className="h-2 w-1/3 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Secondary floating card */}
      <div className="absolute bottom-4 right-2 md:right-8 w-48 h-32 md:w-56 md:h-36 rounded-2xl bg-card border border-border shadow-card rotate-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100" />
            <div className="h-2.5 w-20 rounded-full bg-muted" />
          </div>
          <div className="h-2 w-full rounded-full bg-muted" />
          <div className="h-2 w-3/4 rounded-full bg-muted" />
          <div className="mt-1 h-6 w-20 rounded-md bg-blue-50" />
        </div>
      </div>

      {/* Small decorative dots */}
      <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-sky-200" />
      <div className="absolute bottom-16 left-0 w-4 h-4 rounded-full bg-blue-200" />
      <div className="absolute top-1/3 right-4 w-2.5 h-2.5 rounded-full bg-blue-300/60" />
    </div>
  )
}