import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './views/Home';
import Analyse from './views/Analyse'
import Prediction from './views/Prediction'
import Athlete from './views/Athlete'
import Liens from './views/Liens';
import Teams from './views/Teams';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

const CustomCrossIcon = () => {
  return (
    <div className="custom-cross-icon">
      <span className="cross-line cross-line-1"></span>
      <span className="cross-line cross-line-2"></span>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className='Appweb'>
      <Router>
        <div className='headerSection'>
          <nav className='navbar'>
            <ul>
              <li><NavLink exact to="/" activeClassName="active-link">Accueil</NavLink></li>
              <li><NavLink to="/quelque-chiffres" activeClassName="active-link">Quelques chiffres</NavLink></li>
              <li><NavLink to="/prediction-gagnant" activeClassName="active-link">Prédire les résultats</NavLink></li>
            </ul>
          </nav>
          <img className="logo" src="/images/logoparis2024.png" alt='logo paris 2024'/>
          <nav className='navbar'>
            <ul>
              <li><NavLink to="/athlete" activeClassName="active-link">Athlète</NavLink></li>
              <li><NavLink to="/a-propos" activeClassName="active-link">Notre équipe</NavLink></li>
              <li><NavLink to="/liens-utiles" activeClassName="active-link">Liens utiles</NavLink></li>
            </ul>
          </nav>
          <Menu
            isOpen={isMenuOpen}
            onStateChange={(state) => setIsMenuOpen(state.isOpen)}
            customCrossIcon={<CustomCrossIcon />}
          >
            <ul>
              <li><NavLink exact to="/" activeClassName="active-link">Accueil</NavLink></li>
              <li><NavLink to="/quelque-chiffres" activeClassName="active-link">Quelques chiffres</NavLink></li>
              <li><NavLink to="/prediction-gagnant" activeClassName="active-link">Prédire les résultats</NavLink></li>
              <li><NavLink to="/athlete" activeClassName="active-link">Athlète</NavLink></li>
              <li><NavLink to="/a-propos" activeClassName="active-link">Notre équipe</NavLink></li>
              <li><NavLink to="/liens-utiles" activeClassName="active-link">Liens utiles</NavLink></li>
            </ul>
          </Menu>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quelque-chiffres" element={<Analyse />} />
            <Route path="/prediction-gagnant" element={<Prediction />} />
            <Route path="/athlete" element={<Athlete />} />
            <Route path="/a-propos" element={<Teams />} />
            <Route path="/liens-utiles" element={<Liens />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
