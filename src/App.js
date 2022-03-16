import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Preloader from './components/Preloader/Preloader';
import Main from './components/Main/Main';
import Error from './components/Error';
import PeoplePage from './components/PeoplePage/PeoplePage';

function App() {
  const chapter = useLocation();
  console.log(chapter);
  return (
    <Routes>
      <Route path='/' element={<Main />}/> 
      <Route path='/people' element={<PeoplePage />} />
      <Route path='*' element={<Error />}/>
    </Routes>
  );
}

export default App;
