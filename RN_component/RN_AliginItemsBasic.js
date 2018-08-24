import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AliginItemsBasic extends Component {
  render() {
    return (
      // Try setting 'aliginItems' to 'flex-start'
      // Try setting 'justifyConent' to 'flex-end'
      // Try setting 'flexDirection' to 'row'
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AliginItemsBasic);
