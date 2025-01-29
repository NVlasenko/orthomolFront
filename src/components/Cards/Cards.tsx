// import React, { useEffect, useState, useRef, useMemo } from "react";
// import "./Cards.scss";
// import { Card } from "../Card/Card";
// import { Product } from "../../types";
// import { Title } from "../Title/Title";
// import { fetchProducts } from "../../api/api";

// export const Cards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const contentRef = useRef<HTMLDivElement>(null);
//   const listRef = useRef<HTMLDivElement>(null);
//   const [visibleWidth, setVisibleWidth] = useState<number>(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showAll, setShowAll] = useState<boolean>(false);

//   // Загрузка данных продуктов
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadProducts();
//   }, []);
//   const filteredProducts = useMemo(
//     () => products.filter((product) => product.category === "immune"),
//     [products]
//   );
//   // Рассчитываем ширину контейнера для отображения карточек
//   useEffect(() => {
//     const calculateVisibleWidth = () => {
//       if (contentRef.current) {
//         const width = contentRef.current.offsetWidth;
//         setVisibleWidth(width);
//       }
//     };

//     calculateVisibleWidth();
//     window.addEventListener("resize", calculateVisibleWidth);
//     return () => window.removeEventListener("resize", calculateVisibleWidth);
//   }, [products]);

//   // Расчёт полной ширины одной карточки (с учётом gap)
//   let fullWidthOneCard = 0;
//   if (listRef.current && products.length > 0) {
//     const firstCard = listRef.current.children[0] as HTMLElement | undefined;
//     if (firstCard) {
//       const cardWidth = firstCard.offsetWidth;
//       const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
//       fullWidthOneCard = cardWidth + gap;
//     }
//   }

//   // Максимальный индекс для пролистывания
//   const maxIndex = useMemo(() => {
//     if (visibleWidth === 0 || fullWidthOneCard === 0) return 0;
//     // const steps = products.length - visibleWidth / fullWidthOneCard - 1;
//     const steps =Math.ceil((products.length - visibleWidth / fullWidthOneCard));
//     return steps > 0 ? steps : 0;
//   }, [products.length, visibleWidth, fullWidthOneCard]);

//   // Управление стрелками
//   const canPrev = currentIndex > 0;
//   const canNext = currentIndex < maxIndex;

//   const handleNext = () => {
//     if (canNext) setCurrentIndex((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (canPrev) setCurrentIndex((prev) => prev - 1);
//   };

//   // Перемещение списка карточек
//   useEffect(() => {
//     if (!listRef.current || products.length === 0) return;

//     const firstCard = listRef.current.children[0] as HTMLElement;
//     const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
//     const stepSize = firstCard.offsetWidth + gap;
//     const offset = stepSize * currentIndex;

//     listRef.current.style.transform = `translateX(-${offset}px)`;
//   }, [currentIndex, products]);

//   // Отображение состояния загрузки/ошибки
//   if (isLoading) return <p>Loading...</p>;

//   if (error) {
//     return (
//       <div className="error">
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   // Рендер компонента
//   return (
//     <div className="cards">
//       <Title title="Популярні товари" />

//       {/* Левая стрелка */}
//       <img
//         className={`cards__arrow cards__arrow--left ${
//           !canPrev ? "cards__arrow--disabled" : ""
//         }`}
//         src={`${process.env.PUBLIC_URL}/images/icons/arrowLeft.svg`}
//         alt="arrowLeft"
//         onClick={handlePrev}
//       />

//       {/* Правая стрелка */}
//       <img
//         className={`cards__arrow cards__arrow--right ${
//           !canNext ? "cards__arrow--disabled" : ""
//         }`}
//         src={`${process.env.PUBLIC_URL}/images/icons/arrowRight.svg`}
//         alt="arrowRight"
//         onClick={handleNext}
//       />

//       {/* Контент с карточками */}
//       <div
//         className={`cards__content ${showAll ? "show-all" : ""}`}
//         ref={contentRef}
//       >
//         <div className="cards__list" ref={listRef}>
//           {filteredProducts.map((product) => (
//             <Card key={product.id} product={product} />
//           ))}
//         </div>
//       </div>

