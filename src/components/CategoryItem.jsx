import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category, navigation}) => {
  return (
    <Card style={styles.categoryContainer}>
      <Pressable
      onPress={() => navigation.navigate("ItemListCategory", {category})}
      >
      <Text style = {styles.text}>{category}</Text>

      </Pressable>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.teal600,
    width: 250,
    height: 40,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
},
text: {
    color: colors.teal900,
    textAlign: 'center',
    fontSize: 20
}
})