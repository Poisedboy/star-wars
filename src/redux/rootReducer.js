import { BLACK_THEME, WHITE_THEME, SET_PICTURE, SET_DATA} from './types';

let initialState = {
    item: {},
    picture: '',
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
        case SET_PICTURE: 
            return {
                ...state,
                picture: action.payload
            };
        case SET_DATA:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
