import axios from 'axios'
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {}
})

export default api
