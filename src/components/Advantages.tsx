import React from "react";
import styles from "./Advantages.module.css";

const items = [
  { title: "Быстро", text: "Молниеносные переводы по всему миру." },
  { title: "Выгодно", text: "Лучшие курсы и минимальные комиссии." },
  { title: "Безопасно", text: "Современные технологии защиты ваших средств." },
  { title: "Поддержка 24/7", text: "Оперативная помощь в любое время." },
];

const Advantages = () => (
  <section className={styles.advantagesSection}>
    <h2 className={styles.title}>Преимущества</h2>
    <div className={styles.cards}>
      {items.map((item, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.cardTitle}>{item.title}</div>
          <div className={styles.cardText}>{item.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages; 