// import React, { useState } from "react";
// import "./Card.scss";
// import { Product } from "../../types";
// import { useBasket } from "../../context/BasketContextType";

// type Props = {
//   product: Product;
// };

// export const Card: React.FC<Props> = ({ product }) => {
//   const { addToBasket } = useBasket();
//   const [inBasket, setInBasket] = useState(false); // Состояние для отслеживания добавления товара
//   const formattedPrice = product.priceRegular
//     .toString()
//     .replace(/^(\d)/, "$1 ");

//   const handleAddToBasket = () => {
//     addToBasket(product);
//     setInBasket(true); // Обновляем состояние после добавления товара
//   };

//   return (
//     <div className="card">
//       <img
//         className="card__image"
//         src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
//         alt={product.name}
//       />

//       <div className="card__content">
//         <div className="card__info">
//           <h2 className="card__info--title">{product.name}</h2>
//           <h3 className="card__info--subtitle">{product.appointment}</h3>
//         </div>

//         <div className="card__price">{formattedPrice} грн</div>

//         <div className="card__actions">
//           <button
//             className={`card__actions--btn ${inBasket ? "in-basket" : ""}`}
//             onClick={handleAddToBasket}
//             disabled={inBasket} // Блокируем кнопку после добавления
//           >
//             {inBasket ? "У кошику" : "В кошик"}
//           </button>
//           <a href="#" className="card__actions--wishlist">
//             <img
//               className="card__actions--heart"
//               src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
//               alt="heart"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import "./Card.scss";
import { Product } from "../../types";
import { useBasket } from "../../context/BasketContextType";

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { addToBasket } = useBasket();
  const [inBasket, setInBasket] = useState(false); // Состояние для кнопки

  // Проверяем состояние кнопки из localStorage при монтировании
  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      const basketItems = JSON.parse(savedBasket);
      const isInBasket = basketItems.some((item: { product: Product }) => item.product.id === product.id);
      setInBasket(isInBasket); // Устанавливаем состояние, если товар есть в корзине
    }
  }, [product.id]);

  const handleAddToBasket = () => {
    addToBasket(product);
    setInBasket(true); // Обновляем состояние после добавления товара
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
        alt={product.name}
      />

      <div className="card__content">
        <div className="card__info">
          <h2 className="card__info--title">{product.name}</h2>
          <h3 className="card__info--subtitle">{product.appointment}</h3>
        </div>

        <div className="card__price">
          {product.priceRegular.toString().replace(/^(\d)/, "$1 ")} грн
        </div>

        <div className="card__actions">
          <button
            className={`card__actions--btn ${inBasket ? "in-basket" : ""}`}
            onClick={handleAddToBasket}
            disabled={inBasket} // Блокируем кнопку после добавления
          >
            {inBasket ? "У кошику" : "В кошик"}
          </button>
          <a href="#" className="card__actions--wishlist">
            <img
              className="card__actions--heart"
              src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
              alt="heart"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
