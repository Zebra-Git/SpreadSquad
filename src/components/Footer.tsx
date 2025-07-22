import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo1.svg";
import iconInstagram from "../assets/hugeicons_instagram.svg";
import iconWhatsapp from "../assets/ic_baseline-whatsapp.svg";
import iconTelegram from "../assets/iconoir_telegram.svg";
import iconTelegramBot from "../assets/iconoir_telegram copy.svg";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.logoCol}>
        <img src={logo} alt="SPREAD SQUAD" className={styles.logoImg} />
      </div>
      <div className={styles.linksCol}>
        <a href="#loyalty">Программа лояльности</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </div>
      <div className={styles.linksCol}>
        <a href="#articles">Статьи</a>
        <a href="#news">Новости</a>
        <a href="#docs">Документы</a>
      </div>
      <div className={styles.socialCol}>
        <div className={styles.email}>WorkMailExample@example.com</div>
        <div className={styles.socialBtns}>
          <button className={styles.socialBtn}><img src={iconInstagram} alt="Instagram" className={styles.iconSvg} /> Телеграм канал</button>
          <button className={styles.socialBtn}><img src={iconWhatsapp} alt="Whatsapp" className={styles.iconSvg} /> Телеграм канал</button>
          <button className={styles.socialBtn}><img src={iconTelegram} alt="Telegram" className={styles.iconSvg} /> Телеграм канал</button>
          <button className={styles.socialBtnActive}><img src={iconTelegramBot} alt="Telegram Bot" className={styles.iconSvg} /> Телеграм бот</button>
        </div>
        <div className={styles.metaNote}>Meta признана экстремистской<br />на территории РФ*</div>
      </div>
    </div>
  </footer>
);

export default Footer; 