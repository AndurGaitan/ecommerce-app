import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const OrderScreen = () => {
  const {localId} = useSelector(state => state.auth.value)
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState()

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])


  return (
    <View>
        <FlatList
            data={ordersFiltered}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})