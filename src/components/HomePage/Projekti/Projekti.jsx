import React from "react";
import styles from "./Projekti.module.css";
import icon from "../../../assets/icon.svg";

const Projekti = () => {
  return (
    <div className={styles.usluge}>
      <h1 className={styles.title}> Neke od usluga</h1>
      <div className={styles.main}>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Project planning</h3>
            <p className={styles.paragraph}>
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Project planning</h3>
            <p className={styles.paragraph}>
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
              Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
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
        <button className={styles.button}>SVE USLUGE</button>
      </div>
    </div>
  );
};

export default Projekti;
