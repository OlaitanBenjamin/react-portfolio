import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/full.png")}
          alt="My full avatar"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>The Beginning</h3>
              <p>
              I started my IT career in 2017 with Africa's largest business, leisure and lifestyle destination <a href="https://www.landmarkafrica.com/" className={styles.landmark} target="_blank">Landmark Africa Group</a>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Developer</h3>
              <p>
              Information Technology Specialist, Wix & Wordpress Web Developer and also a Drone Pilot. Based in Lagos, Nigeria and available to work remotely (full time).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Solution Provider</h3>
              <p>
              I am a solution provider, result driven and passionate about building excellent softwares and websites with ease of use and accessibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Enterpreneur</h3>
              <p>
              Ben is currently the CEO of Divs and Plugins Technology (DAPT), where we provide all IT solutions ranging from Starlink Installations, Fiber Optics/radio installation for internet, CCTV cameras, Intercoms, Access Controls, Office365 Admin Management and Network configuration.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
