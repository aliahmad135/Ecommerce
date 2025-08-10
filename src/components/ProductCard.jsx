import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";

const ProductCard = ({ product, onWishlistToggle }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.length > 0 ? product.variants[0] : null
  );
  const [isWishlisted, setIsWishlisted] = useState(
    product.isWishlisted || false
  );
  const dispatch = useDispatch();

  const addProduct = useCallback(
    (productToAdd) => {
      dispatch(addCart(productToAdd));
      toast.success(`${productToAdd.name} added to cart!`, {
        duration: 3000,
        style: {
          background: "#10b981",
          color: "#fff",
        },
      });
    },
    [dispatch]
  );

  const isOutOfStock = product.stock === 0 || selectedVariant?.stock === 0;
  const currentPrice = selectedVariant?.price || product.price;
  const originalPrice = product.originalPrice;
  const currentStock = selectedVariant?.stock || product.stock;
  const hasDiscount = originalPrice && originalPrice > currentPrice;
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const handleVariantChange = useCallback((variant) => {
    setSelectedVariant(variant);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (isOutOfStock) return;

    const productToAdd = {
      ...product,
      price: currentPrice,
      variant: selectedVariant,
      stock: currentStock,
    };
    addProduct(productToAdd);
  }, [
    product,
    currentPrice,
    selectedVariant,
    currentStock,
    isOutOfStock,
    addProduct,
  ]);

  const handleWishlistClick = useCallback(
    (e) => {
      e.stopPropagation();
      setIsWishlisted(!isWishlisted);
      onWishlistToggle?.(product.id, !isWishlisted);
      toast.success(
        isWishlisted ? "Removed from wishlist" : "Added to wishlist",
        { duration: 2000 }
      );
    },
    [isWishlisted, onWishlistToggle, product.id]
  );

  const renderStarRating = () => {
    const rating = product.rating || 0;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`product-card__star ${
            i <= rating ? "product-card__star--filled" : ""
          }`}
        >
          ★
        </span>
      );
    }

    return (
      <div className="product-card__rating">
        <div className="product-card__stars">{stars}</div>
        <span className="product-card__rating-count">
          ({product.reviewCount || 0})
        </span>
      </div>
    );
  };

  return (
    <div
      className={`card text-center h-100 ${isOutOfStock ? "opacity-75" : ""}`}
    >
      <div className="position-relative">
        <img
          className="card-img-top p-3"
          src={product.image}
          alt={product.name}
          height={300}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />

        {hasDiscount && (
          <span className="position-absolute top-0 start-0 badge bg-danger m-2">
            -{discountPercentage}%
          </span>
        )}

        {isOutOfStock && (
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
            <span className="badge bg-secondary fs-6">Out of Stock</span>
          </div>
        )}

        <div className="position-absolute top-0 end-0 m-2">
          <button
            className={`btn btn-sm btn-outline-light rounded-circle me-1 ${
              isWishlisted ? "text-danger" : ""
            }`}
            onClick={handleWishlistClick}
            style={{ width: "35px", height: "35px" }}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <i className={`fa${isWishlisted ? "s" : "r"} fa-heart`}></i>
          </button>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {product.name.length > 50
            ? `${product.name.substring(0, 50)}...`
            : product.name}
        </h5>

        {product.category && (
          <small className="text-muted text-uppercase mb-2">
            {product.category}
          </small>
        )}

        {product.rating && <div className="mb-2">{renderStarRating()}</div>}

        <div className="mb-3">
          <span className="h5 text-dark mb-0">${currentPrice.toFixed(2)}</span>
          {hasDiscount && (
            <small className="text-muted text-decoration-line-through ms-2">
              ${originalPrice.toFixed(2)}
            </small>
          )}
        </div>

        {product.variants?.length > 0 && (
          <div className="mb-3">
            <small className="text-muted d-block mb-1">
              {product.variantType || "Options"}:
            </small>
            <div className="btn-group-sm" role="group">
              {product.variants.slice(0, 3).map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  className={`btn btn-sm me-1 mb-1 ${
                    selectedVariant?.id === variant.id
                      ? "btn-dark"
                      : variant.stock === 0
                      ? "btn-outline-secondary"
                      : "btn-outline-dark"
                  }`}
                  onClick={() => handleVariantChange(variant)}
                  disabled={variant.stock === 0}
                  title={variant.stock === 0 ? "Out of stock" : variant.name}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto">
          {currentStock > 0 && currentStock <= 5 && (
            <small className="text-warning d-block mb-2">
              <i className="fa fa-exclamation-triangle"></i>
              {currentStock <= 3 ? " Low stock!" : ` Only ${currentStock} left`}
            </small>
          )}

          <button
            className={`btn ${
              isOutOfStock ? "btn-secondary" : "btn-dark"
            } w-100`}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
