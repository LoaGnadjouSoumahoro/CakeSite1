import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavLinks from './components/NavLinks';
import Home from './pages/Home';
import './css/app.css';
import LocalPickup from './pages/LocalPickup';
import Catering from './pages/Catering';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <div className='layout'>
      <div className='header'>
        <NavLinks />
      </div>
      <Routes className='main'>
        <Route path='/' element={<Home />} />
        <Route path='/localPickup' element={<LocalPickup />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
