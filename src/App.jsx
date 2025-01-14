import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const apiKey = "2b953ffe3cece7a81cbcd50dafbe38c4";
const apiUrl = "https://api.themoviedb.org/3";

function App() {
  const [searchValue, setSearchValue] = useState("");

  function getMovies() {
    axios
    .get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    })
    .then((resp) => {
      console.log(resp);
    });
  }

  return (
    <>
     <h1>Ciao</h1>
     <input type="search" value={searchValue} onChange={(event => setSearchValue(event.target.value))}/>
     <button onClick={getMovies}>Cerca</button>
    </>
  );
}

export default App
