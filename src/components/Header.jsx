import { useState } from "react";
import { NAV, ALL } from "../data/categories";
import { SITE } from "../config/site";
import { useStore } from "../context/StoreContext";
import { whatsappLink } from "../utils/helpers";
import Icon from "./Icon";

function SearchBox({ value, onChange, className = "" }) {
  return (
    <label className={`flex items-center gap-2 rounded-full border border-line bg-white px-4 focus-within:border-forest ${className}`}>
      <Icon name="search" className="h-4 w-4 text-stone-500" />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search marble products..."
        className="w-full bg-transparent py-2.5 text-sm outline-none" />
    </label>
  );
}

function Badge({ n }) {
  if (!n) return null;
  return <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-medium text-white">{n}</span>;
}

export default function Header({ active, onSelect, query, onSearch }) {
  const { cartCount, wish, setCartOpen } = useStore();
  const [drawer, setDrawer] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const go = (item, sub = null) => {
    if (item.type === "whatsapp") {
      window.open(whatsappLink("Hello, mujhe bulk order ke baare me baat karni hai."), "_blank");
      return;
    }
    onSelect({ category: item.slug, sub, label: sub || item.label });
    setDrawer(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:gap-8 md:px-6">
        <button className="md:hidden" onClick={() => setDrawer(true)} aria-label="Menu"><Icon name="menu" className="h-6 w-6" /></button>

        <button onClick={() => onSelect(ALL)} className="font-display text-2xl font-semibold tracking-[0.15em] text-forest md:text-3xl">
          {SITE.name}
        </button>

        <SearchBox value={query} onChange={onSearch} className="mx-auto hidden w-full max-w-xl md:flex" />

        <div className="ml-auto flex items-center gap-5 text-forest">
          <span className="relative hidden sm:block" title="Wishlist"><Icon name="heart" className="h-6 w-6" /><Badge n={wish.length} /></span>
          <button className="relative" onClick={() => setCartOpen(true)} aria-label="Cart">
            <Icon name="cart" className="h-6 w-6" /><Badge n={cartCount} />
          </button>
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden"><SearchBox value={query} onChange={onSearch} /></div>

      {/* Desktop nav: hover pe subcategory */}
      <nav className="hidden md:block">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-1 px-6 pb-2">
          {NAV.map((item) => {
            const isActive = active.category === item.slug;
            return (
              <li key={item.slug} className="group relative">
                <button onClick={() => go(item)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition
                    ${item.highlight ? "font-semibold text-clay" : ""}
                    ${isActive ? "bg-forest text-ivory" : "hover:bg-sage"}`}>
                  {item.label}
                  {item.children && <Icon name="down" className="h-3 w-3" />}
                </button>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[220px] rounded-xl border border-line bg-white p-2 shadow-xl">
                      {item.children.map((c) => (
                        <li key={c}>
                          <button onClick={() => go(item, c)} className="block w-full rounded-lg px-4 py-2.5 text-left text-sm hover:bg-sage">{c}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-xs overflow-y-auto bg-ivory p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-xl font-semibold tracking-[0.15em] text-forest">{SITE.name}</span>
              <button onClick={() => setDrawer(false)}><Icon name="close" className="h-6 w-6" /></button>
            </div>
            <ul>
              {NAV.map((item) => (
                <li key={item.slug} className="border-b border-line">
                  <div className="flex items-center justify-between">
                    <button onClick={() => go(item)} className={`flex-1 py-3.5 text-left text-sm ${item.highlight ? "font-semibold text-clay" : ""}`}>{item.label}</button>
                    {item.children && (
                      <button className="p-2" onClick={() => setOpenItem(openItem === item.slug ? null : item.slug)}>
                        <Icon name={openItem === item.slug ? "minus" : "plus"} className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  {item.children && openItem === item.slug && (
                    <ul className="pb-2 pl-4">
                      {item.children.map((c) => (
                        <li key={c}><button onClick={() => go(item, c)} className="w-full py-2 text-left text-sm text-stone-600">{c}</button></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
