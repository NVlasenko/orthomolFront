// import { Product } from "../types";
// import { Filters } from "../types/Filters";

// export const filterProducts = (products: Product[], filters: Filters): Product[] => {
//   return products.filter((product) => {
//     // Фильтр по цене
//     if (
//       product.priceRegular < filters.priceRange.min ||
//       product.priceRegular > filters.priceRange.max
//     ) {
//       return false;
//     }

//     // Фильтр по полу
//     if (filters.gender !== "all" && product.gender !== filters.gender) {
//       return false;
//     }

//     // Фильтр по возрасту
//     if (filters.ageCategory !== "all" && !product.ageCategory.includes(filters.ageCategory)) {
//       return false;
//     }

//     // Фильтр по назначению
//     if (filters.purpose !== "all" && !product.healthCategory.includes(filters.purpose)) {
//       return false;
//     }

//     // Фильтр по форме выпуска
//     if (filters.shape !== "all" && product.shape !== filters.shape) {
//       return false;
//     }

//     // Фильтр по вкусу
//     if (filters.taste !== "all" && product.taste !== filters.taste) {
//       return false;
//     }

//     // Фильтр "Хіти продажу"
//     if (filters.hit && !product.hit) {
//       return false;
//     }

//     return true;
//   });
// };
import { Product } from "../types";
import { Filters } from "../types/Filters";

export const filterProducts = (products: Product[], filters: Filters): Product[] => {
  return products.filter((product) => {
    // Фильтр по цене
    if (
      product.priceRegular < filters.priceRange.min ||
      product.priceRegular > filters.priceRange.max
    ) {
      return false;
    }

    // Фильтр по полу
    if (filters.gender !== "all" && product.gender !== filters.gender) {
      return false;
    }

    // Фильтр по возрасту
    if (filters.ageCategory !== "all" && !product.ageCategory.includes(filters.ageCategory)) {
      return false;
    }

    // Фильтр по назначению
    if (filters.purpose !== "all" && !product.healthCategory.includes(filters.purpose)) {
      return false;
    }

    // Фильтр по форме выпуска
    if (filters.shape !== "all" && product.shape !== filters.shape) {
      return false;
    }

    // Фильтр по вкусу
    if (filters.taste !== "all" && product.taste !== filters.taste) {
      return false;
    }

    if (
      filters.traceElements !== "all" &&
      !(
        product.compositionOfVitamins?.some(
          (vit) => vit.traceElements === filters.traceElements
        ) || product.traceElements === filters.traceElements
      )
    ) {
      return false;
    }

    // ✅ Фильтр по дозировке (details)
    if (filters.details !== "all") {
      const hasDetails = product.compositionOfVitamins?.some(
        (comp) => comp.details && comp.details.includes(filters.details)
      );
      if (!hasDetails) return false;
    }

    // Фильтр "Хіти продажу"
    if (filters.hit && !product.hit) {
      return false;
    }

    return true;
  });
};
