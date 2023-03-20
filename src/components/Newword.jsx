import React, { useState } from "react";
import { MyInput } from "./input/MyInput";
import { MyButton } from "./button/Mybutton";
import Box from "@mui/material/Box";
import "./newword.css";

const Newword = () => {
  const [count, setCount] = useState(1);
  const [encomponents, setEnComponents] = useState([
    <MyInput key={0} count={count}></MyInput>,
  ]);

  const newWordField = () => {
    const listItems = count + 1;

    console.log(listItems);

    let labelCode = encomponents.length + 1;
    console.log(labelCode);

    setCount(count + 1);

    setEnComponents(
      encomponents.concat(<MyInput key={labelCode} count={count + 1}></MyInput>)
    );

    console.log(encomponents);
  };
  const deleteWordField = () => {
    console.log(encomponents.length);

    const newComponentsEn = encomponents.slice(0, -1);
    setEnComponents(newComponentsEn);

    setCount(count - 1);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>{encomponents}</div>
      </Box>
      <MyButton value="Új szó" onClick={newWordField}></MyButton>
      <MyButton value="Szó törlés" onClick={() => deleteWordField()}></MyButton>
    </div>
  );
};

export default Newword;
