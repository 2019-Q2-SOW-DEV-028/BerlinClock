import React from 'react';
import constants from '../../utils/constants';

class Minutes extends React.Component {

    bottomMinutes() {
        return this.getOnOffLamps(constants.TOTAL_BOTTOM_MINUTES_LAMP);
    }

    getOnOffLamps = (totalLamps) => {
        let row = "";

        for (let i = 0; i < totalLamps; i++) {
          row += constants.LAMP_OFF;
        }

        return row;
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