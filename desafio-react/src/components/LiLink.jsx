import React from "react";
import styles from "./LiLiink.module.css";

const LiLink = (props) => {
  const { text } = props;

  return <li className={styles["menu-list"]}>{<a href="/">{text}</a>}</li>;
};

export { LiLink };
