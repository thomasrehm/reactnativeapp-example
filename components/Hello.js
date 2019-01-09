import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  font: {
    fontSize: 50,
    color: 'red'
  }
})

export class Hello extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      text: props.name || 'Klaus'
    }
  }

  toUpperCase(val) {
    return val.toUpperCase()
  }

  render() {
    return (
      <View>
        <Text style={styles.font}>
          Hello
        </Text>
        <TextInput 
          style={styles.font}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
      </View>
    )
  }
}