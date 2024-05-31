import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ athlete }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
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
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{athlete.athlete_full_name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <p>{athlete.bio}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
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