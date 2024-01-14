import React from "react";
import styles from "./About.module.css";
import { location, mail, phone } from "../../../assets";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>KONTAKTIRAJTE NAS</h1>
      <div className={styles.line}>
        <img src={location} className={styles.icon}></img>
        <div className={styles.text}>
          <p className={styles.description}>Sjedište:</p>
          <p className={styles.description}>
            Ulica Velimira Terzića 17, 21000 Split
          </p>
        </div>
      </div>
      <div className={styles.line}>
        <img src={location} className={styles.icon}></img>
        <div className={styles.text}>
          <p className={styles.description}>Laboratorij:</p>
          <p className={styles.description}>Sv. Liberana 48,, 21000 Split</p>
        </div>
      </div>
      {/* <div className={styles.line}>
        <img src={phone} className={styles.icon}></img>
        <p className={styles.description}>+385 98 984 4433</p>
      </div> */}
      <div className={styles.line}>
        <img src={mail} className={styles.icon}></img>
        <p className={styles.description2}>info@trial.hr</p>
      </div>
    </div>
  );
};

export default About;
