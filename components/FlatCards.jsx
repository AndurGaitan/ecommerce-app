import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import React from "react";
import react, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Zapatillas Nike Air Max",
    description:
      "Las Zapatillas Nike Air Max Intrlk brindan soporte y estabilidad a tus pisadas, para que disfrutes a pleno de cada carrera y mejores tu rendimiento en cada entrenamiento.La capellada de tela y cuero sintético aporta transpirabilidad y es sumamente duradera.",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7c433248/products/NI_DC5421-002/NI_DC5421-002-1.JPG",
    price: 180000,
  },
  {
    id: 2,
    title: "Zapatillas adidas Lite Racer",
    description:
      "Las Zapatillas adidas Lite Racer Byd 2.0 son ideales para carreras cortas y largas. Sus materiales respirables y diseño moderno se combinan con una suela de gran adherencia a las superficies y cordones que las vuelven fáciles de poner y sacar si estás apurado.",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwec28aab0/products/AD_GZ8213/AD_GZ8213-1.JPG",
    price: 120000,
  },
  {
    id: 3,
    title: "Zapatillas Nike Waffle One",
    description:
      "Lo simple no va con vos. Por eso, te subís a las Zapatillas Nike Waffle One que te llenan de estilo y energía. Con un legado del running pero con innovaciones para que te destaques en las pistas pero también mientras que recorres la ciudad.",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4758ee1a/products/NI_DM7604-600/NI_DM7604-600-1.JPG",
    price: 170000,
  },
  {
    id: 4,
    title: "Zapatillas Nike Max Dawn",
    description:
      "Las Zapatillas Nike Air Max Dawn están confeccionadas con materiales reciclables. Además, la gamuza sintética y los demás materiales combinan el estilo vintage del running con nuevas tendencias. La unidad Nike Air en el talón brinda estabilidad y amortiguación de alto rendimiento en cada pisada.",
    img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG?sw=400&sh=400",
    price: 140000,
  },
];

export default function FlatCards() {
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState([]);


  const addProduct = (item) => {
    console.log(item)
    setItemList(item);


  };

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true);
    console.log(itemSelected.value)

  };

  const handleDelete = () => {
    const filter = itemList.filter((task) => task !== itemSelected);
    setItemList(filter);
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
    setItemSelected({});
  };
  return (
    <View>
      <View>
        <Text style={styles.title}>My Ecommerce</Text>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, styles.cardElevated]}
              onPress={() => handleModal(item)}
            >
              <Image
                source={{
                  uri: item.img,
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <View style={styles.priceContainer}>
                  <View>
                    <Text style={styles.cardLabel}>${item.price}</Text>
                  </View>
                  <View>
                    <Text style={styles.cardPlus}>+</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <View style={styles.textContainer}>
              <Text>Estas seguro que quieres agregar al carrito:</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{itemSelected.value}</Text>
            </View>
            <View style={styles.btnContainer}>
              <Button title="Agregar" onPress={handleDelete} />
              <Button title="Cancelar" onPress={handleCancelModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
  }
});
