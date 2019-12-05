import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types'

/**
 * A stateless component that maintain the layout of buttons in different state (running, pause)
 * 
 * - When not running
 *   - start, reset
 * - When running
 *   - pause, stop
 */

const TimerButtons = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={props.running ? props.pauseClicked : props.playClicked}>
      <Text style={styles.text}>
        {props.running ? 'Pause' : 'Start'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={props.resetClicked}>
      <Text style={styles.text}>
        {props.running ? 'Stop' : 'Reset'}
      </Text>
    </TouchableOpacity>
  </View>
);

TimerButtons.propTypes = {
  running: PropTypes.bool.isRequired,
  playClicked: PropTypes.func.isRequired,
  pauseClicked: PropTypes.func.isRequired,
  resetClicked: PropTypes.func.isRequired,
}

export default TimerButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: '4%',
  },
  buttonRight: {
    paddingLeft: '5%',
  },
  text: {
    color: 'white',
    fontSize: 50,
  }
});
