import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class ColorOfstyles extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.red}>Color Red!</Text>
        <Text style={styles.bigblue}>Blg size blue color!</Text>
        <Text style={[styles.bigblue, styles.red]}>Big blue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>Red, then big blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ColorOfstyles);
