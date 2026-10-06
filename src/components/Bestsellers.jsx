import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Bestsellers({ onAdd }) {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-2xl font-medium text-cocoa">Shop Bestsellers</h2>
        <a href="#all" className="text-xs font-medium hover:text-cocoa/60">View all →</a>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>

        <div className="hidden flex-col justify-center lg:flex">
          <span className="font-display text-4xl text-cocoa">“</span>
          <p className="font-display text-2xl leading-snug text-cocoa">
            Simplicity is the ultimate sophistication.
          </p>
          <p className="mt-4 text-xs text-stone-500">— Leonardo da Vinci</p>
        </div>
      </div>
    </section>
  );
}