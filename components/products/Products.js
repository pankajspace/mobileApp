import React, { useEffect } from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Card from "../common/Card";
import { getProducts, addProduct } from "../../store/actions/productsActions";
import { styles } from "./productStyles";

const Products = (props) => {
  const products = useSelector((state) => state.productsStore.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [products]);

  const handleBtnClick = (product) => {
    dispatch(addProduct(product));
  };

  const renderProducts = (products) => {
    return products.map((product) => {
      return (
        <TouchableWithoutFeedback
          // onPress={() => props.navigation.navigate("ProductDetails")}
          key={product.id}
        >
          <Card data={product} onButtonClick={handleBtnClick}></Card>
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
