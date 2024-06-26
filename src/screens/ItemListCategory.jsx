import { FlatList, StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"
import {useGetProductsByCategoryQuery} from "../services/shopService.js"

const ItemListCategory = ({
  setCategorySelected = () => {},
  navigation,
  route
}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")
  
  const { category: categorySelected } = route.params

  const {data: productsFeched, error: errorFromFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)
  
  useEffect(()=> {
    regex= /\d/
    const hasDigits = (regex.test(keyWord))
    if (hasDigits) {
      setError("Don't use digits")
      return
    }
  
    if(!isLoading){
      const productsFilter = productsFeched.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
      setProductsFiltered(productsFilter)
      setError("")
    }

  }, [keyWord, categorySelected, productsFeched, isLoading])

    return(
        <View style={styles.flatListContainer}>
          <Search error = {error} onSearch={setKeyword} goBack={() => navigation.goBack()}/>
          <FlatList
            data = {productsFiltered}
            renderItem = {({item})=> <ProductItem product={item} navigation={navigation}/>}
            keyExtractor = {(producto) => producto.id}
          />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    flatListContainer: {
      width: '100%',
      backgroundColor: colors.teal400,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
  })