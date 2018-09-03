import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Sample from './RN_component/sample';
import Sample2 from './RN_component/sample2';

const HomeScreen = ({ navigation }) => (
  <ScrollView style={{ backgroundColor: '#fff' }}>
    <View style={styles.page}>
      <TouchableHighlight
        style={styles.customBtnBG}
        underlayColor="#fff"
        onPress={() => navigation.navigate('sub01')}
      >
        <Text style={styles.customBtnText}>Buttons</Text>
      </TouchableHighlight>
    </View>

    <View style={styles.page}>
      <TouchableHighlight
        style={styles.customBtnBG}
        underlayColor="#fff"
        onPress={() => navigation.navigate('sub02')}
      >
        <Text style={styles.customBtnText}>Font Sizing</Text>
      </TouchableHighlight>
    </View>

    <View style={styles.page}>
      <TouchableHighlight
        style={styles.customBtnBG}
        underlayColor="#fff"
        onPress={() => navigation.navigate('sub03')}
      >
        <Text style={styles.customBtnText}>Box</Text>
      </TouchableHighlight>
    </View>

    <View style={styles.page}>
      <TouchableHighlight
        style={styles.customBtnBG}
        underlayColor="#fff"
        onPress={() => navigation.navigate('sub04')}
      >
        <Text style={styles.customBtnText}>Card</Text>
      </TouchableHighlight>
    </View>

    <View style={styles.page}>
      <TouchableHighlight
        style={styles.customBtnBG}
        underlayColor="#fff"
        onPress={() => navigation.navigate('sub05')}
      >
        <Text style={styles.customBtnText}>Elements</Text>
      </TouchableHighlight>
    </View>
  </ScrollView>
);

const SubScreen01 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample />
  </View>
);

const SubScreen02 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample2 />
  </View>
);

const SubScreen03 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample2 />
  </View>
);

const SubScreen04 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample2 />
  </View>
);

const SubScreen05 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Sample2 />
  </View>
);

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'UI Styles',
        headerStyle: { backgroundColor: '#fff' },
      },
    },
    sub01: {
      screen: SubScreen01,
      navigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Buttons',
        headerTintColor: '#000',
        headerTitleStyle: { color: '#000' },
      },
    },
    sub02: {
      screen: SubScreen02,
      navigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Font Sizing',
        headerTintColor: '#000',
        headerTitleStyle: { color: '#000' },
      },
    },
    sub03: {
      screen: SubScreen03,
      navigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Boxs',
        headerTintColor: '#000',
        headerTitleStyle: { color: '#000' },
      },
    },
    sub04: {
      screen: SubScreen04,
      navigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Cards',
        headerTintColor: '#000',
        headerTitleStyle: { color: '#000' },
      },
    },
    sub05: {
      screen: SubScreen05,
      navigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Elements',
        headerTintColor: '#000',
        headerTitleStyle: { color: '#000' },
      },
    },
  },
  {
    headerMode: 'float',
  },
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  customBtnBG: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
  customBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

export default RootNavigator;
