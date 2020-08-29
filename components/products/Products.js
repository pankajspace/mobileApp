import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-native-elements";

import { getProducts } from "../../store/actions/productsActions";
import { addProduct } from "../../store/actions/productsActions";

const Products = (props) => {
  const products = useSelector((state) => state.productsStore.products);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getProducts());
  }, [products]);

  const renderProducts = (products) => {
    return products.map((product) => {
      return (
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate("ProductDetails")}
          key={product.id}
        >
          <Card
            title={product.name}
            image={product.image}
            containerStyle={styles.cardContainer}
          >
            <Text style={styles.productPrice}>
              {"₹"}
              {product.price}
            </Text>
            <Text style={styles.productDesc}>{product.desc}</Text>
            <Button
              buttonStyle={styles.cartBtn}
              title="Add To Cart"
              onPress={() => dispatchAction(addProduct(product))}
            />
          </Card>
        </TouchableWithoutFeedback>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderProducts(products)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardContainer: {
    width: 150,
    borderColor: "#03DAC6",
    borderWidth: 2,
    borderRadius: 10,
  },
  productPrice: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "blue",
    textAlign: "center",
  },
  productDesc: {
    marginBottom: 5,
    maxHeight: 44,
    overflow: "hidden",
    minHeight: 45,
  },
  cartBtn: {
    borderRadius: 10,
  },
});

export default Products;
