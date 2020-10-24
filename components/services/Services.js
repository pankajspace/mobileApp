import React, { useEffect, useState } from "react";
import { ScrollView, TouchableWithoutFeedback, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "@react-native-community/picker";

import Card from "../common/Card";
import { getServices } from "../../store/actions/servicesActions";
import { styles } from "./serviceStyles";

const Services = (props) => {
  const services = useSelector((state) => state.servicesStore.services);
  console.log("Services", services);

  const dispatch = useDispatch();
  const { navigation } = props;

  const [selectedService, setService] = useState();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  // useEffect(() => {
  //   dispatch(getServices());
  // }, [services]);

  const handleBtnClick = (service) => {
    // navigation.navigate("Order Service", { service: service });
    // dispatch(addProduct(service));
  };

  const renderServiceDropdown = () => {
    console.log("renderServiceDropdown", services);
    if (services.parts && services.parts.length > 0) {
      return services.parts.map((part) => {
        return <Picker.Item label={part.name} value={part.name} />;
      });
    }
    return null;
  };

  const renderServicesForm = () => {
    return (
      <TouchableWithoutFeedback>
        <View>
          <Picker
            selectedValue={selectedService}
            style={{ height: 25, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setService(itemValue)}
          >
            {renderServiceDropdown()}
          </Picker>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderServicesForm()}
    </ScrollView>
  );
};

export default Services;
