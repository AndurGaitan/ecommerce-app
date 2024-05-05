import { StyleSheet, SafeAreaView} from 'react-native';
import Home from "./src/screens/Home.jsx";
import {colors} from "./src/constants/colors.js"
import FlatCards from './src/components/FlatCards';
import React from "react"



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Home/>
        <FlatCards/>
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
