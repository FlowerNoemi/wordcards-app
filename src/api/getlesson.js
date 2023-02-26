import axios from "./axios";

const card_URL = "/englishwords/api/lessonname.php";

export const getLessonName = async (id) => {
  const getData = await axios
    .get(card_URL + `?id=${id}`)
    .then((res) => res.data);
  return getData;
};
