import * as React from "react";
import flowerNoemi from "../assets/fn.webp";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/Theme";
import "./footer.css";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="footerBox">
        <p className="copy">
          <sup>&copy;</sup> 2023
        </p>
        <img
          src={flowerNoemi}
          loading="lazy"
          alt="FlowerNoemi logó"
          title="FlowerNoemi logó"
          className="logoFlowerNoemi"
        />
      </div>
    </ThemeProvider>
  );
};

export default Footer;
