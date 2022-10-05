import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route element={<TopBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
