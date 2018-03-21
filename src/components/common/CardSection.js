import React from "react";
import { View, Text } from "react-native";

const CardSection = props => {

  return (
    <View style={[styles.sectionStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  sectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    position: "relative"
  }
};

export { CardSection };
