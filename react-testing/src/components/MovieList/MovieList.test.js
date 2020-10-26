import React from 'react';
import { mount, shallow } from 'enzyme';
import MovieList from './MovieList';
import MovieCard from '../MovieCard/MovieCard';

describe('MovieList Component', () => {
  // -------------------- Shallow renders ------------------------
  it('should render all movies with urls', () => {
    const mockMovies = [
      { name: 'a', year: '2018', url: 'some url1' },
      { name: 'b', year: '2019', url: 'some url2' },
      { name: 'c', year: '2020', url: 'some url3' },
    ];
    const wrapper = shallow(<MovieList movies={mockMovies} />);
    expect(wrapper.find('div.MovieList')).toHaveLength(1);
    expect(wrapper.find(MovieCard)).toHaveLength(3);
    expect(wrapper.find('div.MovieCard')).toHaveLength(0);
  });

  it('should not render movies without urls', () => {
    const mockMovies = [
      { name: 'a', year: '2018', url: 'some url1' },
      { name: 'b', year: '2019', url: 'some url2' },
      { name: 'c', year: '2020', url: null },
    ];
    const wrapper = shallow(<MovieList movies={mockMovies} />);
    expect(wrapper.find('div.MovieList')).toHaveLength(1);
    expect(wrapper.find(MovieCard)).toHaveLength(2);
    expect(wrapper.find('div.MovieCard')).toHaveLength(0);
  });

  // ------------------- Deep renders, aka "mount" --------------------------
  it('should not render movies without urls, should render actual child components for deep render', () => {
    const mockMovies = [
      { name: 'a', year: '2018', url: 'some url1' },
      { name: 'b', year: '2019', url: 'some url2' },
      { name: 'c', year: '2020', url: null },
    ];
    const wrapper = mount(<MovieList movies={mockMovies} />);
    expect(wrapper.find('div.MovieList')).toHaveLength(1);
    expect(wrapper.find(MovieCard)).toHaveLength(2);
    expect(wrapper.find('div.MovieCard')).toHaveLength(2);
  });
});
