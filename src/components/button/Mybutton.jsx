import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/Theme";
import "./mybutton.css";

export const MyButton = ({ value, onClick, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={title}>
        <Button
          variant="contained"
          value={value}
          onClick={onClick}
          className="littleButton"
        >
          {value}
        </Button>
      </Tooltip>
    </ThemeProvider>
  );
};
