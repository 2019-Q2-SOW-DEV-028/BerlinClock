import React from 'react';
import constants from '../../utils/constants';
import { modulo5, getOnOffLamps, divide5 } from '../../utils/clockUtils';

class Hours extends React.Component {

    bottomHours() {
        return getOnOffLamps(constants.TOTAL_BOTTOM_HOURS_LAMP, modulo5(this.props.hours)).replace(/Y/g, constants.RED_LAMP);
    }

    topHours() {
        return getOnOffLamps(constants.TOTAL_TOP_HOURS_LAMP, Math.floor(divide5(this.props.hours))).replace(/Y/g, constants.RED_LAMP);
    }

    formLampBlocks(row) {
        if(row){
            let lamps = row.split("");
            const lampBlocks = lamps.map((lamp, index) => {
                return <div key={index} className={"light " + (lamp === constants.LAMP_OFF ? constants.LAMP_OFF_CLASS : constants.LAMP_ON_CLASS)}></div>;
            });
            return lampBlocks;
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div className="fiveHourRow">{this.formLampBlocks(this.topHours())}</div>
                <div className="oneHourRow">{this.formLampBlocks(this.bottomHours())}</div>
            </React.Fragment>
        );
    }

}

export default Hours;