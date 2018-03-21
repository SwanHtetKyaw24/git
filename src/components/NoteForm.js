import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import {
  textValueChanged,
  noteSave,
  popupOn,
  popupOff,
  titleUpdate,
  titleChange,
  noteDelete,
  clearData
} from "../actions";
import { Button, CardSection, Card, TitleBar } from "./common";
import MyTitleBar from "./MyTitleBar";

let uid, title, texts;
class NoteForm extends Component {
  componentWillMount() {
    //console.log("Note data ", this.props.navigation.state.params.item);
    texts = this.props.navigation.state.params.item.texts;
    uid = this.props.navigation.state.params.item.uid;
    title = this.props.navigation.state.params.item.title;

    this.props.textValueChanged(texts);
    this.props.titleChange(title);
  }

  onEditPressed() {
    this.props.popupOn();
  }

  onCancelPress = () => {
    this.props.clearData();
    this.props.navigation.navigate("Home");
  };

  onDeletePress = () => {
    console.warn("Try to delete");
    this.props.noteDelete(uid);
    this.props.navigation.navigate("Home");
  };

  onSavePress = () => {
    //console.warn(this.props.title, this.props.texts);
    this.props.noteSave({
      uid,
      title: this.props.title,
      texts: this.props.texts
    });
    this.props.navigation.navigate("Home");
  };

  render() {
    const {
      inputStyle,
      containerStyle,
      titleContainerStyle,
      titleTextContainerStyle,
      titleTextStyle,
      buttonsContainerStyle
    } = styles;
    return (
      <View>
        <View style={titleContainerStyle}>
          <TextInput
            autoCorrect={false}
            value={this.props.title}
            onChangeText={value => this.props.titleChange(value)}
            underlineColorAndroid="transparent"
            style={titleTextStyle}
          />
        </View>

        <CardSection>
          <TextInput
            autoCorrect={false}
            value={this.props.texts}
            style={inputStyle}
            onChangeText={value => {
              this.props.textValueChanged(value);
            }}
            multiline={true}
            numberOfLines={4}
            underlineColorAndroid="transparent"
          />
        </CardSection>
        <View style={buttonsContainerStyle}>
          <Button onPress={this.onSavePress}>Save</Button>
          <Button onPress={this.onCancelPress}>Cancel</Button>
          <Button onPress={this.onDeletePress}>Delete</Button>
        </View>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 20,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    paddingTop: -10
  },
  containerStyle: {
    height: 150,
    flex: 1,
    alignItems: "center",
    marginTop: 10
  },
  titleContainerStyle: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    //break
    //flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleTextStyle: {
    fontSize: 25,
    flex: 1,
    textAlign: "center"
  },
  buttonsContainerStyle: {
    alignItems: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20
  }
};

const mapStateToProps = state => {
  //state.notedata
  const { texts } = state.notedata;
  const { popupstate, title } = state.note;
  return { texts, popupstate, title };
};

export default connect(mapStateToProps, {
  textValueChanged,
  noteSave,
  popupOn,
  popupOff,
  titleUpdate,
  titleChange,
  noteDelete,
  clearData
})(NoteForm);
