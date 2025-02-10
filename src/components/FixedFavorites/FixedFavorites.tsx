import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom"; // Используем для навигации

import "./FixedFavorites.scss";

export const FixedFavorites: React.FC = () => {
  const { favoriteItems } = useFavorites();
  const navigate = useNavigate(); // Хук для перехода между страницами

  const handleNavigate = () => {
    navigate("/favorites"); // Переход на страницу "Избранное"
  };

  return (
    <div className="fixed-favorites" onClick={handleNavigate}>
      <div className="fixed-favorites__icon">
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/heartActive.svg`}
          alt="favorites"
        />
      </div>
      {favoriteItems.length > 0 && (
        <div className="fixed-favorites__counter">{favoriteItems.length}</div>
      )}
    </div>
  );
};
