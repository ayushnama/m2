import { SITE } from "../config/site";
import { whatsappLink } from "../utils/helpers";

const links = ["Shipping & Returns", "Track Order", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="mt-20 bg-forest text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-6">
        <div>
          <span className="font-display text-3xl font-semibold tracking-[0.15em] text-ivory">{SITE.name}</span>
          <p className="mt-3 max-w-xs text-sm">Timeless marble pieces for a more beautiful everyday.</p>
        </div>
        <ul className="space-y-2 text-sm">
          {links.map((l) => <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
        </ul>
        <ul className="space-y-2 text-sm">
          <li>📞 {SITE.phone}</li><li>✉️ {SITE.email}</li>
        </ul>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
      <a href={whatsappLink("Hello!")} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl shadow-lg transition hover:scale-110">💬</a>
    </footer>
  );
}
