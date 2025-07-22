import React from "react";
import Header from "./components/Header";
import CurrencyExchange from "./components/CurrencyExchange";
import Partners from "./components/Partners";
import News from "./components/News";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Advantages from "./components/Advantages";
import ExchangeSidebar from "./components/ExchangeSidebar";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Обмен валют<br />по всему миру</h1>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <CurrencyExchange />
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroRightTop}>
                <ExchangeSidebar block="city" />
                <ExchangeSidebar block="cash" />
              </div>
              <div className={styles.heroRightBottom}>
                <ExchangeSidebar block="message" />
              </div>
            </div>
          </div>
        </section>
        <Advantages />
        <Partners />
        <News />
        <About />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;