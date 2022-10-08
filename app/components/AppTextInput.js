import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 4,
    marginVertical: 10,
  }
});

export default AppTextInput;
