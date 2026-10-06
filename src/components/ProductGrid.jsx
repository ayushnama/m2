import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  if (!items.length) return <p className="py-24 text-center text-stone-500">Is category me abhi koi product nahi hai.</p>;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
      {items.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
