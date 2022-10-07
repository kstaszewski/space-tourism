import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';

function App() {
  return (
    <Routes>
      <Route element={<TopBar />}>
        <Route index element={<Home />} />
        <Route path={'/destination'} element={<Destination />} />
        <Route path={'/crew'} element={<Crew />} />
        <Route path={'/technology'} element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default App;
