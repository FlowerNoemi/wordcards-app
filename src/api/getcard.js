import axios from "./axios";

const card_URL = "/englishwords/api/lesson.php";

export const getCard = async (id) => {
  const cardData = await axios
    .get(card_URL + `?id=${id}`)
    .then((res) => res.data);
  return cardData;
};
