import React, {Component} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default class Menu extends Component {

  render () {
    return (
      <View style={styles.menuStyle}>
        <UserName name='User Name Here' />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("Timeline")}
            title="Timeline"
            color="#aaccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("Edit Account")}
            title="Edit Account"
            color="#aaccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("Export Summary")}
            title="Export Summary"
            color="#aaccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("FAQs")}
            title="FAQs"
            color="#aaccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("Contact Us")}
            title="Contact Us"
            color="#aaccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton("Log Out")}
            title="Log Out"
            color="#aaccff"
          />

        </View>

      </View>
    )

  }
}

class UserName extends Component {
  render() {
    return (
      <Text style= {styles.UserNameStyle}> {this.props.name} </Text>
    );
  }
}


const styles = StyleSheet.create({
  menuStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#aaccff"
  },
  buttonContainer: {
    backgroundColor: "#222233",
    width: 200,
    padding:2,
  },
  UserNameStyle: {
    color: "#222233",
    fontSize: 22,
  },
})
