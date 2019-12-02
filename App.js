import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RNInsider from 'react-native-insider'
export default class App extends Component {

  componentDidMount() {
    try {
      RNInsider.init('aeoneshoptest', '383435010640', false, 30)
    } catch (err) {
      console.log('err',err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AeonEshopTest</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
