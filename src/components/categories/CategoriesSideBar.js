import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import styles from "./CategoriesSidebar.module.css";

const CategoriesSidebar = ({
  categories = [],
  onCategorySelect = () => {},
  onSortChange = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsActive(true); // Always open on large screens
      } else {
        setIsActive(false); // Allow toggle on small screens
      }
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategorySelectInternal = (category) => {
    setIsActive(false);
    onCategorySelect(category);
  };

  const handleSortChangeInternal = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <>
      <button className={styles.toggleButton} onClick={() => setIsActive(!isActive)}>
        <IoMenu /> Categories
      </button>

      <aside className={`${styles.sidebar} ${isActive ? styles.active : ""}`}>
        <h2 className={styles.categoryHeader}>Filter by</h2>
        <ul className={styles.categoriesList}>
          <li
            className={styles.categoryItem}
            onClick={() => handleCategorySelectInternal("")}
          >
            <IoMenu /> All
          </li>
          {categories.map((cat) => (
            <li
              key={cat.name}
              className={styles.categoryItem}
              onClick={() => handleCategorySelectInternal(cat.name)}
            >
              {React.createElement(cat.icon)} {cat.name}
            </li>
          ))}
        </ul>
        <div className={styles.filterSection}>
          <div className={styles.filterTitle}>Sort by</div>
          <select className={styles.sortSelect} onChange={handleSortChangeInternal}>
            <option value="createdAt_desc">Newest</option>
            <option value="createdAt_asc">Oldest</option>
            <option value="price_asc">Price Low to High</option>
            <option value="price_desc">Price High to Low</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default CategoriesSidebar;
