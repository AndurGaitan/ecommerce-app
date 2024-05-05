import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import React from "react"


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({



});
