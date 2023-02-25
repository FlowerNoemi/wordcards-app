import React, { useState } from "react";
import { MyButton } from "../button/Mybutton";
import "./card.css";

const WordCard = ({ card }) => {
  const { id, en, hu, lesson_id } = card;
  const [flip, setFlip] = useState(false);

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
        <div className="front" onClick={() => setFlip(!flip)}>
          <h2>{lesson_id}</h2>
          <h1>{en}</h1>
          <div className="buttonBox">
            <MyButton
              value="Felolvas"
              onClick={() => englishspeak(en)}
            ></MyButton>
          </div>
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>
          <h2>{lesson_id}</h2>
          <h1>{hu}</h1>
          <div className="buttonBox">
            <MyButton
              value="Felolvas"
              onClick={() => hungarianspeak(hu)}
            ></MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WordCard;
