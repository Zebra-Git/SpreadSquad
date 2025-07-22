import React from "react";
import PartnerLogo from "./PartnerLogo";
import styles from "./Partners.module.css";

const partners = Array(12).fill({ src: "/image 81.svg", alt: "Forbes" });

const Partners = () => {
  return (
    <section className={styles.partnersSection} id="partners">
      <h2 className={styles.title}>Партнеры</h2>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeRow}>
          {partners.map((p, i) => (
            <span className={styles.logoWrapper} key={i}>
              <PartnerLogo src={p.src} alt={p.alt} />
            </span>
          ))}
          {/* Дублируем для бесшовной прокрутки */}
          {partners.map((p, i) => (
            <span className={styles.logoWrapper} key={"d"+i}>
              <PartnerLogo src={p.src} alt={p.alt} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 