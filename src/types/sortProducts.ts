// import { Product } from "../types";

// export const sortProducts = (products: Product[], criteria: string): Product[] => {
//   let sortedProducts = [...products];

//   switch (criteria) {
//     case "price":
//       sortedProducts.sort((a, b) => a.priceRegular - b.priceRegular);
//       break;
//     case "name":
//       sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case "rating":
//       sortedProducts = sortedProducts.filter((product) => product.hit === true);
//       break;
//     default:
//       // "за замовчуванням" - возвращаем без изменений
//       break;
//   }

//   return sortedProducts;
// };
import { Product } from "../types";

export const sortProducts = (products: Product[], criteria: string): Product[] => {
  let sortedProducts = [...products];

  switch (criteria) {
    case "price":
      sortedProducts.sort((a, b) => a.priceRegular - b.priceRegular);
      break;
    case "name":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "rating":
      sortedProducts.sort((a, b) => Number(b.hit) - Number(a.hit)); // Сортируем "хиты продаж" первыми
      break;
    default:
      // "за замовчуванням" - возвращаем без изменений
      break;
  }

  return sortedProducts;
};
