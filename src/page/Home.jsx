import React, { useState, useEffect } from "react";
import { getCard } from "../api/getcard";
import { getLessonName } from "../api/getlesson";
import { getCategory } from "../api/getcategory";
import WordCard from "../components/card/Card";
import Accordin from "../components/list/Accordin";
import "./home.css";
import { MyButton } from "../components/button/Mybutton";

const Home = () => {
  const [categorya, setCategory] = useState([""]);
  const [allCards, setAllCards] = useState([""]);
  const [cards, setCards] = useState([""]);

  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState([1]);
  const [cardId, setCardId] = useState("");
  const [flip, setFlip] = useState(false);

  const getCategoryList = async () => {
    try {
      const dataRequest = await getCategory();
      console.log(dataRequest);
      setCategory(dataRequest);
    } catch (e) {
      console.log("error message : ", e);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const getallCard = async (id) => {
    try {
      const dataRequest = await getCard(id);
      console.log(dataRequest);
      setCards(dataRequest);
    } catch (e) {
      console.log("error message : ", e);
    }
  };

  const getallCardsName = async (id) => {
    try {
      const dataRequest = await getLessonName(id);
      console.log(dataRequest);
      setAllCards(dataRequest);
    } catch (e) {
      console.log("error message : ", e);
    }
  };

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
      setFlip(false);
    } else {
      newChecked.splice(currentIndex, 1);
      setCardId("");
      setCount(1);
      setFlip(false);
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

  const categoryChoose = (id) => {
    getallCardsName(id);
  };

  return (
    <div className="homeBox">
      <div className="homeAccordinBox">
        <Accordin
          categoryChoose={categoryChoose}
          handleToggle={handleToggle}
          checked={checked}
          allCards={allCards}
          categorya={categorya}
        />
      </div>

      <div className="homeCardBox">
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
      </div>
    </div>
  );
};

export default Home;
