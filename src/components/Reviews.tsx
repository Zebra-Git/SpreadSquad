import React from "react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Иван Петров",
    text: "Очень удобный сервис! Перевёл деньги за 2 минуты, курс отличный.",
    rating: 5,
  },
  {
    name: "Мария Смирнова",
    text: "Пользуюсь уже год, всегда быстро и безопасно. Рекомендую!",
    rating: 5,
  },
  {
    name: "Алексей Ким",
    text: "Поддержка отвечает мгновенно, всё прозрачно и честно.",
    rating: 4,
  },
  {
    name: "Ольга Иванова",
    text: "Всё понравилось, буду пользоваться ещё!",
    rating: 5,
  },
];

const Reviews = () => (
  <section className={styles.reviewsSection} id="reviews">
    <h2 className={styles.title}>Отзывы</h2>
    <div className={styles.cards}>
      {reviews.map((r, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.stars}>{"★".repeat(r.rating)}<span className={styles.empty}>{"★".repeat(5 - r.rating)}</span></div>
          <p className={styles.text}>{r.text}</p>
          <div className={styles.name}>{r.name}</div>
        </div>
      ))}
    </div>
    <button className={styles.moreBtn}>Подробнее</button>
  </section>
);

export default Reviews; 