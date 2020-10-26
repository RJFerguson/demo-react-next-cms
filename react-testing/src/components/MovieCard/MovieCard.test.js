import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieCard from './MovieCard';
import renderer from 'react-test-renderer';

describe('MovieCard Component', () => {
  // ------------- Unit testing ---------------
  it('renders without crashing', () => {
    const wrapper = shallow(<MovieCard />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders a div with classname of MovieCard', () => {
    const wrapper = shallow(<MovieCard />);
    expect(wrapper.find('div.MovieCard')).toHaveLength(1);
  });

  it('renders a MovieCard with the correct name and year based on props passed', () => {
    const wrapper = shallow(<MovieCard name={'movie'} year={'2000'} url={'abc'} />);
    expect(wrapper.find('h3').text()).toEqual('movie');
    expect(wrapper.find('p').text()).toEqual('2000');
    expect(wrapper.find('img').prop('src')).toEqual('https://image.tmdb.org/t/p/w200/abc');
  });

  // -------------------- Snapshot Testing ------------------------
  it('should render correctly with no props', () => {
    const wrapper = renderer.create(<MovieCard />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const wrapper = renderer.create(<MovieCard name={'movie'} year={'2000'} url={'abc'} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
