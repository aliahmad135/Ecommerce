import React, { useEffect } from "react";
import { Navbar, Footer, ProductCardDemo } from "../components";

const ProductCardDemoPage = () => {
  useEffect(() => {
    document.title = "Modern Product Cards - Material Design Demo";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Interactive product card demo featuring Material Design, glassmorphism effects, wishlist functionality, and responsive design."
      );
    }

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />
      <ProductCardDemo />
      <Footer />
    </>
  );
};

export default ProductCardDemoPage;
