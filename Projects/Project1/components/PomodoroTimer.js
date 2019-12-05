import React, { Component } from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import Timer from './timer/Timer'

/**
 * Main of the Pomodoro App
 * 
 * 1. Maintain the state between focus and relax
 * 2. Set initial value of the timer
 */

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props)
    this.FOCUS_PERIOD = 25 * 60;
    this.REST_PERIOD = 5 * 60;
    this.state = {
      intervalType: 'focus',
      period: this.FOCUS_PERIOD
    };
  }

  // Count down Handlers
  handleTimerCompleted = () => {
    if (this.state.intervalType == 'focus') {
      this.setState({
        intervalType: 'rest',
        period: this.REST_PERIOD
      });
    } else {
      this.setState({
        intervalType: 'focus',
        period: this.FOCUS_PERIOD
      });
    }
  }

  updatePeriod = (newPeriod) => {
    // When the time is edited, it will call this to update the current periods
    if (this.state.intervalType == 'focus') {
      this.FOCUS_PERIOD = newPeriod;
      this.setState({
        period: this.FOCUS_PERIOD
      });
    } else {
      this.REST_PERIOD = newPeriod;
      this.setState({
        period: this.REST_PERIOD
      });
    }
  }

  render() {
    return (
      <Timer
        intervalType={this.state.intervalType}
        onComplete={this.handleTimerCompleted}
        onChange={this.updatePeriod}
        totalSeconds={this.state.period}
      />
    );
  }
}
