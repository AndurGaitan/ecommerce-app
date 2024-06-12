import { StyleSheet, SafeAreaView, Platform, StatusBar, use } from 'react-native';
import { colors } from "./src/constants/colors.js"
import React from "react"
import Navigator from './src/navigation/Navigator.jsx';
import { Provider } from 'react-redux';
import store from "./src/store/index.js"
import { dropSessionsTable, initSQLiteDB } from "./src/persistence/index.js"
import { useFonts } from 'expo-font';

(async ()=> {
  try {
      const response = await initSQLiteDB()
  } catch (error) {

  }
})()

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
      Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  if (!fontsLoaded || fontError) {
      return null
  }

  if (fontsLoaded && !fontError) {
      return (
          <SafeAreaView style={styles.container}>
              <Provider store={store}>
                  <Navigator />
              </Provider>
          </SafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.teal200,

  },

});

export default App
