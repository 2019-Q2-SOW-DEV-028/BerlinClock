import React from 'react';
import moment from 'moment';
import constants from './utils/constants';
import Minutes from './components/Minutes/Minutes';
import { isValidTime } from './utils/clockUtils';

class BerlinClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00"
    }
  }

  updateClock(time){
    if(!isValidTime(time))
        return constants.INVALID_TIME_MESSAGE;
    const [hours, minutes, seconds] = time ? time.split(':') : moment().format('H:m:s').split(':');
    this.setTime(hours, minutes, seconds);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.updateClock(moment().format("HH:mm:ss")), constants.ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setTime(hours, minutes, seconds) {
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    return (
      <div className="berlinClock">
        <Minutes minutes = {this.state.minutes}/>
      </div>
    );
  }

}

export default BerlinClock;