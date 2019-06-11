import React from 'react';
import constants from '../../utils/constants';
import { modulo5, getOnOffLamps } from '../../utils/clockUtils';

class Minutes extends React.Component {

    bottomMinutes() {
        return getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP, modulo5(this.props.minutes));
    }

    topMinutes() {
        return getOnOffLamps(constants.TOTAL_TOP_MINUTES_LAMP, Math.floor(this.props.minutes / 5)).replace(/YYY/g, 'YYR');
    }

    formLampBlocks(row){
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
                <div className="fiveMinuteRow">{this.formLampBlocks(this.topMinutes())}</div>
                <div className="oneMinuteRow">{this.formLampBlocks(this.bottomMinutes())}</div>
            </React.Fragment>
        );
    }

}

export default Minutes;