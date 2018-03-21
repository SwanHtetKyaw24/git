import firebase from "firebase";
import {
  TEXT_VALUE_CHANGED,
  NOTE_SAVED_SUCCESSFULLY,
  NOTE_TITLE_UPDATE,
  NOTE_DELETE_SUCCESSFULLY
} from "./types";

export const textValueChanged = value => {
  return {
    type: TEXT_VALUE_CHANGED,
    payload: value
  };
};

export const titleUpdate = (uid, title) => {
  return dispatch => {
      console.log(uid, title);
    firebase
      .database()
      .ref(`/notelist/notes/${uid}`)
      .set({ title: title })
      .then(() => {
        dispatch({ type: NOTE_TITLE_UPDATE, payload: title });
      });
  };
};

export const noteSave = ({ uid, title, texts }) => {
  //console.warn(uid, title, texts);
  return dispatch => {
    firebase
      .database()
      .ref(`/notelist/notes/${uid}`)
      .set({ title: title, texts: texts })
      .then(() => {
        dispatch({ type: NOTE_SAVED_SUCCESSFULLY, payload: texts });
      });
  };
};

export const noteDelete = uid => {
  return dispatch => {
    firebase
      .database()
      .ref(`/notelist/notes/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: NOTE_DELETE_SUCCESSFULLY });
      });
  };
};
