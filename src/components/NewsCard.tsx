import React from "react";
import styles from "./NewsCard.module.css";

type NewsCardProps = {
  title: string;
  description: string;
  image?: string;
};

const NewsCard = ({ title, description, image }: NewsCardProps) => {
  return (
    <div className={styles.card}>
      {image && <img className={styles.image} src={image} alt={title} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default NewsCard; 