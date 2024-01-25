import React from "react";
import styles from "./Usluge.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Aritcle/Article";
import { Img1, Img2, Img3 } from "../../assets";

const Usluge = () => {
  return (
    <div>
      <Section title="Usluge" />
      <div className={styles.main}>
        <div className={styles.usluge}>
          <Article
            image={Img3}
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
            image={Img1}
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
            image={Img2}
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
        </div>
      </div>
    </div>
  );
};

export default Usluge;
