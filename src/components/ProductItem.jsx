import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <TouchableOpacity style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: product.img,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{product.title}</Text>
          <Text style={styles.cardDescription}>{product.description}</Text>
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.cardLabel}>${product.price}</Text>
            </View>
            <View>
              <Text style={styles.cardPlus}>+</Text>
            </View>
          </View>
        </View>

        {/* <Text style={styles.textCategory}>{product.title}</Text>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: product.img}}
        /> */}
      </TouchableOpacity>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 18,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 5,
  },
  card: {
    width: 350,
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 22,
    marginBottom: 6,
    marginRight:220
  },
  cardPlus:{
    backgroundColor:"#FCDC2A",
    fontSize:22,
  },
  cardDescription: {
    color: "#242B2E",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {},
  modalStyles: {
    backgroundColor: "#cccccc88",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 7,
  },
  textContainer: {},
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  priceContainer:{
    flexDirection: "row",
    alignContent:"space-between"
  },
  image: {
    height: 120,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    paddingLeft: 10,
    flexDirection: "row",
    height: 120,
    width: 300,
    justifyContent: "space-between",
    margin: 10,
  },
  textCategory: {
    color: colors.teal200,
  },
});
