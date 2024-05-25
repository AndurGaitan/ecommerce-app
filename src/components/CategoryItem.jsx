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
    <Card style={styles.containerCart}>
      <Pressable
      onPress={handleNavigate}
      >
      <Text style = {styles.text}>{category}</Text>

      </Pressable>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
containerCart: {
  backgroundColor: colors.teal600,
        width: 250,
        height: 40,
        shadowColor: colors.platinum,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'

},
text: {
    color: colors.teal900,
    textAlign: 'center',
    fontSize: 20
}
})