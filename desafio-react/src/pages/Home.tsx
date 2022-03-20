import React from "react";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["main-header"]}>
        <label className={styles["lbHeader"]}>search</label>
        <input type="text" placeholder="What's you need?"></input>
        <ul className={styles["menuHeader"]}>
          <li className={styles["linkMenu"]}>ENTRAR</li>
          <li className={styles["linkMenu"]}>ENTRAR</li>
        </ul>
      </div>
      <div className={styles["mainMenu"]}>
        <ul className={styles["menuHeader"]}>
          <li className={styles["linkMenu"]}>ENTRAR</li>
          <li className={styles["linkMenu"]}>ENTRAR</li>
        </ul>
      </div>
    </>
  );
};

export { Home };
