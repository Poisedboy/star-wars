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
        <Route path='/star-wars/' element={<Main />}/> 
        <Route path='/star-wars/films' element={<FilmsPage />} />
        <Route path='/star-wars/people' element={<PeoplePage />} />
        <Route path='/star-wars/planets' element={<Planets />} />
        <Route path='/star-wars/starships' element={<Starships />} />
        <Route path='/star-wars/vehicles' element={<Vehicles />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Theme>
  );
}

export default App;
