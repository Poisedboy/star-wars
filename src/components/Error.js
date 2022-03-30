import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
    const text = useSelector(state => state.errorMessage);
    console.log(text);
    return (
        <h1>{text}</h1>
    );
};

export default Error;
