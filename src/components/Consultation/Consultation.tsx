import React from "react";
import "./Consultation.scss";
import { Title } from "../Title";

export const Consultation: React.FC = () => {
  return (
    <section className="consultation">
      <div className="consultation__container">
        <div className="consultation__title">
          <Title title="Проконсультуватися" />
        </div>

        <p className="consultation__description">
          Вітаміни Ортомол, вироблені в Німеччині, представлені широким
          асортиментом унікальних препаратів. Склад кожного окремого комплексу
          підбирається таким чином, щоб усунути конкретні медичні проблеми.
        </p>
        <form className="consultation__form">
          <input
            type="text"
            placeholder="Введіть Ваше ім'я*"
            className="consultation__input"
            required
          />
          <input
            type="tel"
            placeholder="Телефон*"
            className="consultation__input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="consultation__input"
          />
          <button type="submit" className="consultation__button">
            Відправити запит
          </button>
        </form>
      </div>
    </section>
  );
};
