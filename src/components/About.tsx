import React from "react";
import styles from "./About.module.css";

const About = () => (
  <section className={styles.aboutSection} id="about">
    <h2 className={styles.title}>О компании</h2>
    <p className={styles.text}>
      {Array(30).fill('Любой текст').join(' ')}
    </p>
  </section>
);
export default About; 