import { BLACK_THEME, 
    WHITE_THEME, 
    SET_PICTURE, 
    SET_DATA, SET_ERROR, 
    CANCEL_ERROR,
    SET_PICTURE_ERROR, 
    CANCEL_PICTURE_ERROR,
    DELETE_DATA, SET_LOADING, CANCEL_LOADING } from './types';

let initialState = {
    item: {},
    picture: '',
    isError: false,
    errorMessage: '',
    isPictureError: false,
    errorPictureText: '',
    isBlackTheme: false,
    isLoading: false
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
        case SET_ERROR:
            return {
                ...state,
                isError: true,
                errorMessage: action.payload
            };
        case CANCEL_ERROR: 
            return {
                ...state,
                isError: false,
                errorMessage: ''
            };
        case SET_PICTURE_ERROR:
            return {
                ...state,
                isPictureError: true,
                errorPictureText: action.payload
            };
        case CANCEL_PICTURE_ERROR:
            return {
                ...state,
                isPictureError: false,
                errorMessage: ''
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
        case DELETE_DATA:
            return {
                ...state,
                item: {},
                picture: ''
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case CANCEL_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    };
};

export default rootReducer;
