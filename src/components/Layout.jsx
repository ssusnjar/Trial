import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import styles from "./Layout.module.css";
import Blank from "./blank";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
