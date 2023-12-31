import React from "react";
import Logo from "../../assets/CompanyName.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo1 from "../../assets/download.svg";
import Logo2 from "../../../public/Logonovo.png";

function Header() {
  const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };
  // window.addEventListener("scroll", changeBackground);

  return (
    <div className={styles.main}>
      {/* <nav className={navbar ? styles.navbarActive : styles.navbar}> */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <a href="/">
            <img src={Logo1} className={styles.logo}></img>
          </a>
        </div>

        <div className={styles.navbarRight}>
          <input
            type="checkbox"
            id={styles.check}
            className={styles.check}
            checked={navbar}
            onChange={toggleNavbar}
          ></input>
          <label for={styles.check} className={styles.checkbtn}>
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul className={styles.navbarList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Početna
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oNama"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                O nama
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Usluge"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Usluge
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projekti"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Projekti
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Kontakt"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
