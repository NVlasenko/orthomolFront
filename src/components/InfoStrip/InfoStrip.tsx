import React from "react";
import "./InfoStrip.scss";

export const InfoStrip: React.FC = () => {
  return (
    <div className="infoStrip">
      <div className="infoStrip__content">
        <div className="infoStrip__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/infoStrip/is1.svg`}
            alt="serviceIcons"
            className="infoStrip__img"
          />
        </div>
        <div className="infoStrip__text">Безкоштовна доставка
        від 2000 грн</div>
      </div>

      <div className="infoStrip__content">
        <div className="infoStrip__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/infoStrip/is2.svg`}
            alt="serviceIcons"
          />
        </div>
        <div className="infoStrip__text">Різні способи
        оплати</div>
      </div>

      <div className="infoStrip__content">
        <div className="infoStrip__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/infoStrip/is3.svg`}
            alt="serviceIcons"
          />
        </div>
        <div className="infoStrip__text">Швидка 
        доставка</div>
      </div>

      <div className="infoStrip__content">
        <div className="infoStrip__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/infoStrip/is4.svg`}
            alt="serviceIcons"
          />
        </div>
        <div className="infoStrip__text">Знижки постійним
        клієнтам</div>
      </div>
    </div>
  );
};
