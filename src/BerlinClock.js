import React from 'react';

class BerlinClock extends React.Component {

  isValidTime(time){
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
  }

  updateClock(time){
    if(!this.isValidTime(time))
        return "Invalid time";
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

export default BerlinClock;