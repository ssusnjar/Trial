import React from "react";
import Styles from "./Images.module.css";
import { on, on2, on3 } from "../../../assets";
const Images = () => {
  return (
    <div className={Styles.Images}>
      <img src={on} className={Styles.image}></img>
      <img src={on2} className={Styles.image}></img>
      <img src={on3} className={Styles.image}></img>
    </div>
  );
};

export default Images;
