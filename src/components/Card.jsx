import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/colors';
import React from 'react'

const Card = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal600,
    width: 250,
    height: 40,
    shadowColor: "#000000",
    shadowOffset:{
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
}
})