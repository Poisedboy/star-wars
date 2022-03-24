import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Error from './components/Error';
import PeoplePage from './components/PeoplePage/PeoplePage';
import {blackTheme, whiteTheme} from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
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
      <div className='navPanel'>
        <Navigation />
        <div className='btn'>
          <button onClick={themeHandler}>{theme ? 'White' : 'Black'}</button>
        </div>
      </div>
      
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />}/> 
          <Route path='/people' element={<PeoplePage />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
