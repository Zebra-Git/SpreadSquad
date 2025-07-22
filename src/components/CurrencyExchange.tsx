import React, { useState, useEffect, useMemo } from "react";
import styles from "./CurrencyExchange.module.css";

interface Rate {
  currency: string;
  rate: number;
  min: number;
  max: number;
}

const CurrencyExchange: React.FC = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [amountIn, setAmountIn] = useState<string>("");
  const [amountOut, setAmountOut] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch("/data/rates.json");
        const data = await res.json();
        setRates(data.rates);
        if (data.rates.length > 1) {
          setFromCurrency(data.rates[0].currency);
          setToCurrency(data.rates[1].currency);
        }
      } catch {
        setRates([]);
      }
    }
    fetchRates();
  }, []);

  const selectedFromRate = useMemo(
    () => rates.find((rate) => rate.currency === fromCurrency),
    [rates, fromCurrency]
  );
  const selectedToRate = useMemo(
    () => rates.find((rate) => rate.currency === toCurrency),
    [rates, toCurrency]
  );

  useEffect(() => {
    if (amountIn && selectedFromRate && selectedToRate) {
      const fromRate = selectedFromRate.rate;
      const toRate = selectedToRate.rate;
      const result = (parseFloat(amountIn) * toRate) / fromRate;
      setAmountOut(result ? result.toLocaleString("ru-RU", { maximumFractionDigits: 0 }) : "");
    } else {
      setAmountOut("");
    }
  }, [amountIn, fromCurrency, toCurrency, rates, selectedFromRate, selectedToRate]);

  const handleAmountInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmountIn(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: валидация и отправка
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.gridRow}>
          <div className={styles.colLeft}>
            <div className={styles.label}>Отдаете</div>
            <select
              value={fromCurrency}
              onChange={e => setFromCurrency(e.target.value)}
              className={styles.select}
            >
              {rates.map(rate => (
                <option key={rate.currency} value={rate.currency}>{rate.currency}</option>
              ))}
            </select>
            <input
              type="text"
              className={styles.input}
              placeholder="1 000 000"
              value={amountIn}
              onChange={handleAmountInChange}
              autoComplete="off"
            />
          </div>
          <div className={styles.colRight}>
            <div className={styles.label}>Получаете</div>
            <select
              value={toCurrency}
              onChange={e => setToCurrency(e.target.value)}
              className={styles.select}
            >
              {rates.map(rate => (
                <option key={rate.currency} value={rate.currency}>{rate.currency === "RUB" ? "Рубли" : rate.currency}</option>
              ))}
            </select>
            <input
              type="text"
              className={styles.input}
              placeholder="1 000 000"
              value={amountOut}
              disabled
            />
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Курс обмена</div>
          <div className={styles.infoValue}>
            {selectedFromRate && selectedToRate
              ? `${(selectedToRate.rate / selectedFromRate.rate).toLocaleString("ru-RU", { maximumFractionDigits: 0 })} ${selectedToRate.currency === "RUB" ? "₽" : selectedToRate.currency}`
              : "-"}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Мин. сумма</div>
          <div className={styles.infoValue}>
            {selectedFromRate ? `${selectedFromRate.min.toLocaleString("ru-RU")} ${selectedFromRate.currency === "RUB" ? "₽" : selectedFromRate.currency}` : "-"}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Макс. сумма</div>
          <div className={styles.infoValue}>
            {selectedFromRate ? `${selectedFromRate.max.toLocaleString("ru-RU")} ${selectedFromRate.currency === "RUB" ? "₽" : selectedFromRate.currency}` : "-"}
          </div>
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="@MorozovOne"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="off"
        />
        <input
          type="email"
          className={styles.input}
          placeholder="example@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className={styles.submitButton}>
          Обменять валюту
        </button>
        <div className={styles.agreement}>
          Нажимая кнопку, вы соглашаетесь с <a href="#">политикой KYC/AML</a> и <a href="#">пользовательским соглашением</a>.
        </div>
      </form>
    </div>
  );
};

export default CurrencyExchange;