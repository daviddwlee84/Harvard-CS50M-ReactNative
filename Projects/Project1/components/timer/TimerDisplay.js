import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types'

/**
 * Display Time
 * 
 * 1. When the timer is running then disable the TextInput
 * 2. When the timer is pause or stop then you can edit TextInput
 * 3. When finish editing, it will call this.props.updateTime to update the parents' time
 */

// Helper function
const getMin = (time) => (Math.floor(time / 60))
const getSec = (time) => ((time % 60))
const getMinString = (time) => getMin(time).toString().padStart(2, '0')
const getSecString = (time) => getSec(time).toString().padStart(2, '0')

export default class TimerDisplay extends Component {
  static propTypes = {
    updateTime: PropTypes.func.isRequired, // callback when assign new time
    time: PropTypes.number.isRequired, // total time in second
    running: PropTypes.bool.isRequired, // is current timer running
  }
  
  constructor(props) {
    super(props)
    this.state = { 
      time: props.time,
      min: getMinString(props.time),
      sec: getSecString(props.time),
    }
  }

  componentWillReceiveProps(newProps) {
    // When receive new time, it will update the state
    this.setState({
      time: newProps.time,
      min: getMinString(newProps.time),
      sec: getSecString(newProps.time),
    })
  }

  handleUpdateTime = (text, type) => {
    const number = parseInt(text);
    const oriMin = getMin(this.state.time)
    const oriSec = getSec(this.state.time);
    // Update only when the input is valid
    if (number >= 0 && number < 60) {
      if (type == 'min') {
        this.props.updateTime(oriSec + number * 60);
      } else { // type == 'sec'
        this.props.updateTime(oriMin * 60 + number);
      }
    } else {
      this.props.updateTime(this.state.time);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          defaultValue={getMinString(this.props.time)}
          onChangeText={text => this.setState({ min: text })}
          onEndEditing={() => this.handleUpdateTime(this.state.min, 'min')}
          returnKeyType='done'
          keyboardType='numeric'
          autoCompleteType='off'
          multiline={false}
          editable={!this.props.running}
          value={this.state.min} />
        <Text style={[styles.text, styles.semicolon]}>:</Text>
        <TextInput
          style={styles.text}
          defaultValue={getSecString(this.props.time)}
          onChangeText={text => this.setState({ sec: text })}
          onEndEditing={() => this.handleUpdateTime(this.state.sec, 'sec')}
          returnKeyType='done'
          keyboardType='numeric'
          autoCompleteType='off'
          multiline={false}
          editable={!this.props.running}
          value={this.state.sec} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '7%',
    marginBottom: '5%',
    padding: '15%',
    borderColor: 'white',
    borderRadius: 60,
    borderWidth: 3,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '400',
  },
  semicolon: {
    alignSelf: 'baseline',
  }
});
