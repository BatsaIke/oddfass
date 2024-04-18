import React, { useState } from "react";
import CategoriesSidebar from "../categories/CategoriesSideBar";
import HomeProducts from "./HomeProducts";
import styles from "./Homepage.module.css";
import { useSearchParams } from "react-router-dom";
import Slider from "../slider/Slider";
import Spinner from "../../UI/Spinner";


import image1 from "../../images/5.jpeg";
import image2 from "../../images/6.jpg";
import image3 from "../../images/7.jpg"
import generateDummyProducts from "../../utils/dummyData";
import { FaCandyCane, FaSeedling, FaShoppingBasket, FaTools, FaWineBottle } from "react-icons/fa";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");
const image4 ='https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_640.png'
  const images = [image1,image4, image2, image3, ]; // Ensure these images are correctly imported
  const allProducts = generateDummyProducts(); // Generate products statically

  // Filter products based on search terms, categories, and price range
  const filteredProducts = allProducts.filter(product => {
    return (category ? product.category === category : true)
      && (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
      && (priceRange ? (product.price >= priceRange.min && product.price <= priceRange.max) : true);
  });

  const handleCategorySelect = (category) => {
    setSearchParams({ page: "1", category, search: searchTerm, priceRange, sort });
  };

  const handleSortChange = (sortValue) => {
    setSort(sortValue);
    setSearchParams({ page: "1", category, search: searchTerm, priceRange, sort: sortValue });
  };

  const handlePriceFilterChange = (newRange) => {
    setPriceRange(newRange);
    setSearchParams({ page: "1", category, search: searchTerm, priceRange: newRange, sort });
  };

  // Implement sorting based on the sort state
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sort === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Slider images={images} />
      <div className={styles.homepageContainer}>
      <CategoriesSidebar
  categories={[
    { name: "Climate Control", icon: FaSeedling },
    { name: "Home Security and Safety", icon: FaTools },
    { name: "Lighting and Electrical", icon: FaCandyCane },
    { name: "Kitchen and Cleaning Appliances", icon: FaWineBottle },
    { name: "Groceries", icon: FaShoppingBasket } 

  ]}
  onCategorySelect={handleCategorySelect}
  onSortChange={handleSortChange}
  onPriceFilterChange={handlePriceFilterChange}
/>
        <HomeProducts products={sortedProducts.slice((page - 1) * 32, page * 32)} />
      </div>
    </>
  );
};

export default Homepage;
