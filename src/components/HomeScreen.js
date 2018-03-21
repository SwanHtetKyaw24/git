import _ from "lodash";
import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import {
  noteCreate,
  titleChange,
  popupOn,
  popupOff,
  noteFetch,
  noteDelete
} from "../actions";
import { TitleBar, TitleFlyForm, Input, Spinner } from "./common";
import NoteItem from "./NoteItem";
import MyTitleBar from "./MyTitleBar";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.props.noteFetch();
  }
  componentWillMount() {
    this.props.noteFetch();
  }

  renderList() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <ScrollView style={{ flex: 0.9 }}>
        <FlatList
          data={this.props.notelist}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => item.uid}
        />
      </ScrollView>
    );
  }

  renderRow = note => {
    //console.warn(note); //reached here!!
    return (
      <NoteItem
        note={note}
        noteDetails={item => this.pressDetail(item)}
        deletePressed={uid => this.deletePressed(uid)}
      />
    );
  };

  //_keyExtractor = (item, index) => index;

  onPress() {
    this.props.popupOn();
  }

  onCancel() {
    this.props.popupOff();
  }

  pressDetail(item) {
    this.props.navigation.navigate("Details", { item });
  }

  deletePressed(uid) {
    //do something
    //console.warn("Delete pressed reached");
    this.props.noteDelete(uid);
    this.props.noteFetch();
  }

  render() {
    //this.renderAllRow();
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <TitleBar
            headerText="Note List"
            onPress={this.onPress.bind(this)}
            buttonLabel="+"
            buttonTextStyle={{ paddingTop: 0 }}
          />
          <TitleFlyForm
            visible={this.props.popupstate}
            onSave={() => {
              this.props.popupOff();
              this.props.noteCreate(this.props.title);
              //this.props.noteFetch();
            }}
            onCancel={this.onCancel.bind(this)}
            onSaveLabel="Save"
            onCancelLabel="Cancel"
          >
            <Input
              label="Title"
              placeHolder="Note Title"
              value={this.props.title}
              onChangeText={value => {
                this.props.titleChange(value);
              }}
            />
          </TitleFlyForm>
        </View>
        {/* <ScrollView style={{ flex: 0.9 }}>
          <FlatList
            data={this.props.notelist}
            renderItem={this.renderRow}
            keyExtractor={(item, index) => item.uid}
          />
        </ScrollView> */}
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { title, popupstate, notelist, loading } = state.note;
  const newNotesList = _.map(state.note.notelist, (val, uid) => {
    return { ...val, uid };
  });
  return { title, popupstate, notelist: newNotesList, loading };

  // const { notelist } = state.note;
  // const newNotesList = _.map(state.note.notelist, (val, uid) => {
  //   return { ...val, uid };
  // });
  // return { notelist: newNotesList };
};

export default connect(mapStateToProps, {
  noteCreate,
  titleChange,
  popupOn,
  popupOff,
  noteFetch,
  noteDelete
})(HomeScreen);
