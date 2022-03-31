import React from 'react';
import './preloader.css';

const Preloader = () => {
    return (
        <div className='loaderBox'>
            <h1>Loading...</h1>
            <span className='loader'></span>
        </div>
    );
};

export default Preloader;
