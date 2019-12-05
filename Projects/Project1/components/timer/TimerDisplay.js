import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * A stateless component that display the time (calculate from pure second to minute : second)
 */

const TimerDisplay = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {Math.floor(props.time / 60).toString().padStart(2, '0') +
       ':' +
       (props.time % 60).toString().padStart(2, '0')}
    </Text>
  </View>
);

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    marginTop: '7%',
    marginBottom: '5%',
    padding: '15%',
    borderColor: 'white',
    borderRadius: 60,
    borderWidth: 3,
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '400',
  }
});
