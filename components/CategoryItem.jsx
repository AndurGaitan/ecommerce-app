import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category}) => {
  return (
    <Card>
      <Text style = {styles.text}>{category}</Text>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        height: 40,
        //Full width
        width: Dimensions.get('screen').width
    },
    text: {
        color: colors.teal200,
    }
})