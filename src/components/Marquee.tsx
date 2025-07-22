import React from "react";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  children: React.ReactNode;
};

const Marquee = ({ children }: MarqueeProps) => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent}>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </div>
    </div>
  );
};

export default Marquee; 