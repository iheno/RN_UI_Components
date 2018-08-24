import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText,
      }));
    }, 1000);
  }

  render() {
    const display = this.state.isShowingText ? this.props.text : ' ';
    return <Text>{display}</Text>;
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Blink text="I love to blink" />
        <Blink text="I love to blink" />
        <Blink text="I love to blink" />
        <Blink text="I love to blink" />
        <Blink text="I love to blink" />
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
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
