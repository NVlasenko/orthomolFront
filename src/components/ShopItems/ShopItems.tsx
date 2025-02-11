// // import React, { useState, useEffect } from "react";
// // import { Card } from "../Card/Card";
// // import { Product } from "../../types";
// // import { fetchProducts } from "../../api/api";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Filters } from "../../types/Filters";
// // import { useSearchParams } from "react-router-dom";
// // import "./ShopItems.scss";
// // import { filterProducts } from "../../types/filterProducts";
// // import { sortProducts } from "../../types/sortProducts";

// // export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const sortCriteria = searchParams.get("sort") || "default";

// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const data = await fetchProducts();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Ошибка загрузки товаров:", error);
// //       }
// //     };
// //     loadProducts();
// //   }, []);

// //   useEffect(() => {
// //     let updatedProducts = filterProducts(products, filters);
// //     updatedProducts = sortProducts(updatedProducts, sortCriteria);
// //     setFilteredProducts(updatedProducts);
// //   }, [filters, sortCriteria, products]);

// //   const handleSortChange = (criteria: string) => {
// //     const updatedParams = new URLSearchParams(searchParams);
// //     updatedParams.set("sort", criteria);
// //     setSearchParams(updatedParams);
// //   };

// //   return (
// //     <div className="shopItems">
// //       <div className="shopItems__header">
// //         <h2 className="shopItems__title">Сортування:</h2>
// //         <div className="shopItems__controls">
// //           {["default", "price", "name", "rating"].map((criteria) => (
// //             <button
// //               key={criteria}
// //               className={`shopItems__control ${
// //                 sortCriteria === criteria ? "active" : ""
// //               }`}
// //               onClick={() => handleSortChange(criteria)}
// //             >
// //               {criteria === "default"
// //                 ? "за замовчуванням"
// //                 : criteria === "price"
// //                 ? "ціна"
// //                 : criteria === "name"
// //                 ? "назва"
// //                 : "рейтинг"}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <motion.div layout className="shopItems__list">
// //         <AnimatePresence>
// //           {filteredProducts.length > 0 ? (
// //             filteredProducts.map((product) => (
// //               <motion.div
// //                 key={product.id}
// //                 layout
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.5 }}
// //                 transition={{ duration: 0.8 }}
// //               >
// //                 <Card product={product} />
// //               </motion.div>
// //             ))
// //           ) : (
// //             <p>Немає доступних товарів...</p>
// //           )}
// //         </AnimatePresence>
// //       </motion.div>

// //       <motion.div className="shopItems__carousel">
// //         <div className="shopItems__carousel--wrapper">
// //           <AnimatePresence>
// //             {filteredProducts.length > 0 ? (
// //               filteredProducts.map((product, index) => (
// //                 <motion.div
// //                 key={product.id}
// //                 className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
// //                 initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
// //                 animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
// //                 exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
// //                 transition={{ duration: 0.5, ease: "easeOut" }}
// //               >
// //                 <Card product={product} />
// //               </motion.div>

// //               ))
// //             ) : (
// //               <p>Немає доступних товарів...</p>
// //             )}
// //           </AnimatePresence>

// //         </div>
// //       </motion.div>

// //       <div className="shopItems__carousel--hint">
// //         <p>Проведіть вгору або вниз, щоб гортати</p>
// //       </div>
// //     </div>
// //   );
// // };

// // import React, { useState, useEffect } from "react";
// // import { Card } from "../Card/Card";
// // import { Product } from "../../types";
// // import { fetchProducts } from "../../api/api";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Filters } from "../../types/Filters";
// // import { useSearchParams } from "react-router-dom";
// // import "./ShopItems.scss";
// // import { filterProducts } from "../../types/filterProducts";
// // import { sortProducts } from "../../types/sortProducts";

// // export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const sortCriteria = searchParams.get("sort") || "default";

// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const data = await fetchProducts();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Ошибка загрузки товаров:", error);
// //       }
// //     };
// //     loadProducts();
// //   }, []);

// //   useEffect(() => {
// //     let updatedProducts = filterProducts(products, filters);
// //     updatedProducts = sortProducts(updatedProducts, sortCriteria);
// //     setFilteredProducts(updatedProducts);
// //   }, [filters, sortCriteria, products]);

