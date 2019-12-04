// lecture3.pdf slide 14
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';

class OnlyUpdateOnEvens extends Component {
  shouldComponentUpdate(nextProps) {
    // Skip all the odd numbers (when return false)
    return !(nextProps.count % 2)
  }
  
  componentDidUpdate() {
    console.log(this.props.count)
  }
  
  // The counter will only count the even numbers
  render() {
    return <Text style={styles.count}>{this.props.count}</Text>
  }
}

class Counter extends Component {
  state = {
    count: 0,
  }
  
  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 500)
  }
  
  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render() {
    return <OnlyUpdateOnEvens count={this.state.count} />
  }
}

export default class App extends Component {
  // Use our <Counter />
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
  count: {
    fontSize: 48,
  }
});
