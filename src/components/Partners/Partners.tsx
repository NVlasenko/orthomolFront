import React from "react";
import "./Partners.scss";
import { Title } from "../Title";

export const Partners: React.FC = () => {
  return (
    <div id="partners" className="partners">
      <Title title="Наші партнери" />
      <div className="partners__runningLine">
        <div className="partners__line">
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners1.png`} alt="partners NOW" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners2.png`} alt="partners SOLGAR" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners3.png`} alt="partners THORNE" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners4.png`} alt="partners Natures Plus" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners5.png`} alt="partners NEOCELL" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners6.png`} alt="partners 21st CENTURY" />
        </div>
        {/* Дублируем, чтобы создать бесконечную прокрутку */}
        <div className="partners__line">
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners1.png`} alt="partners NOW" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners2.png`} alt="partners SOLGAR" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners3.png`} alt="partners THORNE" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners4.png`} alt="partners Natures Plus" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners5.png`} alt="partners NEOCELL" />
          <img src={`${process.env.PUBLIC_URL}/images/partners/partners6.png`} alt="partners 21st CENTURY" />
        </div>
      </div>
    </div>
  );
};
