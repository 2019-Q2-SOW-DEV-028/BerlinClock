import React from 'react';
import constants from '../../utils/constants';
import { modulo5, getOnOffLamps } from '../../utils/clockUtils';

class Minutes extends React.Component {

    bottomMinutes() {
        return getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP, modulo5(this.props.minutes));
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
                <div className="oneMinuteRow">{this.formLampBlocks(this.bottomMinutes())}</div>
            </React.Fragment>
        );
    }

}

export default Minutes;