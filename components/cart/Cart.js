import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./cartStyles";
import {
  subtractProductQuantity,
  addProductQuantity,
} from "../../store/actions/productsActions";

const Cart = (props) => {
  const { navigation, style, children } = props;
  const cartProducts = useSelector((state) => state.productsStore.cartProducts);
  const dispatch = useDispatch();

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
        <View style={styles.item}>
          <Text style={styles.text}>{product.name}</Text>
          <View style={styles.iconContainer}>
            <Text style={styles.text}>
              Total ₹ {product.price * product.quantity}
            </Text>
            <Icon
              name="remove"
              color="skyblue"
              style={styles.icon}
              onPress={() => dispatch(subtractProductQuantity(product))}
            />
            <Text style={[styles.quantityText, styles.text]}>
              {product.quantity}
            </Text>
            <Icon
              name="add"
              color="skyblue"
              style={styles.icon}
              onPress={() => dispatch(addProductQuantity(product))}
            />
            <Icon
              name="delete"
              color="skyblue"
              style={styles.icon}
              // onPress={() => dispatch(removeProduct(currentLanguage.id))}
            />
          </View>
        </View>
      );
    });
  };

  return (
    <View style={[styles.container, props.style]}>
      {renderProduct()}
      <Button
        style={styles.orderBtn}
        title="Place Order"
        // onPress={() => dispatchAction(placeOrder(product))}
      />
    </View>
  );
};

export default Cart;
