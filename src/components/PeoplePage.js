import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestData, requestPicture, cancelError } from '../redux/actions';
import Error from './Error';

const PeoplePage = () => {

    const data = useSelector(state => state.item);
    const picture = useSelector(state => state.picture);
    const isError = useSelector(state => state.isError);

    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        dispatch(requestPicture({category: 'characters', number: count}));
        dispatch(requestData({category: 'people', id: count}));
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
                {isError ? <Error/> : <img src={picture} alt='character' />}
            </div>
            <div className='info'>
                {isError ? <Error/> : Object.keys(data).map(item => {
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