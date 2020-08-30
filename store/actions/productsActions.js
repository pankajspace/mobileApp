import { products } from "../../data/productsData.js";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_QUANTITY = "ADD_PRODUCT_QUANTITY";
export const SUBTRACT_PRODUCT_QUANTITY = "SUBTRACT_PRODUCT_QUANTITY";

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
