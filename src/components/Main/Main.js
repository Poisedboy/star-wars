import { useDispatch, useSelector } from 'react-redux';
import './main.css';
import Navigation from '../Navigation/Navigation';
import PeoplePage from '../PeoplePage/PeoplePage';
import {blackTheme, whiteTheme} from '../../redux/actions';

function Main() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.isBlackTheme);
  
  const themeHandler = () => {
    if(!theme) {
      dispatch(blackTheme());
    } else if(theme) {
      dispatch(whiteTheme())
    };
  };

  return (
    <div className={theme ? 'Black' : 'White'}>
      <div className='App'>
        <button onClick={themeHandler}>Black Theme</button>
      </div>
      <Navigation />
      <h1>Hello World</h1>
      <PeoplePage />
    </div>      
  );
}

export default Main;