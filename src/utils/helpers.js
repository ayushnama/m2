import { SITE } from "../config/site";

export const inr = (n) => `₹${n.toLocaleString("en-IN")}`;
export const discount = (p) => (p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0);
export const whatsappLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export function filterProducts(list, active, query = "") {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    if (q) return p.name.toLowerCase().includes(q);
    const { category, sub } = active;
    if (category === "all") return true;
    if (category === "sale") return discount(p) > 0;
    const inCat = p.category === category || p.tags?.includes(category);
    return inCat && (!sub || p.sub === sub);
  });
}

export function sortProducts(list, sort) {
  const arr = [...list];
  if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
  if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  return arr;
}
