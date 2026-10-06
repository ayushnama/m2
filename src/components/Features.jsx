const I = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#1f2a44]" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items = [
  { d: "M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", t: "Free Shipping", s: "On all orders over ₹1,999" },
  { d: "M12 21a8 8 0 100-16 8 8 0 000 16zM12 9v4l2 2M4 5l3-2M20 5l-3-2", t: "7-Day Returns", s: "Tootne par replacement" },
  { d: "M6 11h12v9H6zM8 11V8a4 4 0 118 0v3", t: "Secure Checkout", s: "100% protected payments" },
  { d: "M12 3l2.5 2 3.2-.3.9 3.1 2.7 1.8-1.2 3 1.2 3-2.7 1.8-.9 3.1-3.2-.3L12 21l-2.5-2-3.2.3-.9-3.1L2.7 14.4l1.2-3-1.2-3 2.7-1.8.9-3.1 3.2.3L12 3zM9 12l2 2 4-4", t: "Made to Last", s: "Asli marble, quality checked" },
];

export default function Features() {
  return (
    <section className="bg-[#f6f4f1]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-6">
        {items.map((f, idx) => (
          <div key={f.t} className={`md:px-8 ${idx > 0 ? "md:border-l md:border-[#c9cfe0]" : "md:pl-0"} ${idx % 2 ? "pl-4" : ""}`}>
            <I d={f.d} />
            <h3 className="mt-4 text-sm font-medium md:text-base">{f.t}</h3>
            <p className="mt-1 text-xs text-stone-600 md:text-sm">{f.s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
