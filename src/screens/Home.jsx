import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem.jsx"
import { useGetCategoriesQuery } from "../services/shopService.js"

const Home = ({navigation}) => {
  const {data: categories, error, isLoading} = useGetCategoriesQuery()
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor = {elemntoDeMiArray => elemntoDeMiArray}
        data = {categories}
        renderItem = {({item}) => (
        <CategoryItem 
        navigation={navigation} 
        category={item}
        />)}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
})
