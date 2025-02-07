// import React, { useState, useEffect } from "react";
// import { Card } from "../Card/Card";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api";
// import { motion, AnimatePresence } from "framer-motion"; // 🎭 ДЛЯ АНИМАЦИИ
// import { Filters } from "../../types/Filters";

// import "./ShopItems.scss";
// import { filterProducts } from "../../types/filterProducts";
// import { sortProducts } from "../../types/sortProducts";
// import { useSearchParams } from "react-router-dom";

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";

//   // Получаем продукты при загрузке
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Ошибка загрузки товаров:", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = filterProducts(products, filters); // Сначала фильтруем
//     updatedProducts = sortProducts(updatedProducts, sortCriteria); // Затем сортируем
//     setFilteredProducts(updatedProducts);
//   }, [filters, sortCriteria, products]);

//   const handleSortChange = (criteria: string) => {
//     const updatedParams = new URLSearchParams(searchParams);
//     updatedParams.set("sort", criteria);
//     setSearchParams(updatedParams);
//   };

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           <button
//             className={`shopItems__control ${sortCriteria === "default" ? "active" : ""}`}
//             // onClick={() => setSortCriteria("default")}
//             onClick={() => handleSortChange("default")}
//           >
//             за замовчуванням
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "price" ? "active" : ""}`}
//             // onClick={() => setSortCriteria("price")}
//             onClick={() => handleSortChange("price")}
//           >
//             ціна
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "name" ? "active" : ""}`}
//             // onClick={() => setSortCriteria("name")}
//             onClick={() => handleSortChange("name")}
//           >
//             назва
//           </button>
//           <button
//             className={`shopItems__control ${sortCriteria === "hit" ? "active" : ""}`}
//             // onClick={() => setSortCriteria("rating")}
//             onClick={() => handleSortChange("rating")}
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

// import React, { useState, useEffect } from "react";
// import { Card } from "../Card/Card";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api";
// import { motion, AnimatePresence } from "framer-motion";
// import { Filters } from "../../types/Filters";
// import { useSearchParams } from "react-router-dom";

// import "./ShopItems.scss";
// import { filterProducts } from "../../types/filterProducts";
// import { sortProducts } from "../../types/sortProducts";
// import { useSwipeable } from "react-swipeable";

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Ошибка загрузки товаров:", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = filterProducts(products, filters);
//     updatedProducts = sortProducts(updatedProducts, sortCriteria);
//     setFilteredProducts(updatedProducts);
//   }, [filters, sortCriteria, products]);

//   const handleSortChange = (criteria: string) => {
//     const updatedParams = new URLSearchParams(searchParams);
//     updatedParams.set("sort", criteria);
//     setSearchParams(updatedParams);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
//   };

