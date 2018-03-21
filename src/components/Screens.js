import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { TitleBar, TitleFlyForm } from "./common";
import HomeScreen from "./HomeScreen";
import NoteForm from "./NoteForm";

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: NoteForm
    }
  },
  {
    headerMode: "none"
  }
);
