import React from "react";
import styles from "./Main.module.css";
import { LiLink } from "../components/LiLink";

const Main = () => {
  return (
    <>
      <div className={styles["container"]}>
        <h2 className={styles["main-title"]}>INSTITUCIONAL</h2>
        <div className={styles["main-institucional"]}>
          <div className={styles["main-institucional__menu"]}>
            <ul className={styles["main-menu"]}>
              <LiLink text="Sobre" link="/" />
              <LiLink text="Forma de Pagamento" link="/" />
              <LiLink text="Entrega" link="/" />
              <LiLink text="Troca e Devolução" link="/" />
              <LiLink text="Segurança e Privacidade" link="/" />
              <LiLink text="Contato" link="/contato" />
            </ul>
          </div>

          <div className={styles["main-description"]}>
            {/*   <h2 className={styles["main-title"]}>INSTITUCIONAL</h2> */}
            <h3 className={styles["main-subtitle"]}>Sobre</h3>
            <p className={styles["main-text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className={styles["main-text"]}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className={styles["main-text"]}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Main };
