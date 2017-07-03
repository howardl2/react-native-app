import React, {Component} from 'react'
import {PropTypes, TouchableOpacity, StyleSheet, View, Text} from 'react-native'

 export default class Home extends Component {
   static contextTypes = {
     drawer: PropTypes.object.isRequired,
   }
   render () {
     return (
       <View style={styles.container}>
         <TouchableOpacity onPress={this.context.drawer.open}>
           <Text style = {styles.text}>
             Button
           </Text>
         </TouchableOpacity>
       </View>
     )
   }

}

const styles = StyleSheet.create ({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red',
  }
})
