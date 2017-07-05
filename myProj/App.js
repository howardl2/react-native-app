import React, {Component} from 'react'
import {Button, PropTypes, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import Drawer from 'react-native-drawer'

import Menu from './Menu'
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
  
})
