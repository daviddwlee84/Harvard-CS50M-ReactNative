import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import PomodoroTimer from './components/PomodoroTimer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PomodoroTimer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E84C3D',
  },
});
