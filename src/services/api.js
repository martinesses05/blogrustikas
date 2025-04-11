import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("/data/posts.json"); // Cambiá esto por tu URL real luego
  return res.data;
};
