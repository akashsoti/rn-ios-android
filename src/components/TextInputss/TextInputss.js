import React from "react";
import {Text, View, StyleSheet} from "react-native";

const textInputss = (props) => (
  <View style={styles.textInputss}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  textInputss: {
    width: 300, 
    height: 50, 
    borderColor: "black", 
    borderWidth: 1
  }
});

export default textInputss;