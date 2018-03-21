import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { CardSection, Button } from "./common";
//import { Actions } from 'react-native-router-flux';

class NoteItem extends Component {
  constructor(props) {
    super(props);
  }

  onRowPressed = item => {
    //console.warn("On Row")
    //console.log(this.props);
    //redirect using react navigation
    this.props.noteDetails(item);
  };

  onDeletePressed = uid => {
    this.props.deletePressed(uid);
  };

  render() {
    //console.warn(this.props.note);
    //console.warn(this.props.note.item.title);
    //console.log(this.props.note)
    return (
      // <TouchableWithoutFeedback onPress={() => this.onRowPressed(this.props.note.item)}>
        <CardSection
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 20, paddingLeft: 15 }}>
            {this.props.note.item.title}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              onPress={() => this.onRowPressed(this.props.note.item)}
              textStyle={{ paddingLeft: 4, paddingRight: 4 }}
            >
              Edit
            </Button>
            <Button 
              onPress={() => this.onDeletePressed(this.props.note.item.uid)}
              textStyle={{ paddingLeft: 4, paddingRight: 4 }}
            >
              Delete
            </Button>
          </View>
        </CardSection>
      // </TouchableWithoutFeedback>
    );
  }
}

export default NoteItem;
