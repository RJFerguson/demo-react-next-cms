import React from 'react';
import { shallow } from 'enzyme';
import Favorite from './Favorite';

describe('Favorite Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Favorite />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders a div with classname of Favorite', () => {
    const wrapper = shallow(<Favorite />);
    expect(wrapper.find('div.Favorite')).toHaveLength(1);
  });
});
