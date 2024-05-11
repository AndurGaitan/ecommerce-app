import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from "./src/constants/colors.js"
import React from "react"
import { useState } from 'react';
import Navigator from './src/navigation/Navigator.jsx';
import { Provider } from 'react-redux';
import store from "./src/store/index.js"



export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator/>
      </Provider>
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
