import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestData, requestPicture } from "../redux/actions";
import Error from "./Errors/Error";

const FilmsPage = () => {

    const data = useSelector(state => state.item);
    const picture = useSelector(state => state.picture);
    const isError = useSelector(state => state.isError);
    const errorPictureText = useSelector(state => state.errorPictureText);
    const errorText = useSelector(state => state.errorMessage);

    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    
    useEffect(() => {
        dispatch(requestPicture({category: 'films', number: count}));
        dispatch(requestData({category: 'films', id: count}));
    }, [dispatch, count]);

    const nextClickHandler = () => {
        setCount(prevState => prevState + 1);
    };
    const prevClickHandler = () => {
        setCount(prevState => prevState - 1);
    };
    console.log(data);
    return (
        <div className='content'>
            <div className='image'>
                {isError ? <Error text={errorPictureText} /> : <img src={picture} alt='character' />}
            </div>
            <div className='info'>
                {isError ? <Error text={errorText} /> : Object.keys(data).map(item => {
                    if(item === 'title') {
                        return <h3>{`${item}: ${data[item]}`}</h3>
                    } else if (item === 'opening_crawl'){
                        return <p>{`${item}: ${data[item]}`}</p>
                    } else {
                        return <h4>{`${item}: ${data[item]}`}</h4>
                    };             
                })}
            </div>
            <button onClick={prevClickHandler}>previous</button>
            <button onClick={nextClickHandler}>next</button>
        </div>
    );
};

export default FilmsPage;