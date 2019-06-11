import React from 'react';
import Minutes from './Minutes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

function setup(time){
    const [h, m, s] = time.split(":");
    const props = {
        minutes: m
    }
    let enzymeWrapper = shallow(<Minutes {...props}/>);
    return enzymeWrapper.instance();
}

describe('Berlin Clock', function(){

    let minutes;

    describe('Single minutes row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            minutes = setup('00:00:00');

            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

        it('at 23:59:59 should have all the lamps to be YYYY', () => {
            minutes = setup('23:59:59');

            expect(minutes.bottomMinutes()).toBe('YYYY');
        });

        it('at 12:32:00 should have all the lamps to be YYOO', () => {
            minutes = setup('12:32:00');

            expect(minutes.bottomMinutes()).toBe('YYOO');
        });

        it('at 12:34:00 should have all the lamps to be YYYY', () => {
            minutes = setup('12:34:00');

            expect(minutes.bottomMinutes()).toBe('YYYY');
        });

        it('at 12:35:00 should have all the lamps to be OOOO', () => {
            minutes = setup('12:35:00');

            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

    });

    describe('Five minutes row', function(){

        it('at 00:00:00 should have all the lamps to be OOOOOOOOOOO', () => {
            minutes = setup('00:00:00');

            expect(minutes.topMinutes()).toBe('OOOOOOOOOOO');
        });

        it('at 23:59:59 should have all the lamps to be YYRYYRYYRYY', () => {
            minutes = setup('23:59:59');

            expect(minutes.topMinutes()).toBe('YYRYYRYYRYY');
        });

    });
});