// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "../types";

// interface FavoritesContextType {
//   favoriteItems: Product[];
//   addToFavorites: (product: Product) => void;
//   removeFromFavorites: (id: number) => void;
//   isFavorite: (id: number) => boolean;
// }

// const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

//   const addToFavorites = (product: Product) => {
//     if (!favoriteItems.some((item) => item.id === product.id)) {
//       setFavoriteItems([...favoriteItems, product]);
//     }
//   };
  
//   const removeFromFavorites = (id: string | number) => {
//     setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
//   };
  

//   const isFavorite = (id: number) => {
//     return favoriteItems.some((item) => item.id === id);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export const useFavorites = () => {
//   const context = useContext(FavoritesContext);
//   if (!context) {
//     throw new Error("useFavorites must be used within a FavoritesProvider");
//   }
//   return context;
// };
import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import { Product } from "../types";

interface FavoritesContextType {
  favoriteItems: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>(() => {
    const savedFavorites = localStorage.getItem("favoriteItems");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const prevFavoritesRef = useRef(favoriteItems);

  // Синхронизация с localStorage при изменении favoriteItems
  useEffect(() => {
    if (prevFavoritesRef.current !== favoriteItems) {
      localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
      prevFavoritesRef.current = favoriteItems;
    }
  }, [favoriteItems]);

  // Обработка синхронизации между вкладками
  useEffect(() => {
    const syncFavorites = (event: StorageEvent) => {
      if (event.key === "favoriteItems") {
        setFavoriteItems(event.newValue ? JSON.parse(event.newValue) : []);
      }
    };

    window.addEventListener("storage", syncFavorites);
    return () => window.removeEventListener("storage", syncFavorites);
  }, []);

  const addToFavorites = (product: Product) => {
    setFavoriteItems((prev) => {
      if (!prev.some((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
