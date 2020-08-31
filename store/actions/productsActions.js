import { products } from "../../data/productsData.js";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_QUANTITY = "ADD_PRODUCT_QUANTITY";
export const SUBTRACT_PRODUCT_QUANTITY = "SUBTRACT_PRODUCT_QUANTITY";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const GET_ORDER_TOTAL = "GET_ORDER_TOTAL";

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

export const addProductQuantity = (product) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_QUANTITY, payload: product });
  };
};

export const subtractProductQuantity = (product) => {
  return async (dispatch) => {
    dispatch({ type: SUBTRACT_PRODUCT_QUANTITY, payload: product });
  };
};

export const removeProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };
};

export const getOrderTotal = (product) => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_TOTAL, payload: {} });
  };
};
