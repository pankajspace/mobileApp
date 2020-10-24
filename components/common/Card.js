import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./cardStyles";

const Card = (props) => {
  const { data, onButtonClick, btnTitle } = props;
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>{data.name}</Text>
      <Image style={styles.image} source={data.image} />
      <View style={styles.priceContainer}>
        {data.mrp > 0 ? (
          <Text
            style={[styles.price, styles.textStrike]}
          >{`₹ ${data.mrp}`}</Text>
        ) : null}
        <Text style={styles.price}>{`₹ ${data.price}`}</Text>
      </View>
      <Text style={styles.desc}>{data.desc}</Text>
      <Button
        buttonStyle={styles.button}
        title={btnTitle || "Add To Cart"}
        onPress={() => onButtonClick(data)}
      />
    </View>
  );
};

export default Card;