//       {/* Кнопка "Усі товари"/"Згорнути" */}
//       <div className="cards__show-all">
//         {!showAll ? (
//           <button
//             className="cards__show-all-btn"
//             onClick={() => setShowAll(true)}
//           >
//             Усі товари
//           </button>
//         ) : (
//           <button
//             className="cards__show-all-btn"
//             onClick={() => setShowAll(false)}
//           >
//             Згорнути
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Cards.scss";
import { Card } from "../Card/Card";
import { Product } from "../../types";
import { Title } from "../Title/Title";
import { fetchProducts } from "../../api/api";

export const Cards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [visibleWidth, setVisibleWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Загружаем товары
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Фильтрация товаров по категории "immune"
  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === "immune"),
    [products]
  );
console.log(filteredProducts.length);
  // Рассчитываем ширину контейнера для отображения карточек
  useEffect(() => {
    const calculateVisibleWidth = () => {
      if (contentRef.current) {
        setVisibleWidth(contentRef.current.offsetWidth);
      }
    };

    calculateVisibleWidth();
    window.addEventListener("resize", calculateVisibleWidth);
    return () => window.removeEventListener("resize", calculateVisibleWidth);
  }, [filteredProducts]);

  // Расчёт полной ширины одной карточки (с учётом gap)
  let fullWidthOneCard = 0;
  let cardsPerView = 1;

  if (listRef.current && filteredProducts.length > 0) {
    const firstCard = listRef.current.children[0] as HTMLElement | undefined;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
      fullWidthOneCard = cardWidth + gap;

      if (fullWidthOneCard > 0) {
        cardsPerView = Math.floor(visibleWidth / fullWidthOneCard); // Сколько карточек влазит
      }
    }
  }

  // Максимальный индекс для пролистывания
  const maxIndex = useMemo(() => {
    if (cardsPerView === 0 || fullWidthOneCard === 0) return 0;

    const totalSteps = Math.max(
      Math.ceil((filteredProducts.length - cardsPerView) / cardsPerView),
      0
    );

    return totalSteps;
  }, [filteredProducts.length, visibleWidth, fullWidthOneCard, cardsPerView]);

  // Управление стрелками
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => prev - 1);
  };

  // Перемещение списка карточек
  useEffect(() => {
    if (!listRef.current || filteredProducts.length === 0) return;

    const firstCard = listRef.current.children[0] as HTMLElement;
        const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
        const stepSize = firstCard.offsetWidth + gap + fullWidthOneCard;
        const offset = stepSize * currentIndex;

    listRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, filteredProducts, cardsPerView]);

  // Отображение состояния загрузки/ошибки
  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <div className="error">
        <h2>Error loading products</h2>
        <p>{error}</p>
      </div>
    );
  }

  // Рендер компонента
  return (
    <div className="cards">
      <Title title="Популярні товари (Імунна система)" />

      {/* Левая стрелка */}
      <img
        className={`cards__arrow cards__arrow--left ${
          !canPrev ? "cards__arrow--disabled" : ""
        }`}
        src={`${process.env.PUBLIC_URL}/images/icons/arrowLeft.svg`}
        alt="arrowLeft"
        onClick={handlePrev}
      />

      {/* Правая стрелка */}
      <img
        className={`cards__arrow cards__arrow--right ${
          !canNext ? "cards__arrow--disabled" : ""
        }`}
        src={`${process.env.PUBLIC_URL}/images/icons/arrowRight.svg`}
        alt="arrowRight"
        onClick={handleNext}
      />

      {/* Контент с карточками */}
      <div
        className={`cards__content ${showAll ? "show-all" : ""}`}
        ref={contentRef}
      >
        <div className="cards__list" ref={listRef}>
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Кнопка "Усі товари"/"Згорнути" */}
      <div className="cards__show-all">
        {!showAll ? (
          <button
            className="cards__show-all-btn"
            onClick={() => setShowAll(true)}
          >
            Усі товари
          </button>
        ) : (
          <button
            className="cards__show-all-btn"
            onClick={() => setShowAll(false)}
          >
            Згорнути
          </button>
        )}
      </div>
    </div>
  );
};


