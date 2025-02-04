import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { BasketPage } from "./pages/BasketPage";
import { Order } from "./components/Order";

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="basket">
          <Route index element={<BasketPage />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
