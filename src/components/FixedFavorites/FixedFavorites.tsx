// import React from "react";
// import { useFavorites } from "../../context/FavoritesContext";
// import { useNavigate } from "react-router-dom"; // Используем для навигации

// import "./FixedFavorites.scss";

// export const FixedFavorites: React.FC = () => {
//   const { favoriteItems } = useFavorites();
//   const navigate = useNavigate(); // Хук для перехода между страницами

//   const handleNavigate = () => {
//     navigate("/favorites"); // Переход на страницу "Избранное"
//   };

//   return (
//     <div className="fixed-favorites" onClick={handleNavigate}>
//       <div className="fixed-favorites__icon">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/icons/heartActive.svg`}
//           alt="favorites"
//         />
//       </div>
//       {favoriteItems.length > 0 && (
//         <div className="fixed-favorites__counter">{favoriteItems.length}</div>
//       )}
//     </div>
//   );
// };
import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import "./FixedFavorites.scss";

export const FixedFavorites: React.FC = () => {
  const { favoriteItems } = useFavorites();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/favorites");
  };

  return (
    <div className="fixed-favorites" onClick={handleNavigate}>
      {/* SVG-иконка сердца */}
      <div className="fixed-favorites__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="heart__icon"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      {/* Счетчик товаров в избранном */}
      {favoriteItems.length > 0 && (
        <div className="fixed-favorites__counter">{favoriteItems.length}</div>
      )}
    </div>
  );
};
