import { products } from "../../data/productsData.js";

export const GET_PRODUCTS = "GET_PRODUCTS";

const getProductsJSON = () => {
  return products;
};

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getProductsJSON();
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};
