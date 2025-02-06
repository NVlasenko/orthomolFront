// import React, { useState, useEffect } from "react";
// import { Card } from "../Card/Card";
// import "./ShopItems.scss";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api"; // Assume you have an API function to fetch products.

// export const ShopItems: React.FC = () => {
//   const [sortCriteria, setSortCriteria] = useState<string>("default");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   // Fetch products on component mount
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts(); // Replace with actual fetch logic
//         setProducts(data);
//         setFilteredProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Handle sorting and filtering
//   const handleSort = (criteria: string) => {
//     setSortCriteria(criteria);

//     let sortedAndFiltered = [...products];
//     switch (criteria) {
//       case "price":
//         sortedAndFiltered.sort((a, b) => a.priceRegular - b.priceRegular);
//         break;
//       case "name":
//         sortedAndFiltered.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "rating":
//         sortedAndFiltered = sortedAndFiltered.filter((product) => product.hit === true);
//         break;
//       default:
//         sortedAndFiltered = [...products]; // Reset to original list
//         break;
//     }

//     setFilteredProducts(sortedAndFiltered);
//   };

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           <button
//             className={`shopItems__control ${
//               sortCriteria === "default" ? "active" : ""
//             }`}
//             onClick={() => handleSort("default")}
//           >
//             за замовчуванням
//           </button>
//           <button
//             className={`shopItems__control ${
//               sortCriteria === "price" ? "active" : ""
//             }`}
//             onClick={() => handleSort("price")}
//           >
//             ціна
//           </button>
//           <button
//             className={`shopItems__control ${
//               sortCriteria === "name" ? "active" : ""
//             }`}
//             onClick={() => handleSort("name")}
//           >
//             назва
//           </button>
//           <button
//             className={`shopItems__control ${
//               sortCriteria === "rating" ? "active" : ""
//             }`}
//             onClick={() => handleSort("rating")}
//           >
//             рейтинг
//           </button>
//         </div>
//       </div>
//       <div className="shopItems__list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Card key={product.id} product={product} />
//           ))
//         ) : (
//           <p>Немає доступних товарів...</p>
//         )}
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { Card } from "../Card/Card";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api";
// import { motion, AnimatePresence } from "framer-motion"; // 🎭 ДЛЯ АНИМАЦИИ
// import { Filters } from "../../types/Filters";
// import "./ShopItems.scss";

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [sortCriteria, setSortCriteria] = useState<string>("default");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   // Получаем продукты при загрузке
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//         setFilteredProducts(data);
//       } catch (error) {
//         console.error("Ошибка загрузки товаров:", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   // Функция сортировки
//   const handleSort = (criteria: string) => {
//     setSortCriteria(criteria);
//     let sortedAndFiltered = [...products];

//     switch (criteria) {
//       case "price":
//         sortedAndFiltered.sort((a, b) => a.priceRegular - b.priceRegular);
//         break;
//       case "name":
//         sortedAndFiltered.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "rating":
//         sortedAndFiltered = sortedAndFiltered.filter((product) => product.hit === true);
//         break;
//       default:
//         sortedAndFiltered = [...products]; // Возвращаем все
//         break;
//     }

//     setFilteredProducts(sortedAndFiltered);
//   };

//   useEffect(() => {
//     // Фильтрация продуктов при изменении фильтров
//     const applyFilters = () => {
//       let filtered = [...products];

//       // Применяем фильтры
//       if (filters.priceRange) {
//         filtered = filtered.filter(
//           (product) =>
//             product.priceRegular >= filters.priceRange.min &&
//             product.priceRegular <= filters.priceRange.max
//         );
//       }
//       if (filters.gender !== "all") {
//         filtered = filtered.filter((product) => product.gender === filters.gender);
//       }
//       if (filters.ageCategory !== "all") {
//         filtered = filtered.filter((product) => 
//           product.ageCategory.includes(filters.ageCategory)
//         );
//       }
//       if (filters.purpose !== "all") {
//         filtered = filtered.filter((product) => product.healthCategory.includes(filters.purpose));
//       }
      
