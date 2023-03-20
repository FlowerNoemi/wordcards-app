import React from "react";

import TextField from "@mui/material/TextField";
import "./myinput.css";

export const MyInput = ({ value, onChange, label, count, labelCode }) => {
  return (
    <div>
      <TextField className="counter-heading" aria-readonly value={count}>
        {count}
      </TextField>
      <TextField
        id="outlined-multiline-flexible"
        label={"angol"}
        multiline
        maxRows={4}
        onChange={onChange}
        value={value}
      />
      <TextField
        id="outlined-multiline-flexible"
        label={"magyar"}
        multiline
        maxRows={4}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
