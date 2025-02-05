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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Ошибка загрузки продуктов:", err);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === "immune"),
    [products]
  );

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

  let fullWidthOneCard = 0;
  let cardsPerView = 1;

  if (listRef.current && filteredProducts.length > 0) {
    const firstCard = listRef.current.children[0] as HTMLElement | undefined;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
      fullWidthOneCard = cardWidth + gap;

      if (fullWidthOneCard > 0) {
        cardsPerView = Math.floor(visibleWidth / fullWidthOneCard);
      }
    }
  }

  const maxIndex = useMemo(() => {
    if (cardsPerView === 0 || fullWidthOneCard === 0) return 0;

    const totalSteps = Math.max(
      Math.ceil((filteredProducts.length - cardsPerView) / cardsPerView),
      0
    );

    return totalSteps + 1;
  }, [filteredProducts.length, visibleWidth, fullWidthOneCard, cardsPerView]);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!listRef.current || filteredProducts.length === 0) return;

    const firstCard = listRef.current.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(listRef.current).gap || "0");
    const stepSize = firstCard.offsetWidth + gap + fullWidthOneCard;
    const offset = stepSize * currentIndex;

    listRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, filteredProducts, cardsPerView]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <div className="error">
        <h2>Error loading products</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="cards">
      <Title title="Популярні товари" />

      <img
        className={`cards__arrow cards__arrow--left ${
          !canPrev ? "cards__arrow--disabled" : ""
        }`}
        src={`${process.env.PUBLIC_URL}/images/icons/arrowLeft.svg`}
        alt="arrowLeft"
        onClick={handlePrev}
      />

      <img
        className={`cards__arrow cards__arrow--right ${
          !canNext ? "cards__arrow--disabled" : ""
        }`}
        src={`${process.env.PUBLIC_URL}/images/icons/arrowRight.svg`}
        alt="arrowRight"
        onClick={handleNext}
      />

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
