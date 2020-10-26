import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="MovieList">
      {movies
        .filter((movie) => movie.url)
        .map((movie, i) => {
          return <MovieCard key={i} name={movie.name} year={movie.year} url={movie.url} />;
        })}
    </div>
  );
};

export default MovieList;
