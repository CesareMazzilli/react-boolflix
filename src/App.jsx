import React, { useContext } from "react";
import { GlobalStateProvider, GlobalStateContext } from "./context/GlobalStateContext";
import SearchBar from "./components/AppContent";
import MovieCard from "./components/MovieCard";
import "./styles/App.css";

const AppContent = () => {
  const { movies } = useContext(GlobalStateContext);

  return (
    <div>
      <SearchBar />
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <GlobalStateProvider>
    <div className="app">
      <header className="app-header">
        <h1>BoolFlix</h1>
      </header>
      <main>
        <AppContent />
      </main>
    </div>
  </GlobalStateProvider>
);

export default App;