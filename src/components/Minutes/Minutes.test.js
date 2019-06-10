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
            const [h, m, s] = time.split(":");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

        it('at 23:59:59 should have all the lamps to be YYYY', () => {
            let time = '23:59:59';
            const [h, m, s] = time.split(":");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('YYYY');
        });

        it('at 12:32:00 should have all the lamps to be YYOO', () => {
            let time = '12:32:00';
            const [h, m, s] = time.split(":");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('YYOO');
        });

        it('at 12:34:00 should have all the lamps to be YYYY', () => {
            let time = '12:34:00';
            const [h, m, s] = time.split(":");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('YYYY');
        });

        it('at 12:35:00 should have all the lamps to be OOOO', () => {
            let time = '12:35:00';
            const [h, m, s] = time.split(":");
            const props = {
                minutes: m
            }

            minutes = setup(props);

            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

    });
});