import constants from './constants';

export const isValidTime = (time) => {
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
}

export const modulo5 = (number) => {
    return number % constants.FIVE;
}

export const getOnOffLamps = (totalLamps, lampsOn) => {
    let row = "";
    let lampsOff = totalLamps - lampsOn;

    for (let i = 0; i < lampsOn; i++) {
        row += constants.YELLOW_LAMP;
    }

    for (let i = 0; i < lampsOff; i++) {
      row += constants.LAMP_OFF;
    }

    return row;
}