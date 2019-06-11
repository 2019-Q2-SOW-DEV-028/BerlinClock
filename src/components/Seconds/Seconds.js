import React from 'react';
import constants from '../../utils/constants';
import { isEven } from '../../utils/clockUtils';

class Seconds extends React.Component {

    seconds() {
        return isEven(this.props.seconds) ? constants.LAMP_OFF : constants.YELLOW_LAMP;
    }

    render() {
        return (
            <div className="secondsLamp">
                <div className={"light " + (this.seconds() === constants.LAMP_OFF ? constants.LAMP_OFF_CLASS : constants.LAMP_ON_CLASS)}></div>
            </div>
        );
    }

}

export default Seconds;