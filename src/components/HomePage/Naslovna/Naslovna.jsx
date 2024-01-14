import React from "react";
import styles from "./Naslovna.module.css";

const Naslovna = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.text}>
          <p className={styles.title}>
            Za inženjerstvo i s njim povezano tehničko savjetovanje
          </p>
          <p className={styles.title2}>
            Ispitivanje građevinskih materijala i stručni nadzor
          </p>
        </div>
      </div>
      <div className={styles.numbers}>
        <div className={styles.projectsNumber}>
          <p className={styles.num}>37</p>
          <p className={styles.txt}>Projektata</p>
        </div>
        <div className={styles.yearNumber}>
          <p className={styles.num}>15+</p>
          <p className={styles.txt}>Godina iskustva</p>
        </div>
      </div>
    </div>
  );
};

export default Naslovna;
