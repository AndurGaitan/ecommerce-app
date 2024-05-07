import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Home from "./src/screens/Home.jsx";
import { colors } from "./src/constants/colors.js"
//import FlatCards from './src/components/FlatCards';
import React from "react"
import Header from "./src/components/Header.jsx"
import ItemListCategory from "./src/screens/ItemListCategory.jsx"
import { useState } from 'react';
import ItemDetail from './src/screens/ItemDetail.jsx';



export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")
  console.log(itemIdSelected)
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"My Shoes"} />
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) :

        !itemIdSelected ?
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            setItemIdSelected={setItemIdSelected}
          />
          :
          <ItemDetail
            idSelected={itemIdSelected}
            setProductSelected={setItemIdSelected}
          />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.teal200,

  },

});
