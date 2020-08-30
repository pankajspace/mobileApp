import React, { useEffect } from "react";
import { ScrollView, Text, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-native-elements";

import { getProducts, addProduct } from "../../store/actions/productsActions";
import { styles } from "./productStyles";

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

export default Products;
