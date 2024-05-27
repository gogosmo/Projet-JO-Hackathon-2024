import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Liens from './components/Liens';
import Info from './components/Info';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className='Appweb'>
      <Router>
        <div className='headerSection'>
          <nav className='navbar'>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/analyse-des-donnees">Analyse des données</Link></li>
              <li><Link to="/prediction-gagnant">Prédiction / Gagnant</Link></li>
            </ul>
          </nav>
          <img className="logo" src="/images/logoparis2024.png" alt='logo paris 2024'/>
          <nav className='navbar'>
            <ul>
              <li><Link to="/a-propos">A propos</Link></li>
              <li><Link to="/liens-utiles">Liens utiles</Link></li>
            </ul>
          </nav>
          <Menu isOpen={isMenuOpen} onStateChange={(state) => setIsMenuOpen(state.isOpen)}>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/analyse-des-donnees">Analyse des données</Link></li>
              <li><Link to="/prediction-gagnant">Prédiction / Gagnant</Link></li>
              <li><Link to="/a-propos">A propos</Link></li>
              <li><Link to="/liens-utiles">Liens utiles</Link></li>
            </ul>
          </Menu>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Info />} />
            <Route path="/liens-utiles" element={<Liens />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
