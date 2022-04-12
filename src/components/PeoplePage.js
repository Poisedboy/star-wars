import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestData, requestPicture } from '../redux/actions';
import Error from './Errors/Error';

const PeoplePage = () => {

    const data = useSelector(state => state.item);
    const picture = useSelector(state => state.picture);
    const isError = useSelector(state => state.isError);
    const isPictureError = useSelector(state => state.isPictureError);
    const errorPictureText = useSelector(state => state.errorPictureText);
    const errorText = useSelector(state => state.errorMessage);

    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        dispatch(requestPicture({category: 'characters', number: count}));
        dispatch(requestData({category: 'people', id: count}));
    }, [dispatch, count]);

    const nextClickHandler = () => {
        setCount(prevState => prevState + 1);
    };
    const prevClickHandler = () => {
        setCount(prevState => prevState - 1);
    };

    return (
        <div className='content'>
            <div className='image'>
                {isPictureError ? <Error text={errorPictureText} /> : <img src={picture} alt='character' />}
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

export default PeoplePage;