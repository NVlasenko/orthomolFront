import React from "react";
import "./Description.scss";
import { useProduct } from "../../context/ProductContext"; // Используем контекст

export const Description: React.FC = () => {
  const { product } = useProduct();

  if (!product) return <p>Товар не знайдено</p>;

  return (
    <div className="description">
      <h2 className="description__title">{product.name}</h2>
      <h2 className="description__subtitle">Опис {product.name}</h2>
      <div className="description__info">
        {product.description.map((desc, index) => (
          <p className="description__text" key={index}>{desc.text}</p>
        ))}
      </div>
      <div className="description__recommendation">
        <h3>
          {product.recommendation
            .filter((rec) => rec.title) // Фильтруем только элементы с title
            .map((rec, index) =>
              rec.title?.map((title, subIndex) => (
                <h3 className="description__title" key={`${index}-${subIndex}`}>{title}</h3>
              ))
            )}
        </h3>
        <ul className="description__list">
          {product.recommendation.map((desc, index) =>
            desc.text
              ? desc.text.map((text, subIndex) => (
                  <li className="description__text" key={`${index}-${subIndex}`}>{text}</li>
                ))
              : null
          )}
        </ul>
      </div>
    </div>
  );
};
