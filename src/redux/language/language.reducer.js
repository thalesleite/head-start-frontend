import { LanguageActionTypes } from './language.types';

const INITIAL_STATE = {
    language: 'EN'
}

const languageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LanguageActionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export default languageReducer;