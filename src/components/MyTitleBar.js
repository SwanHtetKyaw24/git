import _ from "lodash";
import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { noteCreate, titleChange, popupOn, popupOff } from "../actions";
import { TitleBar, TitleFlyForm, Input, CardSection } from "./common";

class MyTitleBar extends React.Component {

  componentWillMount() {
    const { headerValue } = this.props;
    //console.warn("Current title value ",headerValue);
    this.props.titleChange(headerValue);
  }

  onPress() {
    this.props.popupOn();
  }

  onSave() {
    const { title } = this.props;
    this.props.popupOff();
    this.props.noteCreate({ title });
    //this.props.noteFetch();
  }

  onCancel() {
    this.props.popupOff();
  }

  render() {
    return (
      <View>
        <CardSection>

        </CardSection>
        <TitleBar
          headerText={this.props.headerText}
          onPress={this.onPress.bind(this)}
          buttonLabel={this.props.buttonLabel}
          buttonTextStyle={this.props.buttonTextStyle}
        />
        <TitleFlyForm
          visible={this.props.popupstate}
          // onSave={this.onSave.bind(this)}
          onSave={() => {
            this.props.onSaving(this.props.title);
            this.props.popupOff();
          }}
          onCancel={this.onCancel.bind(this)}
          onSaveLabel={this.props.onSaveLabel}
          onCancelLabel={this.props.onCancelLabel}
        >
          <Input
            label="Title"
            placeHolder={this.props.placeHolder || "Note Title"}
            value={this.props.title}
            onChangeText={value => {
              this.props.titleChange(value);
            }}
          />
        </TitleFlyForm>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { title, popupstate } = state.note;
  return { title, popupstate };
};

export default connect(mapStateToProps, {
  noteCreate,
  titleChange,
  popupOn,
  popupOff
})(MyTitleBar);
