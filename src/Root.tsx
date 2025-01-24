import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);
