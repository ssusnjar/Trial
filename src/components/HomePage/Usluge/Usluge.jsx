import React from "react";
import styles from "./Usluge.module.css";
import { Link } from "react-router-dom";
import Supetar from "../../../../public/DVDSupetar.png";
import Pelješac from "../../../../public/PelješacPristup.png";
import Sinj from "../../../../public/SportskaDvoranaSinj.png";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const Usluge = () => {
  return (
    <div className={styles.usluge}>
      <h1 className={styles.title}> POSLJEDNJI PROJEKTI</h1>
      <div className={styles.main}>
        <div className={styles.column}>
          <img src={Supetar} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> DVD Supetar</h3>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Pelješac} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Pelješac</h3>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Sinj} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Sinj</h3>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <Link to="/Projekti" onClick={scrollToTop}>
          <button className={styles.button}>SVI PROJEKTI</button>
        </Link>
      </div>
    </div>
  );
};

export default Usluge;
