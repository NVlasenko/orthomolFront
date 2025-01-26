// import React from "react";
// import { useBasket } from "../../context/BasketContextType";
// import "./BasketPage.scss";
// export const BasketPage: React.FC = () => {
//   const { basketItems, removeFromBasket, updateQuantity } = useBasket();

//   const calculateTotal = () =>
//     basketItems.reduce((sum, item) => sum + item.product.priceRegular * item.quantity, 0);

//   return (
//     <div className="basketPage">
//       <h2 className="basketPage__title">Ваш кошик</h2>
//       {basketItems.length === 0 ? (
//         <p>Кошик порожній</p>
//       ) : (
//         <div className="basketPage__content">
//           <hr className="hr"/>
//           {basketItems.map(({ product, quantity }) => (
//             <div key={product.id} className="basketPage__item">
//               <img className="basketPage__img" src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`} alt={product.name} />
//               <div className="basketPage__info">
//                 <h3 className="basketPage__name">{product.name}</h3>
//                 <p className="basketPage__price">{product.priceRegular.toString().replace(/^(\d)/, "$1 ")} грн</p>
//                 <div className="basketPage__quantity">
//                   <button className="basketPage__counter" onClick={() => updateQuantity(product.id, quantity - 1)}>-</button>
//                   <p className="basketPage__count">{quantity} <span>уп.</span></p>
//                   <button className="basketPage__counter" onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
//                 </div>
//               </div>
//               <button className="basketPage__remove" onClick={() => removeFromBasket(product.id)}>Видалити</button>
//             </div>
//           ))}
//           <hr className="hr"/>
//           <div className="basketPage__total">
//             <h3 className="basketPage__total--text">Загальна сума:</h3>
//             <span>{calculateTotal().toString().replace(/^(\d)/, "$1 ")} грн</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React from "react";
import { useBasket } from "../../context/BasketContextType";
import "./BasketPage.scss";

export const BasketPage: React.FC = () => {
  const { basketItems, removeFromBasket, updateQuantity } = useBasket();

  const calculateTotal = () =>
    basketItems.reduce((sum, item) => sum + item.product.priceRegular * item.quantity, 0);

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
                    {product.priceRegular.toString().replace(/^(\d)/, "$1 ")} грн
                  </p>
                  <div className="basketPage__quantity">
                    <button
                      className="basketPage__counter"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      -
                    </button>
                    <p className="basketPage__count">{quantity} <span>уп.</span></p>
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
            <h3 className="basketPage__total-text">Загальна сума:</h3>
            <span className="basketPage__total-value">
            <span>{calculateTotal().toLocaleString("uk-UA")} грн</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
