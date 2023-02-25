import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./mybutton.css";

export const MyButton = ({ value, onClick, title }) => {
  return (
    <Tooltip title={title}>
      <button value={value} onClick={onClick} className="littleButton">
        <span className="text">{value}</span>
      </button>
    </Tooltip>
  );
};