//       if (filters.shape !== "all") {
//         filtered = filtered.filter((product) => product.shape === filters.shape);
//       }

//       if (filters.taste !== "all") {
//         filtered = filtered.filter((product) => product.taste === filters.taste);
//       }

//       if (filters.hit) {
//         filtered = filtered.filter((product) => product.hit === true);
//       }      

//       setFilteredProducts(filtered);
//     };

//     applyFilters();
//   }, [filters, products]);

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           <button
//             className={`shopItems__control ${sortCriteria === "default" ? "active" : ""}`}
//             onClick={() => handleSort("default")}
//           >
//             за замовчуванням
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "price" ? "active" : ""}`}
//             onClick={() => handleSort("price")}
//           >
//             ціна
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "name" ? "active" : ""}`}
//             onClick={() => handleSort("name")}
//           >
//             назва
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "rating" ? "active" : ""}`}
//             onClick={() => handleSort("rating")}
//           >
//             рейтинг
//           </button>
//         </div>
//       </div>

//       {/* Список товаров с анимацией */}
//       <motion.div layout className="shopItems__list">
//         <AnimatePresence>
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.5 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <Card product={product} />
//               </motion.div>
//             ))
//           ) : (
//             <p>Немає доступних товарів...</p>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Product } from "../../types";
import { fetchProducts } from "../../api/api";
import { motion, AnimatePresence } from "framer-motion"; // 🎭 ДЛЯ АНИМАЦИИ
import { Filters } from "../../types/Filters";

import "./ShopItems.scss";
import { filterProducts } from "../../types/filterProducts";
import { sortProducts } from "../../types/sortProducts";
import { useSearchParams } from "react-router-dom";

export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
  // const [sortCriteria, setSortCriteria] = useState<string>("default");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortCriteria = searchParams.get("sort") || "default";
  // Получаем продукты при загрузке
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };
    loadProducts();
  }, []);

  // Применяем фильтрацию и сортировку при изменении фильтров или сортировки
  // useEffect(() => {
  //   let filtered = filterProducts(products, filters);
  //   let sorted = sortProducts(filtered, sortCriteria);
  //   setFilteredProducts(sorted);
  // }, [filters, products, sortCriteria]);
  useEffect(() => {
    let updatedProducts = filterProducts(products, filters); // Сначала фильтруем
    updatedProducts = sortProducts(updatedProducts, sortCriteria); // Затем сортируем
    setFilteredProducts(updatedProducts);
  }, [filters, sortCriteria, products]);

  const handleSortChange = (criteria: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("sort", criteria);
    setSearchParams(updatedParams);
  };

  return (
    <div className="shopItems">
      <div className="shopItems__header">
        <h2 className="shopItems__title">Сортування:</h2>
        <div className="shopItems__controls">
          <button
            className={`shopItems__control ${sortCriteria === "default" ? "active" : ""}`}
            // onClick={() => setSortCriteria("default")}
            onClick={() => handleSortChange("default")}
          >
            за замовчуванням
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "price" ? "active" : ""}`}
            // onClick={() => setSortCriteria("price")}
            onClick={() => handleSortChange("price")}
          >
            ціна
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "name" ? "active" : ""}`}
            // onClick={() => setSortCriteria("name")}
            onClick={() => handleSortChange("name")}
          >
            назва
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "hit" ? "active" : ""}`}
            // onClick={() => setSortCriteria("rating")}
            onClick={() => handleSortChange("rating")}
          >
            рейтинг
          </button>
        </div>
      </div>

      {/* Список товаров с анимацией */}
      <motion.div layout className="shopItems__list">
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <Card product={product} />
              </motion.div>
            ))
          ) : (
            <p>Немає доступних товарів...</p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
