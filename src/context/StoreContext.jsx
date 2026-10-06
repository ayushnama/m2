import { createContext, useContext, useEffect, useMemo, useState } from "react";

const Ctx = createContext(null);
const read = (k) => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read("mb_cart"));
  const [wish, setWish] = useState(() => read("mb_wish"));
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => write("mb_cart", cart), [cart]);
  useEffect(() => write("mb_wish", wish), [wish]);

  const value = useMemo(() => ({
    cart, wish, cartOpen, setCartOpen,
    cartCount: cart.reduce((s, i) => s + i.qty, 0),
    cartTotal: cart.reduce((s, i) => s + i.qty * i.price, 0),
    addToCart: (p) => setCart((c) => c.some((i) => i.id === p.id)
      ? c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      : [...c, { ...p, qty: 1 }]),
    buyNow: (p) => {
      setCart((c) => c.some((i) => i.id === p.id) ? c : [...c, { ...p, qty: 1 }]);
      setCartOpen(true);
    },
    setQty: (id, qty) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0)),
    removeItem: (id) => setCart((c) => c.filter((i) => i.id !== id)),
    toggleWish: (id) => setWish((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id])),
    isWished: (id) => wish.includes(id),
  }), [cart, wish, cartOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useStore = () => useContext(Ctx);
