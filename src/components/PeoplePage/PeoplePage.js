import React, { useEffect, useState } from 'react';
import './people.css';
import { useDispatch, useSelector } from 'react-redux';
import { requestData, requestPicture } from '../../redux/actions';

const PeoplePage = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1); 

    const data = useSelector(state => state.item);
    const picture = useSelector(state => state.picture);

    useEffect(() => {
        dispatch(requestPicture({category: 'characters', number: count}));
        dispatch(requestData({category: 'people', id: count}));
    }, [dispatch]);

    const clickHandler = () => {
        setCount(prevState => prevState + 1);
    };

    return (
        <div className='body-content'>
            <img src={picture} alt='characters' />
            <h1>{data.name}</h1>
            <button onClick={clickHandler}>next</button>
        </div>
    );
};

export default PeoplePage;