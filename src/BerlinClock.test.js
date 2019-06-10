import React from 'react';
import BerlinClock from './BerlinClock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Berlin clock', function(){

  let wrapper;
  let clock;

  it('renders without crashing', () => {
    shallow(<BerlinClock />);
  });

  it('should not accept time if it is not valid', () => {
    let time = '29:00:85';
    wrapper = shallow(<BerlinClock />);
    clock = wrapper.instance();

    expect(clock.updateClock(time)).toBe('Invalid time');
  });

});