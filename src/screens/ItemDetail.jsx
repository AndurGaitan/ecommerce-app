import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
  } from "react-native"
import React, { useEffect, useState } from "react"
import { useGetProductByIdQuery } from "../services/shopService"
import { useDispatch } from "react-redux"
import { addCartItem } from "../features/Cart/cartSlice"
import { colors } from "../constants/colors"
  
  const ItemDetail = ({ route, navigation, setProductSelected }) => {
    
    const dispatch = useDispatch()

    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()
    
    const {productId: idSelected} = route.params

    const {data : product, error, isLoading} = useGetProductByIdQuery(idSelected)
    
    useEffect(() => {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])
    
    const handleAddCart = () => {
      dispatch(addCartItem({...product, quantity: 1}))

    }
    return (
      <View>
        <Button onPress={() => navigation.goBack()} title="Go back" color={colors.teal100}/>
        {product ? (
          <View
            style={
            orientation === "portrait"?
            styles.mainContainer
              : styles.mainContainerLandscape
            }
          >
            <Image
              source={{ uri: product.img }}
              style={orientation === "portrait" ? styles.image : styles.imageLandscape}
              resizeMode="cover"
            />
            <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}
            >
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
              <Text style={styles.price}>${product.price}</Text>
              <Button title="Add cart" onPress={handleAddCart} color={colors.teal100}></Button>
            </View>
          </View>
        ) : null}
      </View>
    )
  }
  
  export default ItemDetail
  
  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
    },
    mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
      gap: 10,
    },
    image: {
      width: '100%',
      height: 250,
    },
    imageLandscape: {
      width: '45%',
      height: 200
    },
    textContainer: {
      flexDirection: "column",
    },
  
    textContainerLandscape: {
      width: '50%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: 10,
    },
    price: {
      textAlign: 'right',
      width: '100%'
    }
  })
  