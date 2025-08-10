import React, { useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import toast from "react-hot-toast";
import { testProducts } from "../data/testProducts";

const ProductCardDemo = () => {
  const [wishlist, setWishlist] = useState(new Set());

  const handleWishlistToggle = useCallback((productId, isWishlisted) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (isWishlisted) {
        newWishlist.add(productId);
      } else {
        newWishlist.delete(productId);
      }
      return newWishlist;
    });
  }, []);

  const handleQuickView = useCallback((product) => {
    toast.success(`Quick view: ${product.name}`, {
      duration: 2000,
      style: {
        background: "#6366f1",
        color: "#fff",
      },
    });
  }, []);

  const getFilteredProducts = () => {
    return testProducts.map((product) => ({
      ...product,
      isWishlisted: wishlist.has(product.id),
    }));
  };

  const stats = {
    total: testProducts.length,
    inStock: testProducts.filter((p) => p.stock > 0).length,
    onSale: testProducts.filter(
      (p) => p.originalPrice && p.originalPrice > p.price
    ).length,
    topRated: testProducts.filter((p) => p.rating >= 5).length,
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Product Card Demo</h2>
          <hr />
          <p className="text-center text-muted mb-4">
            Interactive product cards with variant selection, wishlist
            functionality, and stock management
          </p>
        </div>
      </div>

      {/* Filter/Stats Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <span className="badge bg-primary me-2">{stats.total} Products</span>
          <span className="badge bg-success me-2">
            {stats.inStock} In Stock
          </span>
          <span className="badge bg-warning me-2">{stats.onSale} On Sale</span>
          <span className="badge bg-info">{stats.topRated} Top Rated</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row justify-content-center">
        {getFilteredProducts().map((product) => (
          <div
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <ProductCard
              product={product}
              onQuickView={handleQuickView}
              onWishlistToggle={handleWishlistToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardDemo;
