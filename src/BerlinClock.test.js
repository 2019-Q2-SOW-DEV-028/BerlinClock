import React from 'react';
import BerlinClock from './BerlinClock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Berlin clock', function(){

  it('renders without crashing', () => {
    shallow(<BerlinClock />);
  });

});