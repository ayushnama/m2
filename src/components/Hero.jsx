import { useEffect, useState } from "react";

const slides = [
  { label: "New Collection", title: ["Marble", "by design."], image: "/images/hero.png",
    text: "Hand-crafted marble cups, sil batta, khalbatta aur homeware for a better everyday." },
  { label: "Kitchen Essentials", title: ["Crafted for", "every meal."], image: "/images/hero2.png",
    text: "Sil batta, chakla belan aur khalbatta, pathar ki asli quality ke saath." },
  { label: "Home Decor", title: ["Stone that", "tells a story."], image: "/images/hero3.png",
    text: "Trays, coasters aur watches jo aapke ghar ko calm aur elegant banate hain." },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 pt-10 md:min-h-[80vh] md:grid-cols-2 md:gap-8 md:px-6 md:pt-0">
        <div className="md:py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-cocoa/70">{s.label}</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
            {s.title[0]}<br />{s.title[1]}
          </h1>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-600">{s.text}</p>
          <a href="#shop" className="mt-7 inline-flex items-center gap-3 bg-ink px-6 py-3 text-sm text-white transition hover:bg-cocoa">
            Shop Collection <span>→</span>
          </a>

          <div className="mt-10 flex items-center gap-3 text-xs md:mt-24">
            <span className="font-semibold">{String(i + 1).padStart(2, "0")}</span>
            <span className="relative h-px w-16 bg-ink/20">
              <span className="absolute left-0 top-0 h-px bg-ink transition-all duration-500"
                style={{ width: `${((i + 1) / slides.length) * 100}%` }} />
            </span>
            <span className="text-stone-500">{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="flex items-end justify-center">
          <img key={i} src={s.image} alt={s.title.join(" ")}
            className="max-h-[300px] w-full object-contain md:max-h-[520px]"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/h1.png"; }} />
        </div>
      </div>
    </section>
  );
}
