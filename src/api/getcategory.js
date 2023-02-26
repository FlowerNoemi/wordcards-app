import axios from "./axios";

const card_URL = "/englishwords/api/category.php";

export const getCategory = async () => {
  const getData = await axios.get(card_URL).then((res) => res.data);
  return getData;
};
