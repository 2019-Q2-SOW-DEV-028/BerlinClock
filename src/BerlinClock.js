import React from 'react';
import constants from './utils/constants';
import { isValidTime } from './utils/clockUtils';

class BerlinClock extends React.Component {

  updateClock(time){
    if(!isValidTime(time))
        return constants.INVALID_TIME_MESSAGE;
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

export default BerlinClock;