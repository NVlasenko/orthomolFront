import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import { useProduct } from "../../context/ProductContext";
import { FaStar } from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  productId: number;
};

export const Reviews: React.FC = () => {
  const { product } = useProduct();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [hoverRating, setHoverRating] = useState<number | null>(null); // ✅ Для ховера звёзд

  // ✅ Загружаем отзывы из localStorage
  useEffect(() => {
    if (product) {
      const storedReviews = localStorage.getItem("reviews");
      if (storedReviews) {
        const parsedReviews: Review[] = JSON.parse(storedReviews);
        setReviews(parsedReviews.filter((rev) => rev.productId === product.id));
      }
    }
  }, [product]);

  // ✅ Функция для сохранения отзыва
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.rating > 0 && newReview.comment) {
      const newReviewObj: Review = {
        id: Date.now(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString(),
        productId: product!.id,
      };

      const updatedReviews = [...reviews, newReviewObj];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  if (!product) return <p>Товар не знайдено</p>;

  return (
    <div className="reviews">
      <h2 className="reviews__title">Відгуки</h2>

      {/* ✅ Если нет отзывов */}
      {reviews.length === 0 ? (
        <p className="reviews__empty">
          На цей товар ({product.name}) ще немає відгуків. Будьте першим!
        </p>
      ) : (
        <ul className="reviews__list">
          {reviews.map((review) => (
            <li key={review.id} className="review">
              <div className="review__header">
                <span className="review__name">{review.name}</span>
                <span className="review__date">{review.date}</span>
              </div>
              <div className="review__rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`star ${index < review.rating ? "filled" : ""}`}
                  />
                ))}
              </div>
              <p className="review__comment">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}

      {/* ✅ Форма добавления отзыва */}
      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Залишити відгук</h3>
        <input
          type="text"
          placeholder="Ваше ім'я"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
        />
        <div className="review-form__rating">
          <span>Оцінка:</span>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`star ${
                index < (hoverRating ?? newReview.rating) ? "filled" : ""
              }`}
              onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
              onMouseEnter={() => setHoverRating(index + 1)} // ✅ Наведение
              onMouseLeave={() => setHoverRating(null)} // ✅ Убираем при уходе
            />
          ))}
        </div>
        <textarea
          placeholder="Напишіть відгук..."
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          required
        ></textarea>
        <button type="submit">Залишити відгук</button>
      </form>
    </div>
  );
};
