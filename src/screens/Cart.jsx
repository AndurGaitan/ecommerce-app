import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { colors } from "../constants/colors"

const Cart = () => {

    const {localId} = useSelector(state => state.auth.value)

    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()

    const onConfirmOrder = () => {
        try {
            triggerPostOrder({items: CartData, user: localId, total})
        } catch (error) {
            
        }
      
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(cart) => cart.id}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
                <Text>Total: ${total}</Text>
                <TouchableOpacity onPress={onConfirmOrder} style={styles.confirmButtom}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: "row",
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    confirmButtom: {
        backgroundColor: colors.teal200,
        borderWidth: 1,
        width: "80%",
        marginTop:10,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
})