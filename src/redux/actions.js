import {SET_DATA, BLACK_THEME, WHITE_THEME} from './types';
import useAPI from '../api/useApi';

export const blackTheme = () => {
    return {
        type: BLACK_THEME
    };
};

export const whiteTheme = () => {
    return {
        type: WHITE_THEME
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    }
};

export const requestData = () => async (dispatch) => {
    const {requestPeople} = useAPI();
    const data = await requestPeople();
    return dispatch(setData(data));
};