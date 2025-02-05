import React from "react";
import { useBasket } from "../../context/BasketContextType";
import "./BasketPage.scss";
import { useNavigate } from "react-router-dom";

export const BasketPage: React.FC = () => {
  const { basketItems, removeFromBasket, updateQuantity } = useBasket();
  const navigate = useNavigate();

  const calculateTotal = () =>
    basketItems.reduce(
      (sum, item) => sum + item.product.priceRegular * item.quantity,
      0
    );
    const handleOrder = () => {
      navigate("order");
    };
  return (
    <div className="basketPage">
      <h2 className="basketPage__title">Ваш кошик</h2>
      {basketItems.length === 0 ? (
        <p className="basketPage__empty">Кошик порожній</p>
      ) : (
        <div className="basketPage__content">
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
          <div className="basketPage__total">
            <h3 className="basketPage__total--text">Загальна сума:</h3>
            <span className="basketPage__total--value">
              {calculateTotal().toLocaleString("uk-UA")} грн
            </span>
          </div>
          <button className="basketPage__order basketPage__order--text"
          onClick={handleOrder}
          >
            Замовити
          </button>
        </div>
      )}
    </div>
  );
};
