// Naya product = neeche ek object add karo. Kisi component ko chhune ki zaroorat nahi.
// category: menu ka slug | sub: subcategory naam | mrp: original price | price: sale price
// tags: "best-sellers" / "new-arrivals" / "gifts" | hasOptions: true => "from ₹..." dikhega
const img = (n) => `/images/products/${n}.png`;

export const products = [
  { id: 1, name: "Marble Om For Mandir", category: "festive-decor", sub: "Mandir Decor", mrp: 2000, price: 1600, rating: 4.7, reviews: 26, image: img("om"), tags: ["best-sellers"] },
  { id: 2, name: "Marble Swastik For Mandir", category: "festive-decor", sub: "Mandir Decor", mrp: 2000, price: 1600, rating: 4.9, reviews: 21, image: img("swastik"), tags: ["best-sellers"] },
  { id: 3, name: "Marble Rolling Pin With Chakla", category: "kitchen", sub: "Chakla Belan", mrp: 4499, price: 3150, rating: 4.6, reviews: 8, image: img("chakla"), hasOptions: true, tags: ["best-sellers"] },
  { id: 4, name: "Marble Cutlery Holder", category: "kitchen", sub: "Holders", mrp: 5600, price: 3990, rating: 4.8, reviews: 16, image: img("cutlery-holder"), hasOptions: true },
  { id: 5, name: "Marble Sil Batta", category: "kitchen", sub: "Sil Batta", mrp: 1999, price: 1499, rating: 4.5, reviews: 32, image: img("sil-batta"), tags: ["best-sellers"] },
  { id: 6, name: "Marble Khalbatta", category: "kitchen", sub: "Khalbatta", mrp: 1299, price: 999, rating: 4.6, reviews: 19, image: img("khalbatta") },
  { id: 7, name: "Marble Cup", category: "table-decor", sub: "Cups", mrp: 899, price: 699, rating: 4.4, reviews: 11, image: img("cup"), tags: ["new-arrivals"] },
  { id: 8, name: "Marble Serving Tray", category: "table-decor", sub: "Trays", mrp: 2499, price: 1899, rating: 4.7, reviews: 14, image: img("tray"), tags: ["new-arrivals"] },
  { id: 9, name: "Marble Coaster Set", category: "table-decor", sub: "Coasters", mrp: 999, price: 799, rating: 4.8, reviews: 40, image: img("coasters"), tags: ["gifts"] },
  { id: 10, name: "Marble Bowl", category: "table-decor", sub: "Bowls", mrp: 1499, price: 1199, rating: 4.5, reviews: 9, image: img("bowl") },
  { id: 11, name: "Marble Watch", category: "home-bath", sub: "Watches", mrp: 3199, price: 2499, rating: 4.3, reviews: 7, image: img("watch"), tags: ["new-arrivals", "gifts"] },
  { id: 12, name: "Marble Soap Dispenser", category: "home-bath", sub: "Soap Dispensers", mrp: 1199, price: 899, rating: 4.6, reviews: 12, image: img("soap-dispenser") },
];
