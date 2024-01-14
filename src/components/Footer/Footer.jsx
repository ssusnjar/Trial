import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logoBili.svg";
import Logo2 from "../../../public/Logonovo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <img src={Logo} className={styles.Logo}></img>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>ADRESA I SJEDIŠTE</h3>
        <p>Sjedište:</p>
        <p>Ulica Velimira Terzića 17</p>
        <p>21 000 Split</p>
        <p>Laboratorij:</p>
        <p>Ulica Velimira Terzića 17</p>
        <p>21 000 Split</p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>KONTAKT</h3>
        {/* <p>64026545</p> */}
        <p>info@trial.hr</p>
      </div>
    </div>
  );
};

export default Footer;
