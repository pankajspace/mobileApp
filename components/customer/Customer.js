import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'
import { useDispatch } from "react-redux";

const Customer = (props) => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      console.log(props);
      await props.firebase.signOut()
      dispatch(checkUserAuth(false));
    } catch (error) {
      console.log(error)
    }
  }

  return(
  <ScrollView style={[styles.container, props.style]}>
    <Button
          title='Signout'
          onPress={handleSignout}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
});

export default Customer;
