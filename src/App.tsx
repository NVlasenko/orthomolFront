import React from "react";
import "./App.scss";
import "./styles/container.scss";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { BasketProvider } from "./context/BasketContextType";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <BasketProvider>
      <div className="app-layout">
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </BasketProvider>
  );
};
