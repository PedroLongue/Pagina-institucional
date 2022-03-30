import React from "react";
import styles from "./LiSearchbox.module.css";

const LiSearchbox = () => {
  return (
    <>
      <div className={styles["search-box"]}>
        <input
          className={styles["search-box__txt"]}
          type="text"
          placeholder="Buscar..."
        />
        <button className={styles["search-box__btn"]}>
          <i className={styles["sprite-search-box"]} />
        </button>
      </div>
    </>
  );
};

export { LiSearchbox };
