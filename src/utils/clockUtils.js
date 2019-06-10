import constants from './constants';

export const isValidTime = (time) => {
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
}

export const modulo5 = (number) => {
    return number % constants.FIVE;
}