import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A stateless component that display the text of the current state
 * 
 * 1. Focus
 *   a. is running
 *     - Happy Learning :)
 *   b. pause
 *     - Stay Focus Now
 * 2. Relax
 *   a. is running
 *     - Just Relax XD
 *   b. pause
 *     - Relax Now
 */

const handleText = (props) => {
  if (props.intervalType == 'focus') {
    if (props.running === true) {
      return 'Happy Learning :)';
    } else if (props.running === false) {
      return 'Stay Focus Now';
    }
  } else {
    if (props.running === true) {
      return 'Just Relax XD';
    } else if (props.running === false) {
      return 'Relax Now';
    }
  }
};

const TimerHeader = (props) => (
  <Text style={styles.text}>
    {handleText(props)}
  </Text>
);

TimerHeader.propTypes = {
  running: PropTypes.bool.isRequired,
  intervalType: PropTypes.string.isRequired,
}

export default TimerHeader;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 29,
    fontWeight: '500',
    letterSpacing: 1.5,
  }
});
