import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";

const SearchBar = () => {
  const { setMovies, setQuery } = useContext(GlobalStateContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    setQuery(inputValue);

    const API_KEY = "2b953ffe3cece7a81cbcd50dafbe38c4";
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}&language=it-IT`
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca un film..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

const handleSearch = async () => {
    setQuery(inputValue);
  
    const API_KEY = "2b953ffe3cece7a81cbcd50dafbe38c4";
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}&language=it-IT`
    );
    const tvResponse = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${inputValue}&language=it-IT`
    );
  
    const movieData = await movieResponse.json();
    const tvData = await tvResponse.json();
  
    setMovies(movieData.results || []);
    setTvShows(tvData.results || []);
  };
  

export default SearchBar;