// //   const handleSortChange = (criteria: string) => {
// //     const updatedParams = new URLSearchParams(searchParams);
// //     updatedParams.set("sort", criteria);
// //     setSearchParams(updatedParams);
// //   };

// //   return (
// //     <div className="shopItems">
// //    <div className="shopItems__header">
// //   <h2 className="shopItems__title">Сортування:</h2>

// //   {/* Горизонтальная прокрутка сортировки */}
// //   <div className="shopItems__controls">
// //     <div className="shopItems__scroll">
// //       {["default", "price", "name", "rating"].map((criteria) => (
// //         <button
// //           key={criteria}
// //           className={`shopItems__control ${
// //             sortCriteria === criteria ? "active" : ""
// //           }`}
// //           onClick={() => handleSortChange(criteria)}
// //         >
// //           {criteria === "default"
// //             ? "за замовчуванням"
// //             : criteria === "price"
// //             ? "ціна"
// //             : criteria === "name"
// //             ? "назва"
// //             : "рейтинг"}
// //         </button>
// //       ))}
// //     </div>
// //   </div>
// // </div>

// //       <motion.div layout className="shopItems__list">
// //         <AnimatePresence>
// //           {filteredProducts.length > 0 ? (
// //             filteredProducts.map((product) => (
// //               <motion.div
// //                 key={product.id}
// //                 layout
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.5 }}
// //                 transition={{ duration: 0.8 }}
// //               >
// //                 <Card product={product} />
// //               </motion.div>
// //             ))
// //           ) : (
// //             <p>Немає доступних товарів...</p>
// //           )}
// //         </AnimatePresence>
// //       </motion.div>

// //       <motion.div className="shopItems__carousel">
// //         <div className="shopItems__carousel--wrapper">
// //           <AnimatePresence>
// //             {filteredProducts.length > 0 ? (
// //               filteredProducts.map((product, index) => (
// //                 <motion.div
// //                 key={product.id}
// //                 className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
// //                 initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
// //                 animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
// //                 exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
// //                 transition={{ duration: 0.5, ease: "easeOut" }}
// //               >
// //                 <Card product={product} />
// //               </motion.div>

// //               ))
// //             ) : (
// //               <p>Немає доступних товарів...</p>
// //             )}
// //           </AnimatePresence>

// //         </div>
// //       </motion.div>

// //       <div className="shopItems__carousel--hint">
// //         <p>Проведіть вгору або вниз, щоб гортати</p>
// //       </div>
// //     </div>
// //   );
// // };

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

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;
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
//     setCurrentPage(1);
//   }, [filters, sortCriteria, products]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleSortChange = (criteria: string) => {
//     const updatedParams = new URLSearchParams(searchParams);
//     updatedParams.set("sort", criteria);
//     setSearchParams(updatedParams);
//   };

//   return (
//     <div className="shopItems">
//    <div className="shopItems__header">
//   <h2 className="shopItems__title">Сортування:</h2>

//   {/* Горизонтальная прокрутка сортировки */}
//   <div className="shopItems__controls">
//     <div className="shopItems__scroll">
//       {["default", "price", "name", "rating"].map((criteria) => (
//         <button
//           key={criteria}
//           className={`shopItems__control ${
//             sortCriteria === criteria ? "active" : ""
//           }`}
//           onClick={() => handleSortChange(criteria)}
//         >
//           {criteria === "default"
//             ? "за замовчуванням"
//             : criteria === "price"
//             ? "ціна"
//             : criteria === "name"
//             ? "назва"
//             : "рейтинг"}
//         </button>
//       ))}
//     </div>
//   </div>
// </div>

//       <motion.div layout className="shopItems__list">
//         <AnimatePresence>
//         {paginatedProducts.length > 0 ? (
//             paginatedProducts.map((product) => (
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

//       <motion.div className="shopItems__carousel">
//         <div className="shopItems__carousel--wrapper">
//           <AnimatePresence>
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <motion.div
//                 key={product.id}
//                 className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
//                 initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
//                 animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <Card product={product} />
//               </motion.div>

//               ))
//             ) : (
//               <p>Немає доступних товарів...</p>
//             )}
//           </AnimatePresence>

//         </div>
//       </motion.div>

//    <div className="pagination">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           className="pagination__button"
//         >
//           Назад
//         </button>
//         <span className="pagination__info">Сторінка {currentPage} з {totalPages}</span>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className="pagination__button"
//         >
//           Вперед
//         </button>
//       </div>
//       <div className="shopItems__carousel--hint">
//         <p>Проведіть вгору або вниз, щоб гортати</p>
//       </div>
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

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";

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

