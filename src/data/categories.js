// Menu yahin se banta hai. Naya category/subcategory = bas ek line add karo.
// "slug" product ki `category` field se match hona chahiye.
export const ALL = { category: "all", sub: null, label: "All Products" };

export const NAV = [
  { label: "Best Sellers", slug: "best-sellers" },
  { label: "Sale", slug: "sale", highlight: true },
  { label: "New Arrivals", slug: "new-arrivals" },
  { label: "Table Decor", slug: "table-decor", children: ["Bowls", "Trays", "Coasters", "Cups"] },
  { label: "Festive Decor", slug: "festive-decor", children: ["Mandir Decor", "Diyas", "Idols"] },
  { label: "Home & Bath", slug: "home-bath", children: ["Soap Dispensers", "Bath Sets", "Watches"] },
  { label: "Kitchen Essentials", slug: "kitchen", children: ["Sil Batta", "Khalbatta", "Chakla Belan", "Holders"] },
  { label: "Gifts", slug: "gifts" },
  { label: "Bulk Enquiry", slug: "bulk", type: "whatsapp" },
];
