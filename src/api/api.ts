import vitaminsData from "../api/vitamins.json";
import { Product } from "../types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const data: Product[] = vitaminsData;
    return data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};
