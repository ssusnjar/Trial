import React from "react";
import Section from "../TitleSection/TitleSection";
import Text from "./Text/Text";
import Styles from "./ONama.module.css";
import Images from "./Images/Images";

const ONama = () => {
  return (
    <div>
      <Section title="O nama" />
      <div className={Styles.main}>
        <Text />
        <div className={Styles.pictures}>
          <Images />
        </div>
      </div>
    </div>
  );
};

export default ONama;
