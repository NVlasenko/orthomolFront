import React, { useState, useEffect, useCallback} from "react";
import "./Card.scss";
import { Product } from "../../types";
import { useBasket } from "../../context/BasketContextType";

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { addToBasket, basketItems } = useBasket();
  const [inBasket, setInBasket] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  // useEffect(() => {
  //   const savedBasket = localStorage.getItem("basket");
  //   if (savedBasket) {
  //     const basketItems = JSON.parse(savedBasket);
  //     const isInBasket = basketItems.some(
  //       (item: { product: Product }) => item.product.id === product.id
  //     );
  //     setInBasket(isInBasket);
  //   }
  // }, [basketItems, product.id]);
  useEffect(() => {
    setInBasket(basketItems.some((item) => item.product.id === product.id));
  }, [basketItems, product.id]); 

  // const handleAddToBasket = () => {
  //   if (inBasket) return;

  //   setIsFlying(true);
  //   addToBasket(product);
  //   setInBasket(true);
  // };
  const handleAddToBasket = useCallback(() => {
    if (inBasket) return;
  
    setIsFlying(true);
    addToBasket(product);

  }, [inBasket, addToBasket, product]);
  

  return (
    <div className="card">
      <img
        className="card__image"
        src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
        alt={product.name}
      />

      <div className="card__content">
        <div className="card__info">
          <h2 className="card__info--title">{product.name}</h2>
          <h3 className="card__info--subtitle">{product.appointment}</h3>
        </div>

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
          <a href="#" className="card__actions--wishlist">
            <img
              className="card__actions--heart"
              src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
              alt="heart"
            />
          </a>
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
