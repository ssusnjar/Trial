import React from "react";
import styles from "./Usluge.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Aritcle/Article";
import { Img1, Img2, Img3 } from "../../assets";
import Usluga1 from "../../../public/Usluga1.png";
import Usluga2 from "../../../public/Usluga2.png";
import Usluga3 from "../../../public/Usluga3.png";
import Usluga4 from "../../../public/Usluga4.png";

const Usluge = () => {
  return (
    <div>
      <Section title="Usluge" />
      <div className={styles.main}>
        <div className={styles.usluge}>
          <Article
            image={Usluga2}
            title="Tehničko tehnološke usluge kod proizvodnje betona"
            description={
              <div>
                <ul>
                  <li>
                    Izrada dokumentacije tvorničke kontrole proizvodnje tvornica
                    betona i predgotovljenih elemenata, te kamenoloma -
                    separacija
                  </li>
                  <li>
                    Izrada i održavanje receptura betonskih mješavina kod tekuće
                    proizvodnje tvornice betona i predgotovljenih elemenata
                  </li>
                  <li>
                    Izrada i prilagodba receptura betonskih mješavina prema
                    zahtjevima projektne dokumentacije
                  </li>
                </ul>
              </div>
            }
          />
          <Article
            image={Usluga3}
            title="Laboratorijske usluge"
            description={
              <div>
                <h4 className={styles.title}>
                  Ispitne metode laboratorija obuhvaćaju:
                </h4>
                <ul>
                  <li>svježi beton</li>
                  <li>očvrsli beton</li>
                  <li>agregat</li>
                  <li>geotehnički istražni radovi</li>
                </ul>
              </div>
            }
          />
          <Article
            image={Usluga1}
            title="Projektiranje i nadzor geotehničkih konstrukcija"
            description={
              <div>
                <ul>
                  <li>Izrada geotehničkih elaborata</li>
                  <li>
                    Izrada idejnog rješenja, glavnog projekta i izvedbenog
                    projekta geotehničkih konstrukcija
                  </li>
                  <li>
                    Usluge stručnog nadzora za izvođenje građevinskih radova
                  </li>
                </ul>
              </div>
            }
          />
          <Article
            image={Usluga4}
            title="Kontrola kvalitete betona kod izvođenja betonskih konstrukcija"
            description={
              <div>
                <ul>
                  <li>Izrada plana betoniranja i nadzornih radnji izvođača</li>
                  <li>Izrada završne ocjene o kvaliteti ugrađenog betona</li>
                  <li>
                    Naknadno ispitivanje betona u betonskim konstrukcijama
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Usluge;
