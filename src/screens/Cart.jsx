import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"

const Cart = () => {

    const {localId} = useSelector(state => state.auth.value)

    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()

    const onConfirmOrder = () => {
        try {
            triggerPostOrder({items: CartData, user: localId, total})
            console.log(result)
        } catch (error) {
            console.log(error)
            
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
                <TouchableOpacity onPress={onConfirmOrder}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
                <Text>Total: ${total}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})