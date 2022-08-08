import axios from "axios";

// client
const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api" 
});

// Get Pages
const getPages = (setTotalPages) => {
  client.get(`/character`)
  .then(response => {
      setTotalPages(response.data.info.pages)
  })
  .catch(error => {
      console.log(error.response.data.error)
  })
}

// Get Characters
const getCharacters = (setCharacters, totalPages, setIsLoading) => {
  const reqChar = [...Array(totalPages).keys()].map((p) => p = `/character?page=${p+1}`)
  setIsLoading(true)
  axios.all(reqChar.map(r => client.get(r)))
  .then(axios.spread((...responses) => {
      setCharacters(
          responses.map((response) => {
              return [...response.data.results]
          })
          .flat()
      )
      setIsLoading(false)
  }))
  .catch(error => {
      console.log(error.response.data.error)
  })
}

export {
  client,
  getPages,
  getCharacters
}