import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  SUBTRACT_PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
  GET_ORDER_TOTAL,
} from "../actions/productsActions";
import {
  getProducts,
  addProduct,
  addProductQuantity,
  subtractProductQuantity,
  removeProduct,
  getOrderTotal,
} from "../../helpers/productsHelper";

const initialState = {
  products: [],
  cartProducts: [],
  orderTotal: 0,
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
    case REMOVE_PRODUCT: {
      const data = {
        product: action.payload,
        cartProducts: state.cartProducts,
      };
      const products = removeProduct(data);
      state.cartProducts = [...products];
      return state;
    }
    case GET_ORDER_TOTAL: {
      const data = {
        cartProducts: state.cartProducts,
      };
      const orderTotal = getOrderTotal(data);
      state.orderTotal = orderTotal;
      return state;
    }
    default:
      return state;
  }
};
