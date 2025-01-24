import React from "react";
import "./Card.scss";
import { Product } from "../../types";

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const formattedPrice = product.priceRegular
    .toString()
    .replace(/^(\d)/, "$1 ");

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

        <div className="card__price">{formattedPrice} грн</div>

        <div className="card__actions">
          <a href="#" className="card__actions--btn">
            В кошик
          </a>
          <a href="#" className="card__actions--wishlist">
            <img
              className="card__actions--heart"
              src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
              alt="heart"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
