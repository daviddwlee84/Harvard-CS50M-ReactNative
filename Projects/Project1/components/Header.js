import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

/**
 * A stateless component just for the App header
 */

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Pomodoro Timer
    </Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C2362B',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    position: 'relative',
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.5,
  }
});
