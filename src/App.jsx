import { useState } from "react";
import { StoreProvider } from "./context/StoreContext";
import { ALL } from "./data/categories";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";

export default function App() {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");

  const select = (a) => {
    setActive(a);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StoreProvider>
      <AnnouncementBar />
      <Header active={active} onSelect={select} query={query} onSearch={setQuery} />
      <main><Collection active={active} query={query} onSelect={select} /></main>
      <Footer />
      <CartDrawer />
    </StoreProvider>
  );
}
