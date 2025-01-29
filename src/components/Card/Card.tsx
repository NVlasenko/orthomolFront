// import React, { useState, useEffect } from "react";
// import "./Card.scss";
// import { Product } from "../../types";
// import { useBasket } from "../../context/BasketContextType";

// type Props = {
//   product: Product;
// };


// export const Card: React.FC<Props> = ({ product }) => {
//   const { addToBasket } = useBasket();
//   const [inBasket, setInBasket] = useState(false);
//   const [isFlying, setIsFlying] = useState(false);

//   useEffect(() => {
//     const savedBasket = localStorage.getItem("basket");
//     if (savedBasket) {
//       const basketItems = JSON.parse(savedBasket);
//       const isInBasket = basketItems.some(
//         (item: { product: Product }) => item.product.id === product.id
//       );
//       setInBasket(isInBasket);
//     }
//   }, [product.id]);

//   const handleAddToBasket = () => {
//     if (inBasket) return;

//     setIsFlying(true); // Устанавливаем флаг для анимации
//     addToBasket(product); // Добавляем в корзину
//     setInBasket(true);

//     // Сбрасываем флаг анимации через 1 секунду
//     setTimeout(() => {
//       setIsFlying(false);
//     }, 1000);
//   };

//   return (
//     <div className={`card ${isFlying ? "card--flying" : ""}`}>
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

//         <div className="card__price">
//           {product.priceRegular.toLocaleString()} грн
//         </div>

//         <div className="card__actions">
//           <button
//             className={`card__actions--btn ${inBasket ? "in-basket" : ""}`}
//             onClick={handleAddToBasket}
//             disabled={inBasket}
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

//       <img src="../../../public/images/flying/flying.png" alt="flyingCard" />
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
  const [inBasket, setInBasket] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      const basketItems = JSON.parse(savedBasket);
      const isInBasket = basketItems.some(
        (item: { product: Product }) => item.product.id === product.id
      );
      setInBasket(isInBasket);
    }
  }, [product.id]);

  const handleAddToBasket = () => {
    if (inBasket) return;

    setIsFlying(true);
    addToBasket(product);
    setInBasket(true);

    // Останавливаем анимацию через 1.5 секунды
    // setTimeout(() => {
    //   setIsFlying(false);
    // }, 1500);
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
          {product.priceRegular.toLocaleString()} грн
        </div>

        <div className="card__actions">
          <button
            className={`card__actions--btn ${inBasket ? "in-basket" : ""}`}
            onClick={handleAddToBasket}
            disabled={inBasket}
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

      <img
        src={`${process.env.PUBLIC_URL}/images/icons/basket.svg`}
        alt="flyingCard"
        className={`flying__image ${isFlying ? "flying__image--active" : ""}`}
      />
    </div>
  );
};
