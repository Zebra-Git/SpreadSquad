import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo1.svg";

const Modal = ({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalContent}>{children}</div>
        <button className={styles.modalClose} onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeRow}>
          <span className={styles.marqueeItem}>Новости: Курс доллара растет</span>
          <span className={styles.marqueeItem}>Промо: 0% комиссия на обмен EUR</span>
          <span className={styles.marqueeItem}>Новый партнер — BankX</span>
          <span className={styles.marqueeItem}>Обновление платформы</span>
          <span className={styles.marqueeItem}>Безопасность операций</span>
          <span className={styles.marqueeItem}>Новости: Курс доллара растет</span>
          <span className={styles.marqueeItem}>Промо: 0% комиссия на обмен EUR</span>
          <span className={styles.marqueeItem}>Новый партнер — BankX</span>
          <span className={styles.marqueeItem}>Обновление платформы</span>
          <span className={styles.marqueeItem}>Безопасность операций</span>
        </div>
      </div>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип Speed Squad" className={styles.logoImg} />
        </div>
        <nav className={styles.nav}>
          <a href="#loyalty">Программа лояльности</a>
          <a href="#reviews">Отзывы</a>
          <a href="#help">Центр помощи</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.registerBtn} onClick={() => setOpenRegister(true)}>Регистрация</button>
          <button className={styles.loginBtn} onClick={() => setOpenLogin(true)}>Войти</button>
          <button className={styles.burgerBtn} aria-label="Меню">
            <span className={styles.burgerIcon} />
          </button>
        </div>
      </div>
      <Modal open={openLogin} onClose={() => setOpenLogin(false)} title="Вход">
        <form className={styles.modalForm}>
          <input className={styles.modalInput} type="email" placeholder="Email" />
          <input className={styles.modalInput} type="password" placeholder="Пароль" />
          <button className={styles.modalSubmit} type="button">Войти</button>
        </form>
      </Modal>
      <Modal open={openRegister} onClose={() => setOpenRegister(false)} title="Регистрация">
        <form className={styles.modalForm}>
          <input className={styles.modalInput} type="text" placeholder="Имя" />
          <input className={styles.modalInput} type="email" placeholder="Email" />
          <input className={styles.modalInput} type="password" placeholder="Пароль" />
          <button className={styles.modalSubmit} type="button">Зарегистрироваться</button>
        </form>
      </Modal>
    </header>
  );
};

export default Header; 