import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestData, requestPicture, cancelError } from '../redux/actions';
import Error from "./Errors/Error";

const Planets = () => {

    const data = useSelector(state => state.item);
    const picture = useSelector(state => state.picture);
    const isError = useSelector(state => state.isError);
    const isPictureError = useSelector(state => state.isPictureError);
    const errorPictureText = useSelector(state => state.errorPictureText);
    const errorText = useSelector(state => state.errorMessage);

    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        dispatch(requestPicture({category: 'planets', number: count}));
        dispatch(requestData({category: 'planets', id: count}));
    }, [dispatch, count]);

    const nextClickHandler = () => {
        dispatch(cancelError());
        setCount(prevState => prevState + 1);
    };
    const prevClickHandler = () => {
        dispatch(cancelError());
        setCount(prevState => prevState - 1);
    };

    return (
        <div className='content'>
            <div className='image'>
                {isPictureError ? <Error text={errorPictureText} /> : <img src={picture} alt='planet' />}
            </div>
            <div className='info'>
                {isError ? <Error text={errorText} /> : Object.keys(data).map(item => {
                    if(item === 'name') {
                        return <h1>{`${item}: ${data[item]}`}</h1>
                    } else {
                        return <h2>{`${item}: ${data[item]}`}</h2>
                    };             
                })}
            </div>
            <button onClick={prevClickHandler}>previous</button>
            <button onClick={nextClickHandler}>next</button>
        </div>
    );
};

export default Planets;
