import React from "react";
import Styles from "./Text.module.css";

const Text = () => {
  return (
    <div>
      {" "}
      <p className={Styles.firstTxt}>
        Društvo s ograničenom odgovornošću Teh-gradnja, je građevinska tvrtka
        registrirana 1994. godine i u cijelosti je u privatnom vlasništvu
        osnivača inženjera građevine Ilije Beara. Registrirana je za izvođenje
        radova gradnje i sanacije objekata visokogradnje i niskogradnje.
        Prepoznatljiva je na domaćem tržištu jer je tvrtka tijekom više od 25
        godina poslovanja stekla iznimno iskustvo u gradnji i sanaciji objekata
        različitih namjena, u skladu s najvišim stručnim standardima. Izrasla je
        u modernu tvrtku visokih poslovnih vrijednosti, bogate tradicije i
        kreativnih iskoraka mladih stručnjaka.
      </p>
      <div className={Styles.background}>
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
      </div>
    </div>
  );
};

export default Text;
