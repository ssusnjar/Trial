import React from "react";
import Styles from "./Text.module.css";

const Text = () => {
  return (
    <div>
      {" "}
      <p className={Styles.firstTxt}>
        Tvrtka Trial d.o.o. je osnovana 2015. na temelju dugogodišnjeg iskustva
        u radu na ispitivanju građevinskih materijala te njihovoj primjeni na
        raznim projektima. Od trenutka osnivanja naš stručan tim čine najbolji
        stručnjaci koji svojim inovativnim inženjerskim rješenjima svakodnevno
        unaprijeđuju procese u građevinarstvu. Naše područje djelovanja obuhvaća
        široki spektar radova u građevinarstvu počevši od cjelokupne
        visokogradnje i niskogradnje, sve inženjerske i pomorske građevine, sve
        do različitih terenskih istražnih radova. Naša dugoročna pouzdanost je
        prepoznata diljem Hrvatske, te u inozemstvu (Slovenija, BiH, Crna Gora).
      </p>
      {/* <div className={Styles.background}>
        <div className={Styles.secondTxt}>
          <h3 className={Styles.title}>Što nas izdvaja?</h3>
          <div className={Styles.list}>
            <ul>
              <li>Usmjerenost na potrebe Investitora</li>
              <li>Stalno poboljšanje kvalitete usluga</li>
              <li>Zadovoljstvo izvršenim poslom</li>
              <li>Konkurentan položaj na tržištu</li>
              <li>Zapošljavanje i dodatno educiranje stručnog osoblja</li>
              <li>Briga o zaštiti okoliša, zdravlja i sigurnost na radu</li>
              <li>Očuvanje prirodnih resursa</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Text;
