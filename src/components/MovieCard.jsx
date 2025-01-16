import React from "react";

const MovieCard = ({ movie }) => {
  const {
    title,
    original_title,
    original_name,
    vote_average,
    poster_path,
    original_language,
  } = movie;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : "https://via.placeholder.com/342x513?text=Nessuna+Immagine";

  const roundedVote = Math.ceil(vote_average / 2); // Arrotondiamo da 1 a 5

  return (
    <div className="card">
      <img src={imageUrl} alt={title || original_name} />
      <div className="card-info">
        <h3>{title || original_name}</h3>
        <p>Titolo originale: {original_title || original_name}</p>
        <p>Lingua: {original_language.toUpperCase()}</p>
        <p>Voto: {"★".repeat(roundedVote) + "☆".repeat(5 - roundedVote)}</p>
      </div>
    </div>
  );
};

export default MovieCard;