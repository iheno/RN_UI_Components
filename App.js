import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Sample from './RN_component/sample';

const HomeScreen = ({ navigation }) => (
  <View style={styles.page}>
    <Button onPress={() => navigation.navigate('Details')} title="Go to details" />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample />
  </View>
);

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonPage: {
    borderWidth: 0.5,
    borderColor: '#333333',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default RootNavigator;
