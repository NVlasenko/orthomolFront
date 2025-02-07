import React from "react";
import "./VitaminPromoBlock.scss";
import { NavLink } from "react-router-dom";

export const VitaminPromoBlock: React.FC = () => {
  return (
    <div className="vitaminPromoBlock">
      <div className="vitaminPromoBlock__main">
        <h1 className="vitaminPromoBlock__title">Вітамінні комплекси</h1>
        <h2 className="vitaminPromoBlock__subtitle">
          Інтернет-магазин вітамінів в Україні. Вся продукція сертифікована
          німецькою Радою Технічного Контролю (TÜV Rheinland)
        </h2>
        <NavLink to="/catalog" className="vitaminPromoBlock__btn">
          У Каталог
        </NavLink>
      </div>
      <div className="vitaminPromoBlock__img">
        <img
          className="vitaminPromoBlock__img--main"
          src={`${process.env.PUBLIC_URL}/images/banner/banner.png`}
          alt="banner"
        />
        <img
          className="vitaminPromoBlock__img--overlay img__overlay--1"
          src={`${process.env.PUBLIC_URL}/images/banner/img1.svg`}
          alt="overlay-1"
        />
        <img
          className="vitaminPromoBlock__img--overlay img__overlay--2"
          src={`${process.env.PUBLIC_URL}/images/banner/img2.svg`}
          alt="overlay-2"
        />
      </div>
    </div>
  );
};
