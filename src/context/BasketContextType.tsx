import React, { createContext, useState, useContext, useEffect } from "react";
import { Product } from "../types";

type BasketContextType = {
  basketItems: { product: Product; quantity: number }[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearBasket: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<{ product: Product; quantity: number }[]>(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (product: Product) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromBasket = (productId: number) => {
    setBasketItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setBasketItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };
  const clearBasket = () => {
    setBasketItems([]);
    localStorage.removeItem("basket");
  };
  return (
    <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket, updateQuantity, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
