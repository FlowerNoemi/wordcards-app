import axios from "./axios";

const card_URL = "/englishwords/api/lessonname.php";

export const getLessonName = async () => {
  const getData = await axios.get(card_URL).then((res) => res.data);
  return getData;
};
