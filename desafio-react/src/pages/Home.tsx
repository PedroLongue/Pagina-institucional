import React from "react";
import logo from "../arquivos/img/logo-m3-desktop.png";
import styles from "./Home.module.css";
import { LiSearchbox } from "../components/LiSearchbox";

function openMenu() {
  console.log("open");
}

const Home = () => {
  return (
    <>
      <div className={styles["main-header"]}>
        <div className={styles["container"]}>
          <div className={styles["main-header__title"]}>
            <button
              onClick={openMenu}
              className={styles["main-header__button-menu"]}
            >
              <i className={styles["sprite-menu-icon"]}></i>
            </button>

            <a href="/">
              <img src={logo} alt="" />
            </a>

            <div className={styles["main-header__searchbox-desktop"]}>
              <LiSearchbox />
            </div>

            <ul className={styles["menuHeader"]}>
              <li className={styles["linkMenu"]}>
                {" "}
                <a href="/">ENTRAR</a>{" "}
              </li>
              <li className={styles["linkMenu"]}>
                <a href="/">
                  <i className={styles["sprite-cart-icon"]}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["mainMenu"]}>
        <div className={styles["container"]}>
          <ul className={styles["menuHeader"]}>
            <li className={styles["linkMenu"]}>
              <a href="/">CURSOS</a>
            </li>
            <li className={styles["linkMenu"]}>
              <a href="/">SAIBA MAIS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["main-header__searchbox-mobile"]}>
        <LiSearchbox />
      </div>
    </>
  );
};

export { Home };
