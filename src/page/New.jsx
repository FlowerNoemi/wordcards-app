import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/Theme";

const New = () => {
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

export default New;
