import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { CardSection, Button } from "./";

const TitleFlyForm = (props) => {
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
          {props.children}
        </CardSection>
        <CardSection style={{ justifyContent: 'space-around' }}>
            {/* <Button onPress={props.onSave}>Save</Button>
            <Button onPress={props.onCancel}>Cancel</Button> */}
            <Button onPress={props.onSave}>{props.onSaveLabel}</Button>
                <Button onPress={props.onCancel}>{props.onCancelLabel}</Button>
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

export { TitleFlyForm };
