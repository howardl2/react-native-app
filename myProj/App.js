import React, {Component} from 'react'
import {Button, PropTypes, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import Drawer from 'react-native-drawer'

// import Home from './Home'

export default class App extends Component {
  state= {
    drawerOpen: false,
    drawerDisabled: false,
  };

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<Menu closeDrawer={this.closeDrawer} />}
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 20}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen:true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        openDrawerOffset={0.2}
        closeDrawerOffset={-3}

        tapToClose={true}>

        <View style = {styles.container}>
          <TouchableOpacity onPress={this.openDrawer}>
            <Text style={styles.mainButtonStyle}> Open Menu </Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    )
  }
}

class Menu extends Component {
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
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
    backgroundColor: "#222233"
  },
  mainText: {
    color: "#aaccff",
    fontSize: 22,
  },
  mainButtonStyle: {
    color: "#aaccff",
    fontSize: 20,
  },
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
  }
})
