import React from "react";
import "./DropDownCatalog.scss";
export const DropDownCatalog: React.FC = () => {
  return (
    <div className="drop-down">
      <div className="purpose">
        <ul className="purpose__list">
          <li className="purpose__link">Імунна система</li>
          <li className="purpose__link">Стрес та порушення сну</li>
          <li className="purpose__link">Мозкова активність</li>
          <li className="purpose__link">Шкіра волосся та нігті</li>
          <li className="purpose__link">Зачаття та вагітність</li>
          <li className="purpose__link">Зір</li>
          <li className="purpose__link">Серце та судини</li>
          <li className="purpose__link">Діти</li>
          <li className="purpose__link"><span>Всі товари</span></li>
        </ul>
      </div>
     

      <div className="vitamins">
      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін D</h3>
        <ul className="vitamins__category--list">
          <li className="vitamins__category--item">Вітамін D 400 -5000ME</li>
          <li className="vitamins__category--item">Вітамін D 5000-25000ME</li>
        </ul>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін K</h3>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін B</h3>
        <ul className="vitamins__category--list">
          <li className="vitamins__category--item">Біотин</li>
          <li className="vitamins__category--item">Фолієва кислота</li>
          <li className="vitamins__category--item">Біотин</li>
          <li className="vitamins__category--item">Фолієва кислота</li>
        </ul>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін D</h3>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін A</h3>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін E</h3>
      </div>

      <div className="vitamins__category">
        <h3 className="vitamins__category--title">Вітамін C</h3>
      </div>
    </div>
    </div>
  );
};
