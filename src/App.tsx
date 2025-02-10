import React from "react";
import "./App.scss";
import "./styles/container.scss";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { BasketProvider } from "./context/BasketContextType";
import { Footer } from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FixedFavorites } from "./components/FixedFavorites";


export const App: React.FC = () => {
  return (
    <FavoritesProvider>
       <BasketProvider>
      <div className="app-layout">
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
     <FixedFavorites />
      </div>
    </BasketProvider>
    </FavoritesProvider>
  );
};
