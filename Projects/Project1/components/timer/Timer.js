import React, { Component } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import PropTypes from 'prop-types'
import TimerButtons from './TimerButtons';
import TimerDisplay from './TimerDisplay';
import TimerHeader from './TimerHeader';

/**
 * Main of the Timer component
 * 
 * This timer only care about count down and don't care which state (focus or rest)
 * 
 * Usage:
 * 1. count down
 * 2. vibrate
 * 3. control the subunits (header, display, button)
 */

export default class Timer extends Component {
  static propTypes = {
    intervalType: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    totalSeconds: PropTypes.number.isRequired,
  }

  state = {
    running: false,
    time: this.props.totalSeconds
  }

  // Helper functions
  countDown = () => {
    console.log(this.state.time);
    this.setState(prevState => ({time: prevState.time - 1}));
  }
  resetTimer = () => {
    this.setState({
      running: false,
      time: this.props.totalSeconds
    });
  }
  clearTimer = () => {
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    // Check if time is up
    if (this.state.running === true && this.state.time === 0) {
      clearInterval(this.timer);
      Vibration.vibrate([500, 500, 500]);
      this.props.onComplete(); // execute callback when complete
    }
  }

  componentWillReceiveProps(nextProps) {
    // This will called when receive new props
    // expecially after calling this.props.onComplete()
    // it will change state and set new time
    this.setState({
      running: false,
      time: nextProps.totalSeconds
    });
  }

  // Count down Handlers
  handlePlaying = () => {
    this.setState({ running: true });
    this.timer = setInterval(this.countDown, 1000);
  }
  handlePause = () => {
    this.clearTimer();
    this.setState({ running: false });
  }
  handleReset = () => {
    this.clearTimer();
    this.resetTimer();
  }

  handleUpdateTime = (newTime) => {
    // When edited time in TimerDisplay, update the PERIOD in Timer
    this.props.onChange(newTime);
  }

  render() {
    return (
      <View style={styles.container}>
        <TimerHeader
          intervalType={this.props.intervalType}
          running={this.state.running}
        />
        <TimerDisplay
          running={this.state.running}
          time={this.state.time}
          updateTime={this.handleUpdateTime}
        />
        <TimerButtons
          running={this.state.running}
          playClicked={this.handlePlaying}
          resetClicked={this.handleReset}
          pauseClicked={this.handlePause}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '20%',
    alignItems: 'center',
  },
});
