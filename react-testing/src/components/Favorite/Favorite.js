import React from 'react';
import MovieList from '../MovieList/MovieList';

const Favorite = ({ list }) => {
  return (
    <div className="Favorite">
      <h3> My favorite movies</h3>
      <MovieList movies={list}></MovieList>
    </div>
  );
};

export default Favorite;
