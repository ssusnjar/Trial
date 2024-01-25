import React from "react";
import About from "./About/About";
import styles from "./Kontakt.module.css";
import Section from "../TitleSection/TitleSection";

const Kontakt = () => {
  return (
    <div>
      <Section title="Kontakt" />
      <div className={styles.kontakt}>
        <p className={styles.location}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.356457850048!2d16.49152282668016!3d43.51575893868141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f6b3644e52d%3A0x5dccac0d1bbddb63!2sTrial%20d.o.o.!5e0!3m2!1shr!2shr!4v1696113592367!5m2!1shr!2shr"
            className={styles.googleMap}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
        <hr className={styles.line}></hr>
        <About />
      </div>
    </div>
  );
};

export default Kontakt;
