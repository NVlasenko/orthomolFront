import React, { useState, useEffect } from "react";
import { Product } from "../../types";
import "./ProductDetails.scss";
import { useFavorites } from "../../context/FavoritesContext";
import { useBasket } from "../../context/BasketContextType";
import { DeliveryPaymentGuarantee } from "../DeliveryPaymentGuarantee";
import { SimilarProducts } from "../SimilarProducts";
import { TabSwitcher } from "../TabSwitcher";
import { ProductProvider } from "../../context/ProductContext";

type Props = {
  product: Product;
};

export const ProductDetails: React.FC<Props> = ({ product }) => {
  const images = Array.isArray(product.imgProductRef)
    ? product.imgProductRef
    : [product.imgProductRef];

  console.log("Product images:", images);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 3; // Количество миниатюр
  const { addToBasket, basketItems } = useBasket();
  // ✅ Добавляем избранное
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [inBasket, setInBasket] = useState(false);
  // Уменьшение количества
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Увеличение количества
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Добавление в корзину с выбранным количеством

  // useEffect(() => {
  //   setFavorite(isFavorite(product.id));
  // }, [product.id, isFavorite]);
  useEffect(() => {
    setFavorite(isFavorite(product.id));
    setInBasket(basketItems.some((item) => item.product.id === product.id));
  }, [basketItems, product.id, isFavorite]);
  const handleAddToBasket = () => {
    if (inBasket) return;
    for (let i = 0; i < quantity; i++) {
      addToBasket(product);
    }
  };
  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    setFavorite(!favorite);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleScrollUp = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
    }
  };

  const handleScrollDown = () => {
    if (visibleStart < images.length - visibleCount) {
      setVisibleStart(visibleStart + 1);
    }
  };

  return (
    <ProductProvider product={product}> 
       <div className="productDetails">
      <h1 className="productDetails__title"> {product.name}</h1>

      {/* Галерея миниатюр */}
      <div className="productDetails__content">
        <div className="productDetails__gallery">
          <button
            className="productDetails__arrow up"
            onClick={handleScrollUp}
            disabled={visibleStart === 0}
          >
            ▲
          </button>

          <div className="productDetails__thumbnails">
            {images
              .slice(visibleStart, visibleStart + visibleCount)
              .map((img, index) => (
                <div
                  key={index}
                  className={`productDetails__thumbnail ${
                    img === selectedImage ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={
                      img.startsWith("/images/")
                        ? `${process.env.PUBLIC_URL}${img}`
                        : img
                    }
                    alt={`Thumbnail ${index}`}
                    onError={(e) =>
                      (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/no-image.png`)
                    }
                  />
                </div>
              ))}
          </div>

          <button
            className="productDetails__arrow down"
            onClick={handleScrollDown}
            disabled={visibleStart >= images.length - visibleCount}
          >
            ▼
          </button>
        </div>

        <div className="productDetails__mainImage">
          <img
            src={
              selectedImage.startsWith("/images/")
                ? `${process.env.PUBLIC_URL}${selectedImage}`
                : selectedImage
            }
            alt="Главное изображение"
            onError={(e) =>
              (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/no-image.png`)
            }
          />
        </div>

        {/* Кнопка "Добавить в избранное" */}
        {/* <div className="productDetails__favorites">
          <button
            className={`card__actions--wishlist ${favorite ? "favorite" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleFavoriteToggle();
            }}
          >
            {favorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="card__actions--icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
                alt="heart"
                className="heart__icon"
              />
            )}
          </button>
        </div> */}

        <div className="productDetails__info">
          <div className="productDetails__status">
            <span
              className="productDetails__status--availability"
              style={{
                backgroundColor: product.inStock ? "#9EC79D26" : "#D9534F", // Фон: зелёный или красный
                color: product.inStock ? "#71AA47" : "#000", // Текст: тёмно-зелёный или красный
              }}
            >
              {product.inStock ? "В наявності" : "Немає в наявності"}
            </span>

            <span className="productDetails__status--sku">
              Артикул{" "}
              <span className="productDetails__status--sku-code">
                {product.articleNumber}
              </span>
            </span>
            <div className="productDetails__favorites">
              <button
                className={`card__actions--wishlist ${
                  favorite ? "favorite" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleFavoriteToggle();
                }}
              >
                {favorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card__actions--icon"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icons/heart.svg`}
                    alt="heart"
                    className="heart__icon"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="productDetails__price">
            {product.priceRegular.toLocaleString()} ₴
          </div>

          <div className="productDetails__count">
            <p>Кіл-ть</p>
            <div className="productDetails__count--controls">
              <button
                className="productDetails__count--btn"
                onClick={handleDecrease}
              >
                −
              </button>
              <span className="productDetails__count-value">{quantity}</span>
              <button
                className="productDetails__count--btn"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>

          <button
            className={`productDetails__addToCart ${
              !product.inStock ? "out-of-stock" : inBasket ? "in-basket" : ""
            }`}
            onClick={handleAddToBasket}
            disabled={inBasket || !product.inStock} // Блокируем, если нет в наличии
          >
            {!product.inStock
              ? "Немає в наявності"
              : inBasket
              ? "У кошику"
              : "В кошик"}
          </button>

          <div className="productDetails__bestBefore">
            <p className="productDetails__bestBefore--icon">i</p>
            <p className="productDetails__bestBefore--text">
              Термін придатності до {product.expirationDate}
            </p>
          </div>

          <div className="productDetails__explicit">
            <h3 className="productDetails__explicit--title">ДОКЛАДНІШЕ</h3>
            <div className="productDetails__explicit--list">
              <div className="productDetails__explicit--row">
                <span className="productDetails__explicit--label">Бренд</span>
                <span className="productDetails__explicit--value productDetails__explicit--value-link">
                  {product.brand}
                </span>
              </div>
              <div className="productDetails__explicit--row">
                <span className="productDetails__explicit--label">Форма</span>
                <span className="productDetails__explicit--value">
                  {product.shape}
                </span>
              </div>
              <div className="productDetails__explicit--row">
                <span className="productDetails__explicit--label">Фасовка</span>
                <span className="productDetails__explicit--value">
                  {product.packaging} шт
                </span>
              </div>
              <div className="productDetails__explicit--row">
                <span className="productDetails__explicit--label">
                  Термін придатності
                </span>
                <span className="productDetails__explicit--value">
                  {product.expirationDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Главное изображение */}

        <DeliveryPaymentGuarantee />
      </div>

      <SimilarProducts productId={product.id} category={product.category} />

      <TabSwitcher/>
    </div> 
    </ProductProvider>
  
  );
};
