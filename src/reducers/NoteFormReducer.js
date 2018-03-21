import {
  TEXT_VALUE_CHANGED,
  NOTE_SAVED_SUCCESSFULLY,
  NOTE_TITLE_UPDATE,
  NOTE_DELETE_SUCCESSFULLY
} from "../actions/types";

const INITIAL_STATE = {
  title: "",
  texts: "",
  notelist: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_VALUE_CHANGED:
      return { ...state, texts: action.payload };
    case NOTE_TITLE_UPDATE:
      return { ...state, title: action.payload };
    case NOTE_SAVED_SUCCESSFULLY:
      return { ...state, texts: action.payload };
    case NOTE_DELETE_SUCCESSFULLY:
        return { ...state, title: "", texts: "" };
    default:
      return state;
  }
};
