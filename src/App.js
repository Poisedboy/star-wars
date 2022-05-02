import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import PeoplePage from './components/PeoplePage';
import FilmsPage from './components/FilmsPage';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <div className='body'>
        <Routes>
          <Route path='/star-wars/' element={<Main />}/> 
          <Route path='/star-wars/films' element={<FilmsPage />} />
          <Route path='/star-wars/people' element={<PeoplePage />} />
          <Route path='/star-wars/planets' element={<Planets />} />
          <Route path='/star-wars/starships' element={<Starships />} />
          <Route path='/star-wars/vehicles' element={<Vehicles />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
