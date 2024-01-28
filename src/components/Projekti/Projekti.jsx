import React from "react";
import styles from "./Projekti.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Article/Article";
import Supetar from "../../../public/DVDSupetar.png";
import Pelješac from "../../../public/PelješacPristup.png";
import Sinj from "../../../public/SportskaDvoranaSinj.png";
import RibarskaLuka from "../../../public/RibarskaLukaBrizine.png";
import SudSplit from "../../../public/OpcinskiSudSplit.png";
import OSPujanke from "../../../src/assets/OSPujanke.png";
import Reciklazno from "../../../src/assets/ReciklažnoPujanke.png";
import VilaDalmacija from "../../../src/assets/Vila Dalmacija.png";
import Karavanke from "../../../src/assets/TunelKaravanke.png";
import Maslacak from "../../../src/assets/VrtićMaslačak .png";
import Lamjana from "../../../src/assets/Lamjana.png";
import Liburnska from "../../../src/assets/Liburnska.png";

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
          title="Pelješac s pristupnim cestama na D8 i D414"
          description="Hrvatska"
          year="2022"
        />
        <Article
          image={Sinj}
          title="Sportska dvorana Pujanke"
          description="Hrvatska"
          year="2018"
        />
        <Article
          image={RibarskaLuka}
          title="RIbarska luka Brižine"
          description="Hrvatska"
          year="2021"
        />
        <Article
          image={SudSplit}
          title="Općinski sud u Splitu"
          description="Hrvatska"
          year="2023"
        />
        <Article
          image={Reciklazno}
          title="Reciklažno dvorište Pujanke"
          description="Hrvatska"
          year="2023"
        />
        <Article
          image={VilaDalmacija}
          title="Vila Dalmacija"
          description="Hrvatska"
          year="2018"
        />
        <Article
          image={Maslacak}
          title="Vrtić- Dugopoljski Maslačak"
          description="Hrvatska"
          year="2023"
        />
        <Article
          image={OSPujanke}
          title="Osnovna Škola Sinj"
          description="Hrvatska"
          year="2020"
        />
        <Article
          image={Karavanke}
          title="Tunel Karavanke"
          description="Slovenija"
          year="2021"
        />
        <Article
          image={Liburnska}
          title="Rekonstrukcija Liburnske obale Zadar"
          description="Hrvatska"
          year="2021"
        />
        <Article
          image={Lamjana}
          title="RIbarska luka Vela Lamjana"
          description="Hrvatska"
          year="2020"
        />
      </div>
    </div>
  );
};

export default Projekti;
