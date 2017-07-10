import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'


export default class FAQ extends Component {
  render () {
    return (
      <View style={styles.title}>
        <Text> Frequently Asked Questions </Text>
      </View>
      <View style={styles.container}>
        <Text> Question 1 </Text>
        <Text> Answer {"\n"}</Text>
        <Text> Question 2 </Text>
        <Text> Answer {"\n"} </Text>
        <Text> Question 3 </Text>
        <Text> Answer </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
