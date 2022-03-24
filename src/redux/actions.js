import { BLACK_THEME, WHITE_THEME, SET_PICTURE, SET_DATA} from './types';
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
};

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    }
};

export const setPicture = (picture) => {
    return {
        type: SET_PICTURE,
        payload: picture
    }
};

export const requestData = ({category, id}) => async (dispatch) => {
    const {requestInfo} = useAPI();
    const data = await requestInfo({category, id});
    return dispatch(setData(data));
};

export const requestPicture = ({category, number}) => async (dispatch) => {
    const {requestPicture} = useAPI();
    const picture = await requestPicture({category, number});
    return dispatch(setPicture(picture));
};
