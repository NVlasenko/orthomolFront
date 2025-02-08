

import React from "react";
import "./CatalogPage.scss";
import { Title } from "../../components/Title";
import { Sidebar } from "../../components/Sidebar";
import { ShopItems } from "../../components/ShopItems";


import { useFilters } from "../../types/useFilters";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const CatalogPage: React.FC = () => {
  const { filters, updateFilters } = useFilters();
  return (
    <div className="catalog container">
      <Breadcrumbs
        paths={[
          { name: "Головна", path: "/" },
          { name: "Каталог" },
        ]}
      />
      <Title title="Каталог" />
      <div className="catalog__container">
        <div className="catalog__sidebar">
          {/* Передача фильтров и функции обновления */}
          <Sidebar filters={filters} onFilterChange={updateFilters} />
        </div>
        <div className="catalog__shopItems">
        <ShopItems filters={filters} />
        </div>
      </div>
    </div>
  );
};

// TODO: Исправить ошибку
