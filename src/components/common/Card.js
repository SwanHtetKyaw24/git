import React from "react";
import { View, Text } from "react-native";

const styles = {
  cardStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 60
    //250
  }
};

const Card = (props) => {
  return (
    <View style={[styles.cardStyles, props.style]}>
      {props.children}
    </View>
  );
};

export { Card };
