import React from 'react';
import Seconds from './Seconds';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(time){
    const [h, m, s] = time.split(":");
    const props = {
        seconds: s
    }
    let enzymeWrapper = shallow(<Seconds {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let seconds;

    describe('Seconds row', function(){

        it('at 00:00:00 should have all the lamps to be Y', () => {            
            seconds = setup('00:00:00');
            
            expect(seconds.seconds()).toBe('Y');
        });

    });

});