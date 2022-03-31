import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Error from './components/Error';
import Theme from './components/Theme/Theme';
import PeoplePage from './components/PeoplePage';
import FilmsPage from './components/FilmsPage';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <Theme>
      <Routes>
        <Route path='/' element={<Main />}/> 
        <Route path='/films' element={<FilmsPage />} />
        <Route path='/people' element={<PeoplePage />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Theme>
  );
}

export default App;
