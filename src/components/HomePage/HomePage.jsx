import React from "react";
import Naslovna from "./Naslovna/Naslovna";
import Projekti from "./Projekti/Projekti";
import Usluge from "./Usluge/Usluge";

const HomePage = () => {
  return (
    <div>
      <Naslovna />
      <Projekti />
      <Usluge />
    </div>
  );
};

export default HomePage;
