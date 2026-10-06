import { useStore } from "../context/StoreContext";
import { inr, whatsappLink } from "../utils/helpers";
import { SITE } from "../config/site";
import Icon from "./Icon";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartTotal, setQty, removeItem } = useStore();
  if (!cartOpen) return null;

  const message = `Hello ${SITE.name}, mujhe ye order karna hai:\n` +
    cart.map((i) => `• ${i.name} x ${i.qty} = ${inr(i.price * i.qty)}`).join("\n") +
    `\n\nTotal: ${inr(cartTotal)}`;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl">
        <div className="flex items-center justify-between border-b border-line p-5">
          <h2 className="font-display text-2xl font-semibold text-forest">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Close"><Icon name="close" className="h-6 w-6" /></button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {!cart.length && <p className="pt-16 text-center text-stone-500">Cart khali hai.</p>}
          {cart.map((i) => (
            <div key={i.id} className="flex gap-4 rounded-xl border border-line bg-white p-3">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-sage">
                <img src={i.image} alt="" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
              </div>
              <div className="flex-1 text-sm">
                <p className="font-medium">{i.name}</p>
                <p className="mt-0.5 text-forest">{inr(i.price)}</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-line">
                    <button className="p-1.5" onClick={() => setQty(i.id, i.qty - 1)}><Icon name="minus" className="h-3.5 w-3.5" /></button>
                    <span className="w-6 text-center">{i.qty}</span>
                    <button className="p-1.5" onClick={() => setQty(i.id, i.qty + 1)}><Icon name="plus" className="h-3.5 w-3.5" /></button>
                  </div>
                  <button onClick={() => removeItem(i.id)} className="text-xs text-stone-500 underline">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-line bg-white p-5">
            <div className="mb-4 flex justify-between text-lg font-semibold"><span>Total</span><span className="text-forest">{inr(cartTotal)}</span></div>
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer"
              className="block rounded-full bg-forest py-3.5 text-center text-sm font-medium text-ivory transition hover:bg-forest-dark">
              Order on WhatsApp
            </a>
            <p className="mt-2 text-center text-xs text-stone-500">Shipping aur payment WhatsApp pe confirm hoga.</p>
          </div>
        )}
      </aside>
    </div>
  );
}
