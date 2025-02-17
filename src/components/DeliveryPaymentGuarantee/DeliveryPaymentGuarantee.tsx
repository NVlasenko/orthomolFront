import React from "react";
import "./DeliveryPaymentGuarantee.scss";

export const DeliveryPaymentGuarantee: React.FC = () => {
  return (
    <div className="infoBox">
      <div className="infoBox__section">
        <h3 className="infoBox__title">ДОСТАВКА</h3>
        <p className="infoBox__subtitle">Доставка Новою Поштою</p>
        <p className="infoBox__subtitle">Кур'єр Нової Пошти</p>
        <p className="infoBox__subtitle">Доставка Укрпоштою</p>
        <p className="infoBox__italic">Оплата згідно тарифів перевізника</p>
      </div>

      <div className="infoBox__divider"></div>

      <div className="infoBox__section">
        <h3 className="infoBox__title">ОПЛАТА</h3>
       
          <p className="infoBox__subtitle">Онлайн оплата Visa/MasterCard, LiqPay</p>
          <p className="infoBox__subtitle">Безготівковий розрахунок</p>
          <p className="infoBox__subtitle">Накладений платіж</p>
    
      </div>

      <div className="infoBox__divider"></div>

      <div className="infoBox__section">
        <h3 className="infoBox__title">ГАРАНТІЯ</h3>
        <p className="infoBox__subtitle">98% позитивних відгуків наших клієнтів за понад 7 років роботи в Україні.</p>
      </div>
    </div>
  );
};
