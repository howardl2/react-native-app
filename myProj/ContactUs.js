import React, {Component} from 'react'
import {Alert, Button, Linking, StyleSheet, Text, TextInput, View} from 'react-native'



export default class ContactUs extends Component {

  var name = "";
  var email = "";
  var message = "";

  _onPressSend() {
    Alert.alert("Pressed Send");
  }

  render() {
    return (
      <View style={styles.title}>
        <Text> Contact Us </Text>
      </View>
      <View style={styles.container}>
        <Text>
          Storyline is a medication management mobile application. It was created
          by a team of students at the University of Southern California in an
          effort to improve the lives of cancer patients. Storyline is part of the
          greater
          <Text
            style={{textDecorationLine: "underline"}}
            onPress={() => Linking.openURL("http://www.cancerbase.org/home")}>

            CancerBase
          </Text>
          ecosphere.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.nameView}> Name:
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Name Here"
          />
        </Text>
      </View>
      <View style={styles.emailView}>
        <Text style={styles.input}> Email:
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Email Here"
          />
        </Text>
      </View>
      <View style={styles.messageView}>
        <Text style={styles.input}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Type Message Here"
          />
        </Text>
      </View>
      <View style={styles.sendButton}>
        <Button
          title="Send"
          onPress={() => this._onPressSend(this.name, this.email, this.message)}
        />
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
  nameview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 35,
  },
  emailView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 35,
  },
  messageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
})
