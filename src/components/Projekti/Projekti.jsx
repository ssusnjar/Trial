import React from "react";
import styles from "./Projekti.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Article/Article";
import { Img1, Img2, Img3 } from "../../assets";

const Projekti = () => {
  return (
    <div>
      <Section title="Projekti" />
      <div className={styles.usluge}>
        <Article
          image={Img1}
          title="Čvor Matulji"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={Img2}
          title="Istarski ipsilon"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={Img3}
          title="Čvor Matulji"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={Img2}
          title="Istarski ipsilon"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={Img1}
          title="Čvor Matulji"
          description="Hrvatska"
          year="2018-2020"
        />
      </div>
    </div>
  );
};

export default Projekti;
