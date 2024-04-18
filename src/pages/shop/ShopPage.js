import React, { useState, useEffect } from 'react';
import CategoriesSidebar from '../../components/categories/CategoriesSideBar';
import Spinner from '../../UI/Spinner';
import ProductCard from '../../components/products card/ProductsCard';
import styles from './ShopPage.module.css';
import Pagination from '../../components/pagination/Pagination';
import generateDummyProducts from '../../utils/dummyData';
import { useSearchParams } from 'react-router-dom';
import { FaCandyCane, FaSeedling, FaTools, FaWineBottle } from 'react-icons/fa';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const limit = 16; // Show 16 products per page

  useEffect(() => {
    const allProducts = generateDummyProducts();
    setProducts(allProducts);
  }, []);

  // Filter and sort products based on the current state
  const filteredProducts = products
    .filter(prod => category ? prod.category === category : true)
    .filter(prod => searchTerm ? prod.name.toLowerCase().includes(searchTerm.toLowerCase()) : true);

  // Assuming sorting by price (ascending)
  filteredProducts.sort((a, b) => sort === 'price_asc' ? a.price - b.price : b.price - a.price);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / limit);

  // Get current page products
  const currentProducts = filteredProducts.slice((currentPage - 1) * limit, currentPage * limit);

  if (!products.length) return <Spinner />;
  
  return (
    <div className={styles.shopageContainer}>
      <CategoriesSidebar
        categories={[
          { name: "Climate Control", icon: FaSeedling },
          { name: "Home Security and Safety", icon: FaTools },
          { name: "Lighting and Electrical", icon: FaCandyCane },
          { name: "Kitchen and Cleaning Appliances", icon: FaWineBottle }
        ]}
        onCategorySelect={setSearchParams}
        onSortChange={setSort}
        onPriceFilterChange={setPriceRange}
      />
      <div className={styles.pageDiv}>
        <div className={styles.productsGrid}>
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
};

export default ShopPage;
