import React from "react";
import { MyButton } from "../button/Mybutton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import Tooltip from "@mui/material/Tooltip";
import TaskIcon from "@mui/icons-material/Task";

import "./card.css";

const WordCard = ({ card, flipFunction, counter, flip }) => {
  const { id, en, hu, lesson_id } = card;

  const englishspeak = (en) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = en;
    msg.lang = "en-US";
    speechSynthesis.speak(msg);
  };

  const hungarianspeak = (hu) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = hu;
    msg.lang = "hu";
    speechSynthesis.speak(msg);
  };

  return (
    <div className="card-grid">
      <div className={`card ${flip ? "flip" : ""}`} key={id}>
        <div className="front">
          <h2 className="card-id">{lesson_id}</h2>
          <h1>{en}</h1>
          <div className="buttonBox">
            <MyButton
              value="Felolvas"
              onClick={() => englishspeak(en)}
            ></MyButton>
          </div>
          <div>
            <Tooltip title={"Fordít"}>
              <RotateLeftIcon
                fontSize="large"
                onClick={flipFunction}
              ></RotateLeftIcon>
            </Tooltip>

            <Tooltip title={"Már tudom"}>
              <TaskIcon fontSize="large" onClick={counter}></TaskIcon>
            </Tooltip>
          </div>
        </div>
        <div className="back">
          <h2 className="card-id">{lesson_id}</h2>
          <h1>{hu}</h1>
          <div className="buttonBox">
            <MyButton
              value="Felolvas"
              onClick={() => hungarianspeak(hu)}
            ></MyButton>
          </div>
          <Tooltip title={"Fordít"}>
            <RotateRightIcon
              fontSize="large"
              onClick={flipFunction}
            ></RotateRightIcon>
          </Tooltip>
          <Tooltip title={"Már tudom"}>
            <TaskIcon fontSize="large" onClick={counter}></TaskIcon>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default WordCard;
