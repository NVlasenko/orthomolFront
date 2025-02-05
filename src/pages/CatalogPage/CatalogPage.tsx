import React from "react";
import "./CatalogPage.scss";
import { Title } from "../../components/Title";
import { Sidebar } from "../../components/Sidebar";

export const CatalogPage: React.FC = () => {
  return (
    <div className="container">
      <div className="catalog">
        <Title title="Каталог" />
        <Sidebar/>
      </div>
      
    </div>
  
   
  );
};
