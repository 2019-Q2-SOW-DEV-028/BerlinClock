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

        it('at 23:59:59 should have all the lamps to be RRRO', () => {
            hours = setup('23:59:59');
            
            expect(hours.bottomHours()).toBe('RRRO');
        });

        it('at 02:04:00 should have all the lamps to be RROO', () => {
            hours = setup('02:04:00');
            
            expect(hours.bottomHours()).toBe('RROO');
        });

        it('at 08:23:00 should have all the lamps to be RRRO', () => {
            hours = setup('08:23:00');
            
            expect(hours.bottomHours()).toBe('RRRO');
        });

        it('at 14:35:00 should have all the lamps to be RRRR', () => {
            hours = setup('14:35:00');
            
            expect(hours.bottomHours()).toBe('RRRR');
        });

    });

    describe('Five hours row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {            
            hours = setup('00:00:00');
            
            expect(hours.topHours()).toBe('OOOO');
        });

    });

});