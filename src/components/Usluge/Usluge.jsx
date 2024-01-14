import React from "react";
import styles from "./Usluge.module.css";
import Section from "../TitleSection/TitleSection";
import Article from "./Aritcle/Article";
import { Img1, Img2, Img3 } from "../../assets";

const Usluge = () => {
  return (
    <div>
      {/* <div className={styles.razmak}></div> */}
      <Section title="Usluge" />
      <div className={styles.main}>
        <div className={styles.usluge}>
          <Article
            image={Img3}
            title="Tehničko tehnološke usluge kod proizvodnje betona"
            // description="-Izrada dokumentacije tvorničke kontrole proizvodnje tvornica betona i predgotovljenih elemenata, te kamenoloma - separacija,
            // - Izrada i održavanje receptura betonskih mješavina kod tekuće proizvodnje tvornice betona i predgotovljenih elemenata,
            // - Izrada i prilagodba receptura betonskih mješavina prema zahtjevima projektne dokumentacije"
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
            // description="Ispitne metode laboratorija obuhvaćaju: -svježi beton, -očvrsli beton, -agregat, -.geotehnički istražni radovi"
            description={
              <div>
                <h4>Ispitne metode laboratorija obuhvaćaju:</h4>
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
            // description="-Izrada geotehničkih elaborata, -Izrada idejnog rješenja, glavnog projekta i izvedbenog projekta geotehničkih konstrukcija, -usluge stručnog nadzora za izvođenje građevinskih radova"
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
