import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';
import NoteFormReducer from './NoteFormReducer';

export default combineReducers({
    note: NoteReducer,
    notedata: NoteFormReducer
});