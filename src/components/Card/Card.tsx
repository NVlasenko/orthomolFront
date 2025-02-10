import React, { useState, useEffect, useCallback } from "react";
import "./Card.scss";
import { Product } from "../../types";
import { useBasket } from "../../context/BasketContextType";
import { useFavorites } from "../../context/FavoritesContext";

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { addToBasket, basketItems } = useBasket();
  const [inBasket, setInBasket] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setInBasket(basketItems.some((item) => item.product.id === product.id));
    setFavorite(isFavorite(product.id));
  }, [basketItems, product.id, isFavorite]);

  const handleAddToBasket = useCallback(() => {
    if (inBasket) return;

    setIsFlying(true);
    addToBasket(product);
  }, [inBasket, addToBasket, product]);
  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFromFavorites(product.id); // Удаляет из избранного
    } else {
      addToFavorites(product); // Добавляет в избранное
    }
    setFavorite(!favorite); // Переключает состояние "избранное"
  };
  

  return (
    <div className="card">
      <div>
        <img
          className="card__image"
          src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
          alt={product.name}
        />
      </div>

      <div className="card__content">
        <div className="card__info">
          <h2 className="card__info--title">{product.name}</h2>
          <h3 className="card__info--subtitle">{product.appointment}</h3>
        </div>

        <div className="card__actions--w">
          <div className="card__price">
            {product.priceRegular.toLocaleString()} грн
          </div>

          <div className="card__actions">
            <button
              className={`card__actions--btn ${inBasket ? "in-basket" : ""}`}
              onClick={handleAddToBasket}
              disabled={inBasket}
            >
              {inBasket ? "У кошику" : "В кошик"}
            </button>
            <a
  href="#"
  className={`card__actions--wishlist ${favorite ? "favorite" : ""}`}
  onClick={(e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    handleFavoriteToggle(); // Добавляем товар в избранное
  }}
>
  <img
    className="card__actions--heart"
    src={`${process.env.PUBLIC_URL}/images/icons/${
      favorite ? "heartActive.svg" : "heart.svg"
    }`}
    alt="heart"
  />
</a>

          </div>
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/images/icons/basket.svg`}
        alt="flyingCard"
        className={`flying__image ${isFlying ? "flying__image--active" : ""}`}
      />
    </div>
  );
};
