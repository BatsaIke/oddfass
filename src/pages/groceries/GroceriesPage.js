import React from 'react';
import styles from './GroceriesPage.module.css';  // Ensure you have appropriate CSS for this page
import generateDummyProducts from '../../utils/dummyData';
import HomeProducts from '../../components/home products/HomeProducts';

const GroceriesPage = () => {
  // Generate products statically
  const allProducts = generateDummyProducts();

  // Filter products to show only groceries
  const groceryProducts = allProducts.filter(product => product.category === "Groceries");

  return (
    <div className={styles.groceriesContainer}>
      <h1 className={styles.heading}>Groceries</h1>
      <HomeProducts products={groceryProducts} />
    </div>
  );
};

export default GroceriesPage;
