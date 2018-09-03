import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class RNButtons extends Component {
  _onPressButton() {
    Alert.alert('You tapped the Button!');
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={styles.contanier}>
          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="white"
            style={{ marginBottom: 30 }}
          >
            <View style={styles.button_primary_border}>
              <Text style={styles.f15Primary}>Register a credit card</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="white"
            style={{ marginBottom: 30 }}
          >
            <View style={styles.button_black_border}>
              <Text style={styles.f15Black}>Add a credit card</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="white"
            style={{ marginBottom: 30 }}
          >
            <View style={styles.button_primary}>
              <Text style={styles.f15White_bold}>REGISTER</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="white"
            style={{ marginBottom: 30 }}
          >
            <View style={styles.button_gray}>
              <Text style={styles.f16Gray_bold}>Search</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.button_black_half_set}>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button_black_half_border}>
                <Text style={styles.f15Black}>Remove card</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button_black_half_border}>
                <Text style={styles.f15Black}>Use this card</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.button_pay_set}>
            <View style={styles.txt_pay_price}>
              <Text style={styles.PriceTxt}>JYP 24,600</Text>
            </View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button_pay_none}>
                <Text style={styles.f16White_bold}>PAY</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.button_pay_set}>
            <View style={styles.txt_pay_price}>
              <Text style={styles.PriceTxt}>JYP 24,600</Text>
            </View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button_pay_active}>
                <Text style={styles.f16White_bold}>PAY</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor="white"
          style={{ marginBottom: 30 }}
        >
          <View style={styles.button_black_small_right}>
            <Text style={styles.f13Black}>Renew Card</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contanier: {
    width: screenWidth,
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button_primary: {
    width: screenWidth - 30 * 2,
    height: 44,
    borderRadius: 4,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_gray: {
    width: screenWidth - 30 * 2,
    height: 44,
    borderRadius: 4,
    backgroundColor: 'rgba(227,227,227,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_primary_border: {
    width: screenWidth - 30 * 2,
    height: 44,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_black_border: {
    width: screenWidth - 30 * 2,
    height: 44,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(51,51,51,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_black_small_right: {
    position: 'absolute',
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(51,51,51,1)',
  },
  button_black_half_set: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
  },
  button_pay_set: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
  },
  button_black_half_border: {
    width: screenWidth / 2 - 20 * 2,
    marginRight: 10,
    marginLeft: 10,
    flex: 2,
    height: 44,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(51,51,51,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_pay_none: {
    width: screenWidth / 2 - 8 * 2,
    marginLeft: 4,
    marginRight: 12,
    flex: 1,
    height: 54,
    borderRadius: 4,
    backgroundColor: 'rgba(174,174,174,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_pay_active: {
    width: screenWidth / 2 - 8 * 2,
    marginLeft: 4,
    marginRight: 12,
    flex: 1,
    height: 54,
    borderRadius: 4,
    backgroundColor: 'rgba(233,30,99,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_pay_price: {
    width: screenWidth / 2 - 8 * 2,
    marginRight: 4,
    marginLeft: 12,
    flex: 1,
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  f15Primary: {
    color: '#e91e63',
    fontSize: 15,
  },
  f15Black: {
    color: 'rgba(51,51,51,1)',
    fontSize: 15,
    letterSpacing: 1,
  },
  f13Black: {
    color: 'rgba(51,51,51,1)',
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  f16Gray_bold: {
    color: 'rgba(206,206,206,1)',
    fontSize: 16,
    letterSpacing: 1,
  },
  f15White: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: 1,
  },
  f15White_bold: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  f16White_bold: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  PriceTxt: {
    color: '#e91e63',
    fontSize: 18,
    letterSpacing: 1.5,
    fontWeight: 'bold',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => RNButtons);
