import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "../reducers";
import HomeScreen from "./HomeScreen";
import NoteForm from './NoteForm';
import Screens from './Screens';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDUUIvEHLGfVLVOUxpxjrHadziKGO7VhUs",
      authDomain: "reacttodo-589fc.firebaseapp.com",
      databaseURL: "https://reacttodo-589fc.firebaseio.com",
      projectId: "reacttodo-589fc",
      storageBucket: "reacttodo-589fc.appspot.com",
      messagingSenderId: "106037649625"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Screens />
        {/* <HomeScreen /> */}
        {/* <NoteForm /> */}
      </Provider>
    );
  }
}

export default App;
