import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Icon, ActivityIndicator } from "react-native-elements";

import { getProducts } from "../../store/actions/productsActions";

const Products = (props) => {
  const products = useSelector((state) => state.productsStore.products);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getProducts());
  }, [products]);

  const renderProducts = (products) => {
    return products.map((product) => {
      return (
        <Card
          title={product.name}
          image={require("../../assets/products/electric-wires-home.jpg")}
          containerStyle={styles.cardContainer}
        >
          <Text
            style={{
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "500",
              color: "blue",
              textAlign: "center",
            }}
          >
            {"₹"}
            {product.price}
          </Text>
          <Text
            style={{
              marginBottom: 10,
              maxHeight: 150,
              overflow: "scroll",
              minHeight: 150,
            }}
          >
            {product.desc}
          </Text>
          <Button
            icon={
              <Icon
                name="shopping-cart"
                type="foundation"
                color="#FF3D00"
                style={{ paddingRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 5,
              // marginLeft: 0,
              // marginRight: 0,
              // marginBottom: 0,
              // position: "absolute",
              // bottom: 0,
              // left: 0,
              // right: 0,
            }}
            title="Add To Cart"
          />
        </Card>
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
    marginBottom: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardContainer: {
    width: 300,
    borderColor: "#03DAC6",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default Products;
