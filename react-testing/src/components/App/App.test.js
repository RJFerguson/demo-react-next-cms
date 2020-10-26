import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders a div with classname of App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App')).toHaveLength(1);
  });

  it('should contain the default favorite movie, and an empty current list in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toEqual({
      favoriteList: [{ name: 'Interstellar', year: '2014-11-05', url: 'gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }],
      currentList: [],
    });
  });

  it('should update state correctly based on mocked api results', (done) => {
    const wrapper = mount(<App />);
    const mockApiResponse = {
      results: [
        { original_title: 'a', release_date: '2018', poster_path: 'some url1' },
        { original_title: 'b', release_date: '2019', poster_path: 'some url2' },
        { original_title: 'c', release_date: '2020' },
      ],
    };
    const mockApi = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockApiResponse),
      })
    );
    global.fetch = mockApi;
    const mockEvent = {
      target: {
        value: 'abc',
      },
    };
    wrapper.instance().handleInputChange(mockEvent);
    setImmediate(() => {
      try {
        expect(mockApi).toHaveBeenCalledTimes(1);
        expect(wrapper.update().state()).toEqual({
          favoriteList: [{ name: 'Interstellar', year: '2014-11-05', url: 'gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }],
          currentList: [
            { name: 'a', year: '2018', url: 'some url1' },
            { name: 'b', year: '2019', url: 'some url2' },
            { name: 'c', year: '2020', url: null },
          ],
        });
        done();
      } catch (error) {
        done.fail(error);
      }
    });
  });
});
