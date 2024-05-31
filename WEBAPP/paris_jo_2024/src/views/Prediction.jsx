import React, { useState, useEffect } from 'react';
import '../styles/prediction.css';
import axios from 'axios';

function Prediction() {
  const [athletes, setAthletes] = useState([]);
  const [selectedAthlete, setSelectedAthlete] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/athletes')
      .then(response => {
        console.log('Chargement des données des athlètes :', response.data);
        setAthletes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the athletes!', error);
      });
  }, []);

  const handlePredict = () => {
    if (!selectedAthlete) {
      alert('Veuillez sélectionner un athlète');
      return;
    }
    axios.post('http://127.0.0.1:5000/predict', selectedAthlete, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Résultat de prédiction :', response.data);
    setPredictionResult(response.data);
  })
  .catch(error => {
    console.error('There was an error predicting!', error.message);
  });
  };

  return (
    <div>
      <h1>Predire les résultats des JO 2024</h1>
      <select value={selectedAthlete} onChange={(e) => setSelectedAthlete(e.target.value)}>
        <option value="">Sélectionnez un athlète</option>
        {athletes.map((athlete, index) => (
          <option key={index} value={JSON.stringify(athlete)}>{athlete.athlete_full_name}</option>
        ))}
      </select>
      <button onClick={handlePredict}>Prédire</button>
      {predictionResult && (
        <div>
          <h2>Résultat de prédiction</h2>
          <pre>{JSON.stringify(predictionResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Prediction;