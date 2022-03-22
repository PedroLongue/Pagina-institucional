import React from "react";
import logo from "../arquivos/img/logo-m3-desktop.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["main-header"]}>
        <div className={styles["container"]}>
          <div className={styles["main-header__title"]}>
            <a href="/">
              <img src={logo} alt="" />
            </a>

            <div className={styles["main-header__bootstrap"]}>
              <input
                className={styles["main-header__input"]}
                type="text"
                placeholder="Buscar..."
              ></input>

              <button
                id="search-icon"
                className={styles["main-header__button"]}
              >
                <i className={styles["sprite-search-icon"]}></i>
              </button>
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
    </>
  );
};

export { Home };
