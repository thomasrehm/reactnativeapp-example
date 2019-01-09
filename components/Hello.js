import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  font: {
    fontSize: 50,
    color: 'red'
  }
})

export class Hello extends Component  {
  toUpperCase(val) {
    return val.toUpperCase()
  }

  render() {
    const name = this.props.name;
    return (
      <View>
        <Text style={styles.font}>
          Hello, {this.toUpperCase(name)}!
        </Text>
      </View>
    )
  }
}