import {SET_DATA, BLACK_THEME, WHITE_THEME} from './types';

let initialState = {
    data: [],
    item: {},
    isBlackTheme: false
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case BLACK_THEME:
            return {
                ...state,
                isBlackTheme: true
            };
        case WHITE_THEME:
            return {
                ...state,
                isBlackTheme: false
            };
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;
