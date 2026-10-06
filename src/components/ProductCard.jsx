import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { discount, inr } from "../utils/helpers";
import Icon from "./Icon";

export default function ProductCard({ product }) {
  const { buyNow, addToCart, toggleWish, isWished } = useStore();
  const [added, setAdded] = useState(false);
  const { name, price, mrp, rating, reviews, image, hasOptions } = product;
  const off = discount(product);
  const wished = isWished(product.id);

  const add = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-2.5 transition hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-sage">
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")} />

        {off > 0 && <span className="absolute left-2 top-2 rounded-full bg-clay px-2.5 py-1 text-xs font-semibold text-white">-{off}%</span>}

        <button onClick={() => toggleWish(product.id)} aria-label="Wishlist"
          className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm transition hover:scale-110">
          <Icon name="heart" fill={wished ? "currentColor" : "none"} className={`h-[18px] w-[18px] ${wished ? "text-clay" : "text-stone-600"}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug">{name}</h3>
        <p className="mt-1 text-xs text-stone-500">
          <span className="text-amber-500">★</span> {rating} <span>({reviews} reviews)</span>
        </p>

        <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg font-semibold text-forest">{hasOptions && <span className="text-xs font-normal text-stone-500">from </span>}{inr(price)}</span>
          {off > 0 && <s className="text-xs text-stone-400">{inr(mrp)}</s>}
        </p>

        <div className="mt-3 flex gap-2">
          <button onClick={() => buyNow(product)}
            className="flex-1 rounded-full bg-forest py-2.5 text-sm font-medium text-ivory transition hover:bg-forest-dark">
            Buy Now
          </button>
          <button onClick={add} aria-label="Add to cart"
            className={`flex w-11 items-center justify-center rounded-full border transition
              ${added ? "border-forest bg-forest text-ivory" : "border-forest/30 text-forest hover:border-forest"}`}>
            {added ? "✓" : <Icon name="cart" className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
    </article>
  );
}
