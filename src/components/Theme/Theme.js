import React from "react";
import './theme.css';
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {blackTheme, whiteTheme} from '../../redux/actions';

const Theme = (props) => {
  const dispatch = useDispatch();
  const isBlack = useSelector(state => state.isBlackTheme);
  
  const themeHandler = () => {
  if(!isBlack) {
    dispatch(blackTheme());
  } else {
    dispatch(whiteTheme());
  };
  };
  
  return (
    <div className={isBlack ? 'Black' : 'White'}>
      <div className="body">
        <div className="navPanel">
          <Navigation />
          <button 
            onClick={themeHandler}
            className='btn'  
          >
            {isBlack ? 'Night' : 'Day'}
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Theme;
