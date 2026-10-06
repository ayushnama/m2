import { products } from "../data/products";

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
      <h2 className="mb-10 text-center font-display text-3xl font-medium text-cocoa md:text-4xl">
        All of our collections
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <a href="#shop" key={p.id} className="group block text-center">
            <div className="flex aspect-square items-center justify-center bg-white">
              <img src={p.image} alt={p.name} loading="lazy"
                className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
                onError={(e) => (e.currentTarget.style.display = "none")} />
            </div>
            <p className="mt-2 text-sm">{p.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
