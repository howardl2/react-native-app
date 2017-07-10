import React, {Component} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default class EditAccount extends Component {

  var name = "Tommy Trojan";
  var age = "27";
  var sex = "Male";
  var email = "ttrojan@usc.edu";

  render () {
    return (
      <View style={styles.container}>
        <Text> Edit Account </Text>

        <AccountInfo
          name=this.name
          age=this.age
          sex=this.sex
          email=this.email
        />

      </View>
    )
  }
}

class AccountInfo extends Component {
  render() {
    return (
      <View style={styles.information}>
        <Text> Name: {this.props.name} </Text>
        <Text> Age: {this.props.age} </Text>
        <Text> Sex: {this.props.sex} </Text>
        <Text> Email: {this.props.email} </Text>
      </View>
      <View style={styles.passwordButton}>
        <Button
          title="Change Password"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  information: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  passwordButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
})
