import React from "react";
import styles from "./LiLiink.module.css";

const LiLink = (props) => {
  const { text } = props;
  const { link } = props;

  return <li className={styles["menu-list"]}>{<a href={link}>{text}</a>}</li>;
};

export { LiLink };
