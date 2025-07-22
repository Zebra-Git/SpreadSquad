import React from "react";
import styles from "./ExchangeSidebar.module.css";

const InfoPill = ({ label, value, link }: { label: string; value: string; link: string }) => (
  <div className={styles.pill}>
    <div className={styles.pillLabel}>{label}</div>
    <div className={styles.pillValue}>{value}</div>
    <a className={styles.pillLink} href={link}>Подробнее</a>
  </div>
);

const CityBlock = () => (
  <div className={styles.block}>
    <div className={styles.blockHeader}>
      <span>Выберите город</span>
      <span className={styles.blockArrow}>▼</span>
    </div>
    <div className={styles.blockDesc}>Курьер выезжает к вам и еще здесь текст глушилка пока что пусть будет так...</div>
    <div className={styles.pillsRow}>
      <InfoPill label="Город обмена" value="Москва +" link="#" />
      <InfoPill label="Доставка" value="Будет доставлено, 10:00" link="#" />
    </div>
  </div>
);

const CashBlock = () => (
  <div className={styles.block}>
    <div className={styles.blockHeader}>
      <span>При обмене наличных</span>
      <span className={styles.blockArrow}>▼</span>
    </div>
    <div className={styles.blockDesc}>Курьер выезжает к вам и еще здесь текст глушилка пока что пусть будет так...</div>
    <div className={styles.pillsRow}>
      <InfoPill label="Город обмена" value="Москва +" link="#" />
      <InfoPill label="Доставка" value="Будет доставлено, 10:00" link="#" />
    </div>
  </div>
);

const MessageBlock = () => (
  <div className={styles.block}>
    <div className={styles.blockHeaderMsg}>Сообщение по выбранному направлению обмена</div>
    <div className={styles.blockDescMsg}>Какая то информация по выбранному направлению, очень важная</div>
    <div className={styles.blockHint}>
      <span className={styles.hintIcon}>❓</span>
      <span>Указывайте точный адрес отправителя</span>
    </div>
  </div>
);

const ExchangeSidebar = ({ block }: { block: "city" | "cash" | "message" }) => {
  if (block === "city") return <CityBlock />;
  if (block === "cash") return <CashBlock />;
  return <MessageBlock />;
};

export default ExchangeSidebar; 