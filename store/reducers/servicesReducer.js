import { GET_SERVICES } from "../actions/servicesActions";
import { getServices } from "../../helpers/servicesHelper";

const initialState = {
  services: [],
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES: {
      state.services = getServices(action.payload);
      return state;
    }
    default:
      return state;
  }
};
