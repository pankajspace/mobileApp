import { services } from "../../data/servicesData.js";

export const GET_SERVICES = "GET_SERVICES";

const getServicesJSON = () => {
  return services;
};

export const getServices = () => {
  return async (dispatch) => {
    const services = await getServicesJSON();
    dispatch({ type: GET_SERVICES, payload: services });
  };
};
