import React from 'react';
import Hours from './Hours';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(time){
    const [h, m, s] = time.split(":");
    const props = {
        hours: h
    }
    let enzymeWrapper = shallow(<Hours {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let hours;

    describe('Single hours row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {            
            hours = setup('00:00:00');
            
            expect(hours.bottomHours()).toBe('OOOO');
        });

    });

});