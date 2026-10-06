import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function AllProducts({ onAdd }) {
  return (
    <section id="all" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 font-display text-3xl font-medium text-cocoa">
          All Products
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}