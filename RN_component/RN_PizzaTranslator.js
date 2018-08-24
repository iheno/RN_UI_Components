import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Text } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ' ' };
  }

  render() {
    return (
      <View style={{ padding: 50 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translae!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map(word => word && 'pizza')
            .join(' ')}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
