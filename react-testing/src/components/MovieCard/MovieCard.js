import React from 'react';
import './MovieCard.css';
const MovieCard = ({ name, year, url }) => {
  return (
    <div className="MovieCard">
      <img alt="movies" src={`https://image.tmdb.org/t/p/w200/${url}`} />
      <div>
        <h3>{name}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
