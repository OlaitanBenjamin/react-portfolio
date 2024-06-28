import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ben</h1>
        <p className={styles.description}>
          I'm an IT Specialist and Frontend Developer with over 6 years of experience using PHP, HTML, CSS,  Javascript, React, Wordpress and Wix. Also, I provide any IT solutions other than web development. Kindly reach out if you'd like to request a service!
        </p>
        <a href="mailto:adeniyi_benjamin@yahoo.com" className={styles.contactBtn}>
          Request Service
        </a>
      </div>
      <img
        src={getImageUrl("hero/head.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
