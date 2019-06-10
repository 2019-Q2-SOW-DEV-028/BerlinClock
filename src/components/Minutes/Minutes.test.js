import React from 'react';
import Minutes from './Minutes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(props){
    let enzymeWrapper = shallow(<Minutes {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let minutes;

    describe('Single minutes row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            let time = '00:00:00';
            const [h, m, s] = time.split("");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

    });
});