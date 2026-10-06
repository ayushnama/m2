export default function Journal() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
        <div className="relative z-10 px-5 py-14 md:px-6 md:py-24">
          <p className="text-sm uppercase tracking-wider text-stone-600">From the Journal</p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-cocoa sm:text-5xl">
            Beauty in simplicity.<br />Purpose in every piece.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-700">
            Hum maante hain ki jo cheezein aap roz use karte hain, wo ghar me calm layein, clutter nahi.
            Har piece function, form aur emotion ka mel hai.
          </p>
          <a href="#collections" className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm">
            Learn more about us <span>→</span>
          </a>
        </div>

        <div className="relative h-72 md:h-full md:min-h-[440px]">
          <img src="/images/journal.png" alt="Marble homeware" className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white md:via-white/10" />
        </div>
      </div>
    </section>
  );
}
