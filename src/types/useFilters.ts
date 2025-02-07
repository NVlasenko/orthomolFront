import { useSearchParams } from "react-router-dom";
import { Filters } from "../types/Filters";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Получаем фильтры из URL
  const filters: Filters = {
    priceRange: {
      min: Number(searchParams.get("min")) || 0,
      max: Number(searchParams.get("max")) || 100000,
    },
    gender: searchParams.get("gender") || "all",
    ageCategory: searchParams.get("ageCategory") || "all",
    purpose: searchParams.get("purpose") || "all",
    taste: searchParams.get("taste") || "all",
    shape: searchParams.get("shape") || "all",
    hit: searchParams.get("hit") === "true",
  };

  // Функция для обновления фильтров в URL
  const updateFilters = (newFilters: Filters) => {
    const updatedParams = new URLSearchParams();

    updatedParams.set("min", String(newFilters.priceRange.min));
    updatedParams.set("max", String(newFilters.priceRange.max));
    updatedParams.set("gender", newFilters.gender);
    updatedParams.set("ageCategory", newFilters.ageCategory);
    updatedParams.set("purpose", newFilters.purpose);
    updatedParams.set("taste", newFilters.taste);
    updatedParams.set("shape", newFilters.shape);
    updatedParams.set("hit", String(newFilters.hit));

    setSearchParams(updatedParams);
  };

  return { filters, updateFilters };
};
