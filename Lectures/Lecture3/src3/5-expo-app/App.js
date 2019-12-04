// lecture3.pdf slide 18
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomCount, { num } from './Count.js'

// We can use the React.Component or import and use it directly like this
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomCount count={num} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
