import { BLACK_THEME, 
    WHITE_THEME, 
    SET_PICTURE, 
    SET_DATA, SET_ERROR, 
    CANCEL_ERROR, 
    SET_PICTURE_ERROR, 
    CANCEL_PICTURE_ERROR, 
    DELETE_DATA,
    SET_LOADING,
    CANCEL_LOADING } from './types';
import useAPI from '../api/useApi';

export const blackTheme = () => {
    return {
        type: BLACK_THEME
    };
};

export const whiteTheme = () => {
    return {
        type: WHITE_THEME
    };
};

export const setError = (text) => {
    return {
        type: SET_ERROR,
        payload: text
    };
};

export const cancelError = () => {
    return {
        type: CANCEL_ERROR
    };
};

export const setPictureError = (text) => {
    return {
        type: SET_PICTURE_ERROR,
        payload: text
    };
};

export const cancelPictureError = () => {
    return {
        type: CANCEL_PICTURE_ERROR
    };
};

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    };
};

export const deleteData = () => {
    return {
        type: DELETE_DATA
    };
};

export const setPicture = (picture) => {
    return {
        type: SET_PICTURE,
        payload: picture
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const cancelLoading = () => {
    return {
        type: CANCEL_LOADING
    };
};

export const requestData = ({category, id}) => async (dispatch) => {
    const {requestInfo} = useAPI();
    dispatch(setLoading());
    dispatch(cancelPictureError());
    dispatch(deleteData());
    const data = await requestInfo({category, id});

    if (data.status === 200) {
        dispatch(cancelLoading());
        switch(category) {
            case 'people':
                const people = {
                    name: data.data.name,
                    birth: data.data.birth_year,
                    gender: data.data.gender
                }; 
                return dispatch(setData(people)); 
            case 'films':
                const films = {
                    title: data.data.title,
                    director: data.data.director,
                    producer: data.data.producer,
                    release_date: data.data.release_date,
                    opening_crawl: data.data.opening_crawl
                };
                return dispatch(setData(films));
            case 'planets':
                const planets = {
                    name: data.data.name,
                    diameter: data.data.diameter,
                    population: data.data.population,
                    climate: data.data.climate
                };
                return dispatch(setData(planets));
            case 'starships':
                const starship = {
                    name: data.data.name,
                    consumables: data.data.consumables,
                    length: data.data.length,
                    starship_class: data.data.starship_class
                };
                return dispatch(setData(starship));
            case 'vehicles':
                const vehicle = {
                    name: data.data.name,
                    crew: data.data.crew,
                    length: data.data.length,
                    passengers: data.data.passengers,
                    cargo_capacity: data.data.cargo_capacity
                };
                return dispatch(setData(vehicle));
            default:
                return {
                   default: 'Def-title, no data'
                };
            };
    } else if (data.status === 404) {
        return dispatch(setError('There are no data on server!'));
    };
};

export const requestPicture = ({category, number}) => async (dispatch) => {
    const {requestPicture} = useAPI();
    dispatch(cancelPictureError());
    const picture = await requestPicture({category, number});
    if(picture.status === 200) {
        return dispatch(setPicture(picture.config.url));
    } else if (picture.status === 404) {
        return dispatch(setPictureError('Error 404, there is no picture!'));
    };
};
