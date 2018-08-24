import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';

export default class FlatListBasic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devie' },
            { key: 'Jesica' },
            { key: 'James' },
            { key: 'Antonio' },
            { key: 'John' },
            { key: 'Jimmy' },
            { key: 'Juliet' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasic);
