import firebase from "firebase";
import {
  NOTE_TITLE_CREATE,
  TITLE_CHANGED,
  POPUP_OFF,
  POPUP_ON,
  NOTE_FETCH_SUCCESS,
  CLEAR_DATA
} from "./types";

export const noteFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref(`/notelist/notes`)
      .on("value", snapshot => {
        dispatch({ type: NOTE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const noteCreate = title => {
  return dispatch => {
    //console.warn("In creating notes");

    firebase
      .database()
      .ref(`/notelist/notes`)
      .push({ title: title, texts: "" })
      .then(() => {
        dispatch({ type: NOTE_TITLE_CREATE });
      });
  };
};

export const titleChange = title => {
  //console.warn(title);
  return {
    type: TITLE_CHANGED,
    payload: title
  };
};

export const popupOn = () => {
  return {
    type: POPUP_ON
  };
};

export const popupOff = () => {
  return {
    type: POPUP_OFF
  };
};

export const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};
