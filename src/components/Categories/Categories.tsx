import React from "react";
import "./Categories.scss";
import { Title } from "../Title";
import categories from "../../api/categories.json";

export const Categories: React.FC = () => {
  return (
    <div className="categories">
      <Title title="Категорії" />

      <div className="categories__content">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`categories__item categories__item--${category.color}`}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${category.icon}`}
              alt={category.name}
              className="categories__icon"
            />
            <p className="categories__name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
