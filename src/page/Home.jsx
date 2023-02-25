import React, { useState, useEffect } from "react";
import { getCard } from "../api/getcard";
import { getLessonName } from "../api/getlesson";
import WordCard from "../components/card/Card";
import List from "@mui/material/List";
import MyList from "../components/list/MyList";
import "./home.css";
import { MyButton } from "../components/button/Mybutton";

const Home = () => {
  const [allCards, setAllCards] = useState([""]);
  const [cards, setCards] = useState([""]);
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState([1]);
  const [cardId, setCardId] = useState("");
  const [flip, setFlip] = useState(false);

  const getallCard = async (id) => {
    try {
      const dataRequest = await getCard(id);
      console.log(dataRequest);
      setCards(dataRequest);
    } catch (e) {
      console.log("error message : ", e);
    }
  };

  const getallCardsName = async () => {
    try {
      const dataRequest = await getLessonName();
      console.log(dataRequest);
      setAllCards(dataRequest);
    } catch (e) {
      console.log("error message : ", e);
    }
  };
  useEffect(() => {
    getallCardsName();
  }, []);

  const found = cards.find((element) => {
    const filterCardId = parseInt(element.lesson_id);
    return filterCardId === count;
  });

  const cardFilter = cards.filter((element) => {
    const filterCardId = parseInt(element.lesson_id);
    return count === filterCardId;
  });

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [checked];

    if (currentIndex === -1) {
      newChecked.push(id);
      console.log(id);
      getallCard(id);
      setCardId(id);
      setCount(1);
    } else {
      newChecked.splice(currentIndex, 1);
      setCardId("");
      setCount(1);
    }
    setChecked(newChecked);
  };

  const counter = () => {
    setCount(count + 1);
    setFlip(false);
  };

  const flipFunction = () => {
    setFlip(!flip);
  };

  return (
    <div>
      <h1>Szókártya</h1>

      {cardId !== "" && (
        <div>
          {found && count <= cards.length ? (
            <div>
              {cardFilter.map((card, id) => {
                return (
                  <WordCard
                    key={id}
                    card={card}
                    counter={() => counter()}
                    flipFunction={() => flipFunction()}
                    flip={flip}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <h2>Nincs több!</h2>
              <MyButton onClick={() => setCount(1)} value="Újra"></MyButton>
            </div>
          )}
        </div>
      )}
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {allCards.map((allcard, id) => {
          return (
            <MyList
              key={id}
              allcard={allcard}
              onChange={handleToggle(allcard.id)}
              checked={checked.indexOf(allcard.id) !== -1}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Home;
