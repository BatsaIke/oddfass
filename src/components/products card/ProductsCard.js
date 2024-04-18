import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa"; // Import the add to cart icon
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import styles from "./ProductCard.module.css"; // Assume you have this CSS module for styling

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent navigation when Add to Cart is clicked
    setIsAnimating(true);
    dispatch(addItemToCart(product));
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Function to navigate to the product details page
  const navigateToProductDetails = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  let displayQuantity;
  if (product.quantity > 1) {
    displayQuantity = "Available";
  } else if (product.quantity === 1) {
    displayQuantity = "1";
  } else {
    displayQuantity = "Out of Stock";
  }

  return (
    <div
      className={`${styles.card} ${isAnimating ? styles.animating : ""}`}
      onClick={navigateToProductDetails}
    >
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.details} id={product.id}>
        <h3>{product.name}</h3>
        {/* Display truncated description */}
        <p>Category: {product.category}</p>
        <p>Price: ₵ {product.price.toFixed(2)}</p>
        <p>Quantity: {displayQuantity}</p>
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCart}
          disabled={product.quantity <= 0} // Disable if out of stock
        >
          <FaCartPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
