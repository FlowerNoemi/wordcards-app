import React, { useState, useEffect } from "react";
import { getCard } from "../api/getcard";
import { getLessonName } from "../api/getlesson";
import WordCard from "../components/card/Card";
import List from "@mui/material/List";
import MyList from "../components/list/MyList";
import "./home.css";

const Home = () => {
  const [allCards, setAllCards] = useState([""]);
  const [cards, setCards] = useState([""]);
  const [patternid, setPatternId] = useState([""]);
  const [count, setCount] = useState(1);
  const [checked, setChecked] = React.useState([1]);

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

  const found = allCards.find((element) => {
    return element.rownumb == count;
  });

  const patternRow = allCards.filter((element) => {
    return count == element.rownumb;
  });

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [checked];

    if (currentIndex === -1) {
      newChecked.push(id);
      console.log(id);
      getallCard(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div>
      <h1>Szókártya</h1>
      <div>
        {cards.map((card, id) => {
          return <WordCard key={id} card={card} />;
        })}
      </div>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {allCards.map((allcard) => {
          return (
            <MyList
              key={allcard.id}
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
