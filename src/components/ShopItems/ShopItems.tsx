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
import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Product } from "../../types";
import { fetchProducts } from "../../api/api";
import { motion, AnimatePresence } from "framer-motion"; // 🎭 ДЛЯ АНИМАЦИИ
import "./ShopItems.scss";

export const ShopItems: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<string>("default");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Получаем продукты при загрузке
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };
    loadProducts();
  }, []);

  // Функция сортировки
  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
    let sortedAndFiltered = [...products];

    switch (criteria) {
      case "price":
        sortedAndFiltered.sort((a, b) => a.priceRegular - b.priceRegular);
        break;
      case "name":
        sortedAndFiltered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        sortedAndFiltered = sortedAndFiltered.filter((product) => product.hit === true);
        break;
      default:
        sortedAndFiltered = [...products]; // Возвращаем все
        break;
    }

    setFilteredProducts(sortedAndFiltered);
  };

  return (
    <div className="shopItems">
      <div className="shopItems__header">
        <h2 className="shopItems__title">Сортування:</h2>
        <div className="shopItems__controls">
          <button
            className={`shopItems__control ${sortCriteria === "default" ? "active" : ""}`}
            onClick={() => handleSort("default")}
          >
            за замовчуванням
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "price" ? "active" : ""}`}
            onClick={() => handleSort("price")}
          >
            ціна
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "name" ? "active" : ""}`}
            onClick={() => handleSort("name")}
          >
            назва
          </button>
          <button
            className={`shopItems__control ${sortCriteria === "rating" ? "active" : ""}`}
            onClick={() => handleSort("rating")}
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
                transition={{ duration: 2 }}
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