//   return (
//     <div className="shopItems">
//       <div className="shopItems__header">
//         <h2 className="shopItems__title">Сортування:</h2>
//         <div className="shopItems__controls">
//           {["default", "price", "name", "rating"].map((criteria) => (
//             <button
//               key={criteria}
//               className={`shopItems__control ${
//                 sortCriteria === criteria ? "active" : ""
//               }`}
//               onClick={() => handleSortChange(criteria)}
//             >
//               {criteria === "default"
//                 ? "за замовчуванням"
//                 : criteria === "price"
//                 ? "ціна"
//                 : criteria === "name"
//                 ? "назва"
//                 : "рейтинг"}
//             </button>
//           ))}
//         </div>
//       </div>

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

//       <motion.div className="shopItems__carousel">
//         <div className="shopItems__carousel--wrapper">
//           <AnimatePresence>
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <motion.div
//                 key={product.id}
//                 className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
//                 initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
//                 animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <Card product={product} />
//               </motion.div>

//               ))
//             ) : (
//               <p>Немає доступних товарів...</p>
//             )}
//           </AnimatePresence>

//         </div>
//       </motion.div>

//       <div className="shopItems__carousel--hint">
//         <p>Проведіть вгору або вниз, щоб гортати</p>
//       </div>
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

// export const ShopItems: React.FC<{ filters: Filters }> = ({ filters }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortCriteria = searchParams.get("sort") || "default";

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

//   return (
//     <div className="shopItems">
//    <div className="shopItems__header">
//   <h2 className="shopItems__title">Сортування:</h2>

//   {/* Горизонтальная прокрутка сортировки */}
//   <div className="shopItems__controls">
//     <div className="shopItems__scroll">
//       {["default", "price", "name", "rating"].map((criteria) => (
//         <button
//           key={criteria}
//           className={`shopItems__control ${
//             sortCriteria === criteria ? "active" : ""
//           }`}
//           onClick={() => handleSortChange(criteria)}
//         >
//           {criteria === "default"
//             ? "за замовчуванням"
//             : criteria === "price"
//             ? "ціна"
//             : criteria === "name"
//             ? "назва"
//             : "рейтинг"}
//         </button>
//       ))}
//     </div>
//   </div>
// </div>

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

//       <motion.div className="shopItems__carousel">
//         <div className="shopItems__carousel--wrapper">
//           <AnimatePresence>
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <motion.div
//                 key={product.id}
//                 className={`shopItems__carousel--item ${index === Math.floor(filteredProducts.length / 2) ? "active" : ""}`}
//                 initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
//                 animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <Card product={product} />
//               </motion.div>

//               ))
//             ) : (
//               <p>Немає доступних товарів...</p>
//             )}
//           </AnimatePresence>

//         </div>
//       </motion.div>

//       <div className="shopItems__carousel--hint">
//         <p>Проведіть вгору або вниз, щоб гортати</p>
//       </div>
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
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const sortCriteria = searchParams.get("sort") || "default";
  const itemsPerPage = 12;

  const handlePageChange = (newPage: number) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("page", newPage.toString());
    setSearchParams(updatedParams);
  
    // Прокрутка страницы вверх
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * 0.3, behavior: "smooth" });
  }, [currentPage]);
  

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSortChange = (criteria: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("sort", criteria);
    setSearchParams(updatedParams);
  };

  return (
    <div className="shopItems">
      <div className="shopItems__header">
        <h2 className="shopItems__title">Сортування:</h2>

        {/* Горизонтальная прокрутка сортировки */}
        <div className="shopItems__controls">
          <div className="shopItems__scroll">
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
      </div>

      <motion.div layout className="shopItems__list">
        <AnimatePresence>
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
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
                  className={`shopItems__carousel--item ${
                    index === Math.floor(filteredProducts.length / 2)
                      ? "active"
                      : ""
                  }`}
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

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination__button"
        >
          Назад
        </button>
        <span className="pagination__info">
          Сторінка {currentPage} з {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination__button"
        >
          Вперед
        </button>
      </div>
      <div className="shopItems__carousel--hint">
        <p>Проведіть вгору або вниз, щоб гортати</p>
      </div>
    </div>
  );
};
