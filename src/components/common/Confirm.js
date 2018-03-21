import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { CardSection, Button } from "./";

const Confirm = (props) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;
  return (
    <Modal
        visible={props.visible}
        animationType="slide"
        transparent
        onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{props.children}</Text>
        </CardSection>
        <CardSection>
            <Button onPress={props.onAccept}>Yes</Button>
            <Button onPress={props.onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
