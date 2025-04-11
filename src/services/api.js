import axios from 'axios'

export const getPosts = async () => {
  const res = await axios.get('/src/data/posts.json') // Cambiá esto por tu URL real luego
  return res.data
}