//   const handlers = useSwipeable({
//     onSwipedUp: handleNext,
//     onSwipedDown: handlePrev,
//     preventScrollOnSwipe: true,
//     trackTouch: true,
//     trackMouse: false,
//   });

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           {['default', 'price', 'name', 'rating'].map((criteria) => (
//             <button
//               key={criteria}
//               className={`shopItems__control ${sortCriteria === criteria ? "active" : ""}`}
//               onClick={() => handleSortChange(criteria)}
//             >
//               {criteria === 'default' ? 'за замовчуванням' : criteria === 'price' ? 'ціна' : criteria === 'name' ? 'назва' : 'рейтинг'}
//             </button>
//           ))}
//         </div>
//       </div>

//       <motion.div className="shopItems__carousel shopItems__list" {...handlers}>
//   <div className="shopItems__carousel-wrapper">
//     <AnimatePresence>
//       {filteredProducts.length > 0 ? (
//         filteredProducts.slice(currentIndex, currentIndex + 3).map((product) => (
//           <motion.div
//             key={product.id}
//             className="shopItems__carousel-item"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ type: "spring", stiffness: 100 }}
//           >
//             <Card product={product} />
//           </motion.div>
//         ))
//       ) : (
//         <p>Немає доступних товарів...</p>
//       )}
//     </AnimatePresence>
//   </div>
// </motion.div>

//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Card } from "../Card/Card";
// import { Product } from "../../types";
// import { fetchProducts } from "../../api/api";
// import { motion, AnimatePresence } from "framer-motion";
// import { Filters } from "../../types/Filters";
// import { useSearchParams } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";
// import "./ShopItems.scss";
// import { filterProducts } from "../../types/filterProducts";
// import { sortProducts } from "../../types/sortProducts";

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Ошибка загрузки товаров:", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = filterProducts(products, filters);
//     updatedProducts = sortProducts(updatedProducts, sortCriteria);
//     setFilteredProducts(updatedProducts);
//   }, [filters, sortCriteria, products]);

//   const handleSortChange = (criteria: string) => {
//     const updatedParams = new URLSearchParams(searchParams);
//     updatedParams.set("sort", criteria);
//     setSearchParams(updatedParams);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
//   };

//   const handlers = useSwipeable({
//     onSwipedUp: handleNext,
//     onSwipedDown: handlePrev,
//     preventScrollOnSwipe: true,
//     trackTouch: true,
//     trackMouse: false,
//   });

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           {['default', 'price', 'name', 'rating'].map((criteria) => (
//             <button
//               key={criteria}
//               className={`shopItems__control ${sortCriteria === criteria ? "active" : ""}`}
//               onClick={() => handleSortChange(criteria)}
//             >
//               {criteria === 'default' ? 'за замовчуванням' : criteria === 'price' ? 'ціна' : criteria === 'name' ? 'назва' : 'рейтинг'}
//             </button>
//           ))}
//         </div>
//       </div>

//           <motion.div layout className="shopItems__list">
//         <AnimatePresence>
//            {filteredProducts.length > 0 ? (
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

//       <motion.div className="shopItems__carousel"  style={{ overflowY: 'scroll', height: '500px', scrollBehavior: 'smooth' }}{...handlers}>
//   <div className="shopItems__carousel--wrapper"

//   >
//     <AnimatePresence>
//       {filteredProducts.length > 0 ? (
//         filteredProducts.slice(currentIndex, currentIndex + 3).map((product) => (
//           <motion.div
//             key={product.id}
//             className="shopItems__carousel--item"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5, ease: "easeOut"
//             }}
//           >
//             <Card product={product} />
//           </motion.div>
//         ))
//       ) : (
//         <p>Немає доступних товарів...</p>
//       )}
//     </AnimatePresence>
//   </div>

// </motion.div>
// <div className="shopItems__carousel--hint">
//           <p>Проведіть вгору або вниз, щоб гортати</p>
//         </div>
//     </div>

//   );
// };

import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Product } from "../../types";
import { fetchProducts } from "../../api/api";
import { motion, AnimatePresence } from "framer-motion";
import { Filters } from "../../types/Filters";
import { useSearchParams } from "react-router-dom";
import "./ShopItems.scss";
import { filterProducts } from "../../types/filterProducts";
import { sortProducts } from "../../types/sortProducts";

export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortCriteria = searchParams.get("sort") || "default";

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

  useEffect(() => {
    let updatedProducts = filterProducts(products, filters);
    updatedProducts = sortProducts(updatedProducts, sortCriteria);
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
          {["default", "price", "name", "rating"].map((criteria) => (
            <button
              key={criteria}
              className={`shopItems__control ${
                sortCriteria === criteria ? "active" : ""
              }`}
              onClick={() => handleSortChange(criteria)}
            >
              {criteria === "default"
                ? "за замовчуванням"
                : criteria === "price"
                ? "ціна"
                : criteria === "name"
                ? "назва"
                : "рейтинг"}
            </button>
          ))}
        </div>
      </div>

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

      <motion.div className="shopItems__carousel">
        <div className="shopItems__carousel--wrapper">
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div
                key={product.id}
                className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card product={product} />
              </motion.div>
              
              ))
            ) : (
              <p>Немає доступних товарів...</p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>


      <div className="shopItems__carousel--hint">
        <p>Проведіть вгору або вниз, щоб гортати</p>
      </div>
    </div>
  );
};
