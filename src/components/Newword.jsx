import React, { useState } from "react";
import { MyButton } from "./button/Mybutton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "../api/axios";
import "./newword.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const newword_URL = "/englishwords/api/new.php";

const Newword = () => {
  const [count, setCount] = useState(1);
  const [success, setSucces] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [newWords, setnewWords] = useState([{ id: count, en: "", hu: "" }]);
  const [lessonCode, setLessonCode] = useState([{ lesson: "", uuid: "" }]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLessonCode({
      ...lessonCode,
      [e.target.name]: value,
    });
  };

  const newwordFunction = async (e) => {
    e.preventDefault();

    console.log(newWords);
    for (let newWord of newWords) {
      try {
        const response = await axios.post(
          newword_URL,
          {
            uuid: lessonCode.uuid,
            id: newWord.id,
            en: newWord.en,
            hu: newWord.hu,
            lessonname: lessonCode.lesson,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response?.data.code === "2") {
          setSucces(true);
          setErr(false);
          setErrMsg("");
        } else {
          setErrMsg(response?.data.message);
          setErr(true);
        }
      } catch (err) {
        if (!err?.response) {
          setErrMsg("A szerver nem válaszol!");
          setErr(true);
        } else {
          setErrMsg(err.response?.data.message);
          setErr(true);
        }
      }
    }
  };

  const handleFormChange = (index, event) => {
    let data = [...newWords];
    data[index][event.target.name] = event.target.value;
    setnewWords(data);
  };

  const newWordField = () => {
    let newfield = { id: count + 1, en: "", hu: "" };
    setCount(count + 1);
    setnewWords([...newWords, newfield]);
  };

  const deleteWordField = () => {
    const newComponents = newWords.slice(0, -1);
    setnewWords(newComponents);

    setCount(count - 1);
  };

  const Back = () => {
    setSucces(false);
    setnewWords([{ id: count, en: "", hu: "" }]);
    setLessonCode([{ lesson: "", uuid: "" }]);
  };

  return (
    <div>
      {success ? (
        <section>
          <h1>Sikeresen hozzáadva </h1>
          <MyButton value="Új lecke" onClick={Back}></MyButton>
        </section>
      ) : (
        <div>
          <ControlPointIcon
            fontSize="large"
            onClick={newWordField}
            sx={{ width: "42px" }}
          ></ControlPointIcon>
          <DeleteOutlineIcon
            value="Szó törlés"
            onClick={deleteWordField}
            sx={{ width: "42px" }}
            fontSize="large"
          ></DeleteOutlineIcon>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={newwordFunction}
          >
            <div className="top-box-input-field">
              <TextField
                id="outlined-multiline-flexible"
                label={"Lecke neve"}
                multiline
                maxRows={4}
                onChange={(e) => handleChange(e)}
                name="lesson"
                sx={{ px: 1 }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label={"Egyedi id"}
                multiline
                maxRows={4}
                name="uuid"
                onChange={(e) => handleChange(e)}
                sx={{ px: 1 }}
              />
            </div>
            <div className="newword-box">
              {newWords.map((input, index) => {
                return (
                  <div key={index} className="newword-input-box">
                    <TextField
                      name="id"
                      placeholder="Id"
                      value={input.id}
                      disabled
                      onChange={(event) => handleFormChange(index, event)}
                    />
                    <TextField
                      name="en"
                      placeholder="Angol"
                      value={input.en}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                    <TextField
                      name="hu"
                      placeholder="Magyar"
                      value={input.hu}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="newwordbox-button">
              <MyButton value="Küldés" onClick={newwordFunction}></MyButton>
            </div>
            {err && <p>{errMsg}</p>}
          </Box>
        </div>
      )}
    </div>
  );
};

export default Newword;
