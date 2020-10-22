import url from './utils';

const searchMovieByName = (name) => {
  return fetch(`${url}${name}`).then((res) => res.json());
};

export default searchMovieByName;
