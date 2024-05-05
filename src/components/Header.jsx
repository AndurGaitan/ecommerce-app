import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:70,
    backgroundColor: colors.teal200,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.teal900,
    fontSize: 18
  }
})