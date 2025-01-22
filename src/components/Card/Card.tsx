import React from "react";
import "./Card.scss";
import { Product } from "../../types";

type Props = {
  product: Product;
};
export const Card: React.FC<Props> = ({ product }) => {
  return (
    <div className="card">
  <img
            className="cart__image"
            src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
          
          />
          <img 
           src={`${process.env.PUBLIC_URL}/${product.imgCategoryRef}`}
          alt="" />
    <p className="card-name">{product.name}</p>
    {[product.brand]}
  </div>
  )
}