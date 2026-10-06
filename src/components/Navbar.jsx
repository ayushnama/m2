import { useState } from "react";

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#about" },
];

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:grid md:grid-cols-3">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
        </button>

        <a href="#" className="font-display text-xl font-semibold tracking-[0.2em] md:text-2xl">
          MARBELLA
        </a>

        <ul className="hidden justify-center gap-10 text-sm md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition hover:text-cocoa/60">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4 md:gap-5">
          <Icon d="M21 21l-4.3-4.3M11 18a7 7 0 100-14 7 7 0 000 14z" />
          <div className="relative">
            <Icon d="M6 7h12l1 13H5L6 7zM9 7a3 3 0 016 0" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="hidden sm:block"><Icon d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" /></span>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-stone-100 bg-white px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
