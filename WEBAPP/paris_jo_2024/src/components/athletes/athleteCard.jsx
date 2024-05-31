import React, { useState } from 'react';
import axios from 'axios';

function Card({ athlete }) {
  const [showModal, setShowModal] = useState(false);
  const [athleteImage, setAthleteImage] = useState(null);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');

    // Envoie de la requête POST avec athlete_bio_url
    axios.post('/get_athlete_image', { athlete_bio_url: athlete.athlete_bio_url })
      .then(response => {
        setAthleteImage(response.data.image_url);
      })
      .catch(error => {
        console.error('Error fetching athlete image:', error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open'); 
  };

  return (
    <div className="cardAthlete card h-100">
      <div className="card-body">
        <h5 className="card-title">{athlete.athlete_full_name}</h5>
        <h6 className="card-subtitle mb-2 ">{athlete.athlete_age} ans</h6>
        <h6 className="card-subtitle mb-2 ">{athlete.country_name ? athlete.country_name : "Inconnu"}</h6>       
        <p className="card-text">1° participation : {athlete.first_game}</p>
        <p className="card-text">Nb médaille : {athlete.total_medals}</p>
        <p className="card-text">Nb médaille OR : {athlete.total_gold}</p>
        <p className="card-text">Nb médaille Silver : {athlete.total_silver}</p>
        <p className="card-text">Nb médaille Bronze : {athlete.total_bronze}</p>
        <div className='text-center'>
          <button type="button" className="lienAthlete boutonBio" onClick={openModal}>
            Bio
          </button> 
        </div>
             
      </div>
      
      {showModal && (
        <>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content modalBio">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{athlete.athlete_full_name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                  
                </div>
                <div className='text-center'>
                  <a href={athlete.athlete_url}><p className="modal-title" id="exampleModalLabel">Voir le profil</p></a>
                </div>
                <div className="modal-body">

                  {athleteImage && <img src={athleteImage} alt="Athlete" />}
                  <p>{athlete.bio}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
