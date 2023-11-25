import React from "react";
import Logo from "../../assets/CompanyName.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo1 from "../../assets/download.svg";
function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={styles.main}>
      <nav className={navbar ? styles.navbarActive : styles.navbar}>
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
