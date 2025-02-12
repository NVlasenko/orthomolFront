import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { BasketPage } from "./pages/BasketPage";
import { Order } from "./components/Order";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CatalogPage } from "./pages/CatalogPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ProductPage } from "./pages/ProductPage";


export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="basket">
          <Route index element={<BasketPage />} />
          <Route path="order">
            <Route index element={<Order />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
          </Route>
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route  path="/product/:id/:name/:category" element={<ProductPage />} />
      </Route>
    </Routes>
  </Router>
);
