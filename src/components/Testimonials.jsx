const reviews = [
  { name: "Olivia M.", stars: 5, text: "Quality kamaal ki hai aur design bilkul timeless. Ghar calm aur khoobsurat lagta hai." },
  { name: "Daniel K.", stars: 5, text: "Packing ekdum perfect thi. Har detail me care aur mehnat dikhti hai." },
  { name: "Sophia L.", stars: 4, text: "Minimal, functional aur stunning. Gifting aur apne ghar dono ke liye meri pehli pasand." },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f1efec] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <h2 className="text-center font-display text-3xl font-medium text-cocoa md:text-4xl">Loved by our community</h2>
        <p className="mt-2 text-center text-sm text-stone-600">Real stories from customers who bring Marbella into their everyday</p>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {reviews.map((r) => (
            <div key={r.name} className="w-[85%] shrink-0 snap-center rounded-lg bg-white p-6 md:w-auto">
              <div className="text-sm tracking-widest">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <span className="mt-3 block font-display text-3xl leading-none">“</span>
              <p className="font-display text-lg leading-snug">{r.text}</p>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-xs font-medium">{r.name[0]}</span>
                <span>— {r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
