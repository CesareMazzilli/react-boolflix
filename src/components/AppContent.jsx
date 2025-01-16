import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const AppContent = () => {
  const { movies, tvShows, query } = useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const renderMovies = () => {
    if (loading) {
      return <p className="loading-message">Caricamento in corso...</p>;
    }

    if (error) {
      return <p className="error-message">{error}</p>;
    }

    if (!movies.length && !tvShows.length && query) {
      return (
        <p className="no-results">
          Nessun risultato trovato per "<strong>{query}</strong>".
        </p>
      );
    }

    return (
      <>
        {movies.length > 0 && (
          <>
            <h2 className="section-title">Film</h2>
            <div className="movies-container">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
        {tvShows.length > 0 && (
          <>
            <h2 className="section-title">Serie TV</h2>
            <div className="movies-container">
              {tvShows.map((tv) => (
                <MovieCard key={tv.id} movie={tv} />
              ))}
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="app-content">
      <SearchBar setLoading={setLoading} setError={setError} />
      {renderMovies()}
    </div>
  );
};

export default AppContent;