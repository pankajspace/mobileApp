import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { styles } from "./cartStyles";
import {
  subtractProductQuantity,
  addProductQuantity,
  removeProduct,
  getOrderTotal,
} from "../../store/actions/productsActions";

const Cart = (props) => {
  const { navigation, style, children } = props;
  const cartProducts = useSelector((state) => state.productsStore.cartProducts);
  const orderTotal = useSelector((state) => state.productsStore.orderTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderTotal());
  });

  const addProduct = (product) => {
    dispatch(addProductQuantity(product));
    dispatch(getOrderTotal());
  };

  const subtractProduct = (product) => {
    dispatch(subtractProductQuantity(product));
    dispatch(getOrderTotal());
  };

  const deleteProduct = (product) => {
    dispatch(removeProduct(product));
    dispatch(getOrderTotal());
  };

  const placeOrder = () => {
    navigation.navigate("Customer");
  };

  const confirmDelete = (product) => {
    Alert.alert(
      "Remove product?",
      "Are you sure you want to remove this product from the order?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => deleteProduct(product) },
      ],
      { cancelable: false }
    );
  };

  const confirmOrder = (product) => {
    Alert.alert(
      "Place Order?",
      "Are you sure you want to place the order?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => placeOrder(product) },
      ],
      { cancelable: false }
    );
  };

  const renderProduct = () => {
    if (cartProducts.length == 0) {
      return (
        <View style={styles.item}>
          <Text style={styles.text}>No products added in your Cart yet.</Text>
        </View>
      );
    }
    return cartProducts.map((product) => {
      return (
        <View style={styles.item} key={product.id}>
          <Text style={[styles.text, styles.itemName]}>
            {product.name} (Total : ₹ {product.price * product.quantity})
          </Text>
          <View style={styles.iconContainer}>
            <Ionicons
              name="ios-remove-circle-outline"
              size={24}
              color="skyblue"
              onPress={() => subtractProduct(product)}
            />
            <Text
              style={[
                styles.quantityText,
                styles.text,
                styles.marginHorizontal_20,
              ]}
            >
              {product.quantity}
            </Text>
            <Ionicons
              name="ios-add-circle-outline"
              size={24}
              color="skyblue"
              onPress={() => addProduct(product)}
            />
            <AntDesign
              name="delete"
              size={24}
              color="red"
              onPress={() => confirmDelete(product)}
            />
          </View>
        </View>
      );
    });
  };

  return (
    <View style={[styles.container, props.style]}>
      {renderProduct()}
      <Text style={[styles.text, styles.orderText, styles.itemName]}>
        Order Total: ₹ {orderTotal}
      </Text>
      <Button
        
        style={styles.orderBtn}
        title="Place Order"
        onPress={() => confirmOrder()}
      />
    </View>
  );
};

export default Cart;
