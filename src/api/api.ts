// import vitaminsData from "../api/vitamins.json";
// import { Product } from "../types";

// export const fetchProducts = async (): Promise<Product[]> => {
//   try {
//     const data: Product[] = vitaminsData;
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
import vitaminsData from "../api/vitamins.json";
import { Product } from "../types";

/**
 * Загружает список продуктов из локального JSON-файла.
 * @returns {Promise<Product[]>} Промис с массивом продуктов.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    if (!Array.isArray(vitaminsData)) {
      console.error("Ошибка: данные о витаминах не являются массивом", vitaminsData);
      return Promise.reject(new Error("Невірний формат даних."));
    }

    // Проверка структуры данных (например, должен быть `id` и `name`)
    const isValid = vitaminsData.every(
      (item) =>
        typeof item === "object" &&
        "id" in item &&
        "name" in item
    );

    if (!isValid) {
      console.error("Ошибка: некорректная структура данных в vitamins.json", vitaminsData);
      return Promise.reject(new Error("Некорректна структура даних."));
    }

    return Promise.resolve(vitaminsData as Product[]);
  } catch (error) {
    console.error("Ошибка при загрузке продуктов:", error);
    return Promise.reject(new Error("Не вдалося завантажити продукти."));
  }
};
