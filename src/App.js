import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/categories/Categories";
import ProductGrid from "./components/product/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import Testimonials from "./components/testimonials/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
     <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Header
        cartCount={cartCount}
        onSearchToggle={() => setSearchOpen(!searchOpen)}
      />
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <HeroSection />
      <Categories />
      <ProductGrid onAddToCart={handleAddToCart} />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
