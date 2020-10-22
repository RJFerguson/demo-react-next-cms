import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import Favorite from '../Favorite/Favorite';
import ApiCall from '../../api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
      currentList: [],
    };
  }

  componentDidMount() {
    this.setState({
      favoriteList: [{ name: 'Interstellar', year: '2014-11-05', url: 'gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }],
    });
  }

  handleInputChange = (event) => {
    ApiCall(event.target.value).then((res) => {
      this.setState((state, props) => {
        const newState = res.results.map((item) => {
          return {
            name: item.original_title,
            year: item.release_date,
            url: item.poster_path ? item.poster_path : item.backdrop_path ? item.backdrop_path : null,
          };
        });
        return { currentList: newState };
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Favorite list={this.state.favoriteList}></Favorite>
        <SearchBar handleInputChange={this.handleInputChange} />
        <MovieList movies={this.state.currentList} />
      </div>
    );
  }
}

export default App;
