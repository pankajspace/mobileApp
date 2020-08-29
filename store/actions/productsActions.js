import { products } from "../../data/productsData.js";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";

const getProductsJSON = () => {
  return products;
};

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getProductsJSON();
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };
};
