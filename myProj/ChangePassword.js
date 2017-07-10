import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'

export default class ChangePassword extends Component {

  var currentPassword = "";
  var newPassword = "";
  var confirmPassword = "";

  constructor(props) {
    super(props);
    this.state = {text: "Hold"}
  }

  render () {
    return (
      <View style={styles.container}>
        <Text> Change Password </Text>

        <View styles={styles.passwordStyle}
          <Text> Current Password: </Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Password Here"
          />
        </View>
        <View styles={styles.passwordStyle}
          <Text> New Password: </Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="New Password Here"
          />
        </View>
        <View styles={styles.passwordStyle}
          <Text> Confirm New Password: </Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Confrim New Password Here"
          />
        </View>

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
  passwordStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
})
