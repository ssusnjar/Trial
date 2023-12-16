import React from "react";
import styles from "./Usluge.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Aritcle/Article";
import { Img1, Img2, Img3 } from "../../assets";

const Usluge = () => {
  return (
    <div className={styles.main}>
      <div className={styles.razmak}></div>
      <Section title="Usluge" />
      <div className={styles.usluge}>
        <Article
          image={Img1}
          title="Project planning"
          description="Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih. oguće je da postoje stilovi koji poništavaju "
        />
        <Article
          image={Img2}
          title="Project planning"
          description=" Koordinacija i nadzor svih aspekata projekta, uključujući vreme, troškove i kvalitet."
        />
        <Article
          image={Img3}
          title="Project planning"
          description="Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih"
        />
        <Article
          image={Img2}
          title="Project planning"
          description="Kvalitetna građevinska usluga igra ključnu ulogu u oblikovanju našeg fizičkog okruženja i doprinosi ekonomskom razvoju zajednica"
        />
        <Article
          image={Img1}
          title="Project planning"
          description="Sanacije svih vrsta konstrukcija i krovova; adaptacije stambenih"
        />
      </div>
    </div>
  );
};

export default Usluge;
