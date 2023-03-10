import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import "./mybutton.css";

export const MyButton = ({ value, onClick, title }) => {
  return (
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
  );
};
