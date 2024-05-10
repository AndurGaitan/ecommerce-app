import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        {/* <HomeStackNavigator/> */}
        <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})