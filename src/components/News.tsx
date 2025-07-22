import React, { useState } from "react";
import NewsCard from "./NewsCard";
import styles from "./News.module.css";

const news = [
  {
    title: "Курс доллара растет",
    description: "Сегодня курс доллара достиг максимума за год.",
    image: "/Frame 260.png",
  },
  {
    title: "Промо: 0% комиссия",
    description: "Только до конца месяца — обмен EUR без комиссии!",
    image: "/Frame 260.png",
  },
  {
    title: "Новый партнер — BankX",
    description: "Мы рады объявить о сотрудничестве с BankX.",
    image: "/Frame 260.png",
  },
  {
    title: "Обновление платформы",
    description: "Вышло крупное обновление интерфейса.",
    image: "/Frame 260.png",
  },
  {
    title: "Безопасность операций",
    description: "Ваши переводы теперь под ещё большей защитой.",
    image: "/Frame 260.png",
  },
];

const getSlidesToShow = () => {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
};

const News = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = news.length - slidesToShow;
  const goPrev = () => setCurrent((c) => Math.max(0, c - 1));
  const goNext = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className={styles.newsSection} id="news">
      <h2 className={styles.title}>Новости</h2>
      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={goPrev} disabled={current === 0}>&lt;</button>
        <div className={styles.slider}>
          {news.slice(current, current + slidesToShow).map((n, i) => (
            <NewsCard key={i} title={n.title} description={n.description} image={n.image} />
          ))}
        </div>
        <button className={styles.arrow} onClick={goNext} disabled={current === maxIndex}>&gt;</button>
      </div>
    </section>
  );
};

export default News; 