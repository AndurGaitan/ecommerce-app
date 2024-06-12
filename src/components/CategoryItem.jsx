import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';
import { useDispatch, useSelector } from "react-redux"
import { setCategorySelected } from '../features/Shop/shopSlice';

const CategoryItem = ({category, navigation}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate("ItemListCategory", {category})
  }

  return (
    <Card style={styles.container}>
      <Pressable
      onPress={handleNavigate}
      style={styles.pressable}
      >
      <Text style = {styles.text}>{category}</Text>

      </Pressable>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
container:{ 
  flex: 1,
  flexDirection: 'row',
  padding: 8

},
pressable:{
  flex: 1,
  justifyContent: "center",
  backgroundColor: colors.teal200,
  marginVertical: 6,
  borderRadius: 6,
  width:150,
  height: 150,
},
text: {
    color: colors.teal900,
    textAlign: 'center',
    fontSize: 20
}
})