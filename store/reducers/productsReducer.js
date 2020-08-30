import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  SUBTRACT_PRODUCT_QUANTITY,
} from "../actions/productsActions";
import {
  getProducts,
  addProduct,
  addProductQuantity,
  subtractProductQuantity,
} from "../../helpers/productsHelper";

const initialState = {
  products: [],
  cartProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      state.products = getProducts(action.payload);
      return state;
    }
    case ADD_PRODUCT: {
      const data = {
        product: action.payload,
        cartProducts: state.cartProducts,
      };
      const products = addProduct(data);
      state.cartProducts = [...products];
      return state;
    }
    case ADD_PRODUCT_QUANTITY: {
      const data = {
        product: action.payload,
        cartProducts: state.cartProducts,
      };
      const products = addProductQuantity(data);
      state.cartProducts = [...products];
      return state;
    }
    case SUBTRACT_PRODUCT_QUANTITY: {
      const data = {
        product: action.payload,
        cartProducts: state.cartProducts,
      };
      const products = subtractProductQuantity(data);
      state.cartProducts = [...products];
      return state;
    }
    default:
      return state;
  }
};
