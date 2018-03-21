import React from "react";
import { Text, View } from "react-native";
import { Button } from "./";

const TitleBar = props => {
  const { textStyle, viewStyle, buttonContainer, buttonTextStyle } = styles;
  //console.warn(props.textStyle, props.viewStyle);

  return (
    <View style={[viewStyle, props.viewStyle]}>
      <Text style={[textStyle, props.textStyle]}>{props.headerText}</Text>
      <View style={buttonContainer}>
        <Button
          textStyle={[buttonTextStyle, props.buttonTextStyle]}
          onPress={props.onPress}
        >
          {props.buttonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 25,
    flex: 5,
    paddingLeft: 100
  },
  buttonContainer: {
    flex: 1.5
  },
  buttonTextStyle: {
    fontSize: 30,
    paddingTop: 14,
    paddingBottom: 0
  }
};
export { TitleBar };
