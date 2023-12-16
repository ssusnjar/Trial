import React from "react";
import styles from "./Projekti.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Article/Article";
import Supetar from "../../../public/DVDSupetar.png";
import Pelješac from "../../../public/PelješacPristup.png";
import Sinj from "../../../public/SportskaDvoranaSinj.png";
import RibarskaLuka from "../../../public/RibarskaLukaBrizine.png";
import SudSplit from "../../../public/OpcinskiSudSplit.png";

const Projekti = () => {
  return (
    <div>
      <Section title="Projekti" />
      <div className={styles.usluge}>
        <Article
          image={Supetar}
          title="DVD Supetar"
          description="Hrvatska"
          year="2020-2022"
        />
        <Article
          image={Pelješac}
          title="Istarski ipsilon"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={Sinj}
          title="Čvor Matulji"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={RibarskaLuka}
          title="Istarski ipsilon"
          description="Hrvatska"
          year="2018-2020"
        />
        <Article
          image={SudSplit}
          title="Čvor Matulji"
          description="Hrvatska"
          year="2018-2020"
        />
      </div>
    </div>
  );
};

export default Projekti;
