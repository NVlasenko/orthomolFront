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
      console.error("Помилка: дані про вітаміни не є масивом", vitaminsData);
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
      console.error("Помилка: некоректна структура даних у vitamins.json", vitaminsData);
      return Promise.reject(new Error("Невірний формат даних."));
    }

    return Promise.resolve(vitaminsData as Product[]);
  } catch (error) {
    console.error("Помилка при завантаженні продуктів:", error);
    return Promise.reject(new Error("Не вдалося завантажити продукти."));
  }
};
