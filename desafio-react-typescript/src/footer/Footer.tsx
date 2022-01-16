import React from "react";
import { isMobile } from "react-device-detect";
import "./Footer.css";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import NewsLetter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <NewsLetter />

      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </footer>
  );
};

export default Footer;
