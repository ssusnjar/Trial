import React from "react";
import styles from "./Usluge.module.css";
import icon from "../../../assets/icon.svg";
import { Img1, Img2, Img3 } from "../../../assets";
const Usluge = () => {
  return (
    <div className={styles.usluge}>
      <h1 className={styles.title}> Posljednji projekti</h1>
      <div className={styles.main}>
        <div className={styles.column}>
          <img src={Img1} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Project planning</h3>
            <p className={styles.paragraph}>
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Img2} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Project planning</h3>
            <p className={styles.paragraph}>
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Img3} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Project planning</h3>
            <p className={styles.paragraph}>
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
            </p>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <button className={styles.button}>SVI PROJEKTI</button>
      </div>
    </div>
  );
};

export default Usluge;
