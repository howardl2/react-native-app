import React, {Component} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default class EditAccount extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text> Edit Account </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
})
