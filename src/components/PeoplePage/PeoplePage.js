import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from '../../redux/actions';

const PeoplePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
     console.log(data);
    useEffect(() => {
        dispatch(requestData());
    }, []);

    return (
        <div>
            {data.map(item => {
                return (
                    <div>
                        <h3 key={item.height}>{item.name}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default PeoplePage;