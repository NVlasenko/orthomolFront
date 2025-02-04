import React, { useState } from "react";
import { useBasket } from "../../context/BasketContextType";
import "./Order.scss";
import "../../styles/container.scss";
export const Order: React.FC = () => {
  const { basketItems, updateQuantity, removeFromBasket } = useBasket();
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const calculateTotal = () =>
    basketItems.reduce(
      (sum, item) => sum + item.product.priceRegular * item.quantity,
      0
    );

  const handleOrderSubmit = () => {
    // Показываем подтверждение заказа
    setIsOrderConfirmed(true);

    // Скрываем подтверждение через 3 секунды
    setTimeout(() => {
      setIsOrderConfirmed(false);
    }, 3000);
  };

  return (
    <div className="orderPage container">
      <h2 className="orderPage__title">Оформлення замовлення</h2>
      <hr />
      <div className="orderPage__container">
        {/* Левая колонка */}
        <div className="orderPage__form">
          <div className="orderPage__section">
            <h3 className="orderPage__subtitle">Ваші дані:</h3>
            <div className="orderPage__inputs">
              <input
                className="orderPage__inputs--input"
                type="text"
                placeholder="Ваше ім’я"
              />
              <input
                className="orderPage__inputs--input"
                type="text"
                placeholder="Ваше прізвище"
              />
              <input
                className="orderPage__inputs--input"
                type="tel"
                placeholder="Ваш телефон"
              />
              <input
                className="orderPage__inputs--input"
                type="email"
                placeholder="Ваш email"
              />
            </div>
            <hr style={{ marginTop: "50px" }} />
          </div>

          <div className="orderPage__section">
            <h3 className="orderPage__subtitle">Адреса доставки:</h3>
            <p className="orderPage__subtitle--text">Спосіб доставки:</p>
            <div className="orderPage__delivery">
              <label className="orderPage__delivery--text">
                <input type="radio" name="delivery" value="nova-poshta" />
                Нова Пошта
              </label>
              <label className="orderPage__delivery--text">
                <input
                  type="radio"
                  name="delivery"
                  value="nova-poshta-terminal"
                />
                Нова Пошта Поштомат
              </label>
            </div>
            <div className="orderPage__inputs">
              <input
                className="orderPage__inputs--input"
                type="text"
                placeholder="Область"
              />
              <input
                className="orderPage__inputs--input"
                type="text"
                placeholder="Місто"
              />
              <input
                className="orderPage__inputs--input"
                type="text"
                placeholder="Відділення"
              />
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="orderPage__summary">
          <div className="orderPage__summary--content">
            <h3 className="orderPage__subtitle">Ваше замовлення</h3>

            <div className="basketPage__items">
              {basketItems.map(({ product, quantity }) => (
                <div key={product.id} className="basketPage__item">
                  <img
                    className="basketPage__img"
                    src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
                    alt={product.name}
                  />
                  <div className="basketPage__info">
                    <h3 className="basketPage__name">{product.name}</h3>
                    <p className="basketPage__price">
                      {product.priceRegular.toString().replace(/^(\d)/, "$1 ")}{" "}
                      грн
                    </p>
                    <div className="basketPage__quantity">
                      <button
                        className="basketPage__counter"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        -
                      </button>
                      <p className="basketPage__count">
                        {quantity} <span>уп.</span>
                      </p>
                      <button
                        className="basketPage__counter"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="basketPage__remove"
                    onClick={() => removeFromBasket(product.id)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>

            <div>
              <hr />
              <div className="orderPage__total">
                <p>Всього:</p>
                <p>{calculateTotal().toLocaleString()} грн</p>
              </div>
            </div>

            {/* <button
            className="basketPage__order--text basketPage__order"
            onClick={handleOrderSubmit}
          >
            Оформити замовлення
          </button> */}
          </div>

          <div className="payment">
            <h2 className="payment__title">Спосіб оплати</h2>
            <div className="payment__method">
              <div className="payment__radio">
                <input
                  type="radio"
                  id="payment-method"
                  name="payment"
                  checked
                />
                <label htmlFor="payment-method" className="payment__label">
                  Оплата при отриманні
                </label>
              </div>
              <p className="payment__info">
                Ваші персональні дані будуть використовуватися для обробки
                вашого <br /> замовлення, підтримки вашого досвіду на цьому сайті та
                для інших цілей, <br /> описаних у цьому посиланні -
                <a href="#" className="payment__link">
                  політика конфіденційності
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <button
              className="basketPage__order--text basketPage__order orderPage__button"
              onClick={handleOrderSubmit}
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>

      {isOrderConfirmed && (
        <div className="orderPage__popup">
          <div className="orderPage__popup-content">
            <h3>Замовлення прийнято!</h3>
            <p>
              Дякуємо за ваше замовлення. Ми зв’яжемося з вами найближчим часом.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
