import data from "../../data/products.json";

export const GET_PRODUCTS = "GET_PRODUCTS";

const getProductsJSON = () => {
  return data.products;
};

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getProductsJSON();
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};
