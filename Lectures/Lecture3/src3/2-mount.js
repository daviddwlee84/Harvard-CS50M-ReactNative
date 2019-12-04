// lecture3.pdf slide 13
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';

class Counter extends Component {
  state = {
    count: 0,
  }
  // Or do like this
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0,
  //   }
  // }
  
  // Run when the component did mount
  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 1000)
  }
  
  // Create a function that automatically binding to this class (called "class properties" in ECMAScript standard)
  // (rather than define this function with `incrementCount(){}`)
  // (or do in constructor with `this.incrementCount = this.incrementCount.bind(this)`)
  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render() {
    return <Text>{this.state.count}</Text>
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

