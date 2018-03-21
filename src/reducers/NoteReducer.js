import { 
    NOTE_TITLE_CREATE, 
    TITLE_CHANGED,
    POPUP_ON,
    POPUP_OFF,
    NOTE_FETCH_SUCCESS,
    CLEAR_DATA
} from '../actions/types';

const INITIAL_STATE = {
    title: '',
    popupstate: false,
    notelist: null,
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TITLE_CHANGED:
            return { ...state, title: action.payload };
        case NOTE_TITLE_CREATE:
            return { ...state, title: '' };
        case POPUP_ON:
            return { ...state, popupstate: true };
        case POPUP_OFF:
            return { ...state, popupstate: false };
        case NOTE_FETCH_SUCCESS:
            return { ...state, notelist: action.payload, loading: false };
        case CLEAR_DATA:
            return { ...state, title: '' };
        default:
            return state;
    }
};