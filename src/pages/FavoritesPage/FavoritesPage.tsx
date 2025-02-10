import React from "react";
import "./FavoritesPage.scss";
import { useFavorites } from "../../context/FavoritesContext";
import { Card } from "../../components/Card";

export const FavoritesPage: React.FC = () => {
  const { favoriteItems } = useFavorites();

  return (
    <div className="favorites container">
      <h2 className="favorites__title">Обрані товари</h2>
      {favoriteItems.length > 0 ? (
        <div className="favorites__list">
          {favoriteItems.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="favorites__empty">Ви ще не додали товари в обране</p>
      )}
    </div>
  );
};
