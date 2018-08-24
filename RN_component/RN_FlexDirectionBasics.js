import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting 'flexDirection' to 'column'.
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, height: 300, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 1, height: 300, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, height: 300, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
