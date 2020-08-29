import { language } from "../../language/language";
import { GET_PRODUCTS, ADD_PRODUCT } from "../actions/productsActions";
import { getProducts, addProduct } from "../../helpers/productsHelper";

const initialState = {
  products: [],
  cartProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      state.products = getProducts(action.payload);
      return state;
    case ADD_PRODUCT:
      const product = addProduct(action.payload);
      state.cartProducts = [...state.cartProducts, product];
      return state;
    default:
      return state;
  }
};
