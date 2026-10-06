import { useMemo, useState } from "react";
import { products } from "../data/products";
import { NAV, ALL } from "../data/categories";
import { filterProducts, sortProducts } from "../utils/helpers";
import ProductGrid from "../components/ProductGrid";

// Quick filter chips: category ke andar subcategory, nahi to main categories
function getChips(active) {
  const cur = NAV.find((n) => n.slug === active.category);
  if (cur?.children) {
    return [
      { label: `All ${cur.label}`, sel: { category: cur.slug, sub: null, label: cur.label } },
      ...cur.children.map((c) => ({ label: c, sel: { category: cur.slug, sub: c, label: c } })),
    ];
  }
  return [
    { label: "All", sel: ALL },
    ...NAV.filter((n) => !n.type).map((n) => ({ label: n.label, sel: { category: n.slug, sub: null, label: n.label } })),
  ];
}

export default function Collection({ active, query, onSelect }) {
  const [sort, setSort] = useState("featured");
  const items = useMemo(() => sortProducts(filterProducts(products, active, query), sort), [active, query, sort]);
  const chips = getChips(active);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-forest md:text-4xl">
            {query ? `Results for "${query}"` : active.label}
          </h1>
          <p className="mt-1 text-sm text-stone-500">{items.length} products</p>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort"
          className="rounded-full border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-forest">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      {!query && (
        <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
          {chips.map((c) => {
            const on = c.sel.category === active.category && c.sel.sub === active.sub;
            return (
              <button key={c.label} onClick={() => onSelect(c.sel)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition
                  ${on ? "border-forest bg-forest text-ivory" : "border-line bg-white hover:border-forest"}`}>
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      <ProductGrid items={items} />
    </section>
  );
}
