import { StyleSheet, SafeAreaView} from 'react-native';
import Home from "./src/screens/Home.jsx";
import {colors} from "./src/constants/colors.js"
//import FlatCards from './src/components/FlatCards';
import React from "react"
import Header from "./src/components/Header.jsx"
import ItemListCategory from "./src/screens/ItemListCategory.jsx"
import { useState } from 'react';



export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  return (
    <SafeAreaView style={styles.container}>
        <Header title={"My Shoes"}/>
        {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
        ) : (
        <ItemListCategory categorySelected={categorySelected} setCategorySelected ={setCategorySelected}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.teal200,
  },

});
