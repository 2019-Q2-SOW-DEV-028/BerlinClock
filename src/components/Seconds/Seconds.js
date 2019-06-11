import React from 'react';
import constants from '../../utils/constants';

class Seconds extends React.Component {

    seconds() {
        return this.props.seconds % 2 ? constants.LAMP_OFF : constants.YELLOW_LAMP;
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