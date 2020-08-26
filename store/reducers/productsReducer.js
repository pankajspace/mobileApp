import { language } from "../../language/language";
import { GET_PRODUCTS } from "../actions/productsActions";
import { getProducts } from "../../helpers/productsHelper";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      state.products = getProducts(action.payload);
      return state;
    default:
      return state;
  }
};
