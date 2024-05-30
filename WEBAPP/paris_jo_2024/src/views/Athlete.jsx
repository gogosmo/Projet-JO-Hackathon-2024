import React, { useState, useEffect } from 'react';
import '../styles/athlete.css';
import Card from '../components/athletes/athleteCard';
import axios from 'axios';

function Athlete() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allAthletes, setAllAthletes] = useState([]);
  const [filteredAthletes, setFilteredAthletes] = useState([]);
  const [displayedAthletes, setDisplayedAthletes] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(20);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/athletes')
      .then(response => {
        console.log('Chargement des données des athlètes :', response.data);
        setAllAthletes(response.data);
        setFilteredAthletes(response.data.slice(0, displayedCount)); 
      })
      .catch(error => {
        console.error('There was an error fetching the athletes!', error);
      });
  }, [displayedCount]); 

  useEffect(() => {
    const filtered = allAthletes.filter((athlete) =>
      athlete.athlete_full_name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, displayedCount);

    setFilteredAthletes(filtered);
  }, [searchTerm, displayedCount, allAthletes]);

  useEffect(() => {
    setDisplayedAthletes(filteredAthletes);
  }, [filteredAthletes]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setDisplayedCount(20); 
  };

  const handleLoadMore = () => {
    setDisplayedCount(displayedCount + 20); 
  };

  return (
    <div className="container">
      <h1 className="titrePageAthlete mt-4 mb-4">Athlètes</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Rechercher un athlète"
        value={searchTerm}
        onChange={handleSearch}
      />
      <hr />
      <p>{allAthletes.length} athlète{displayedAthletes.length !== 1 ? 's' : ''} trouvé{displayedAthletes.length !== 1 ? 's' : ''}</p>

      {displayedAthletes.length > 0 && (
        <div className="result-count">
          <p>{displayedAthletes.length} résultat{displayedAthletes.length !== 1 ? 's' : ''} affiché{displayedAthletes.length !== 1 ? 's' : ''}</p>
        </div>
      )}
      <div className="row">
        {displayedAthletes.map((athlete, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <Card athlete={athlete} />
          </div>
        ))}
      </div>
      {displayedAthletes.length === 0 && searchTerm.length > 0 && (
        <div className="text-center">
          <p>Aucun résultat trouvé.</p>
        </div>
      )}
      {displayedAthletes.length >= displayedCount && (
        <div className="text-center">
          <button className="btn btn-primary mt-4" onClick={handleLoadMore}>Charger plus d'athlètes</button>
        </div>
      )}
    </div>
  );
}

export default Athlete;
