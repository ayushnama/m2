import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // TODO: backend API se connect karna
    setDone(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <img src="/images/pampas-left.png" alt="" className="absolute bottom-0 left-0 w-24 sm:w-40 md:w-64"
        onError={(e) => (e.currentTarget.style.display = "none")} />
      <img src="/images/pampas-right.png" alt="" className="absolute bottom-0 right-0 w-24 sm:w-40 md:w-64"
        onError={(e) => (e.currentTarget.style.display = "none")} />

      <div className="relative mx-auto max-w-md px-6 text-center">
        <h2 className="font-display text-4xl font-medium text-cocoa md:text-5xl">Stay in the loop</h2>
        <p className="mt-4 text-sm leading-relaxed text-stone-700">
          Be the first to know about new collections, exclusive offers, and design inspiration.
        </p>
        <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 border border-stone-300 px-4 py-3 text-sm outline-none focus:border-ink" />
          <button className="bg-ink px-6 py-3 text-sm text-white transition hover:bg-cocoa">Subscribe</button>
        </form>
        <p className="mt-4 text-xs text-stone-600">
          {done ? "Thank you! Aap subscribe ho gaye." : "No spam, unsubscribe anytime."}
        </p>
      </div>
    </section>
  );
}
