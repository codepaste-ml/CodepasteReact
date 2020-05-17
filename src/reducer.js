import {combineReducers} from "redux";
import {PASTE_LOADED, RECEIVE_LANGUAGES} from "./actions";

const initialLanguages = {
    defaultLanguage: null,
    languages: []
}

function languages(state = initialLanguages, action) {
    if (action.type === RECEIVE_LANGUAGES) {
        return action.languageSet;
    }
    return state;
}

function paste(state = {}, action) {
    if (action.type === PASTE_LOADED) {
        return {
            ...state,
            [action.paste.alias]: action.paste
        };
    }
    return state;
}

export default combineReducers({
    paste,
    languages
});
