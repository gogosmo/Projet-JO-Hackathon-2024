// src/components/views/Liens.jsx
import React from 'react';
// import '../styles/liens.css';

function Liens() {
  return (
    <div className="liens-container">
      <h1>Liens du projet</h1>
      
      <div className="link-section">
        <h3>Github :</h3>
        <a href="https://github.com/gogosmo/Projet-JO-Hackathon-2024" target="_blank" rel="noopener noreferrer">
          https://github.com/gogosmo/Projet-JO-Hackathon-2024
        </a>
        <p>Accédez au dépôt Github pour voir le code source du projet, les contributions et les discussions.</p>
      </div>
      
      <div className="link-section">
        <h3>Trello :</h3>
        <a href="https://trello.com/b/p6WTk16j/hackathon-jo-2024" target="_blank" rel="noopener noreferrer">
          https://trello.com/b/p6WTk16j/hackathon-jo-2024
        </a>
        <p>Consultez notre tableau Trello pour suivre les tâches, le progrès et les échéances du projet.</p>
      </div>
      
      <div className="link-section">
        <h3>Documentation :</h3>
        <a href="https://docs.project.com" target="_blank" rel="noopener noreferrer">
          https://docs.project.com
        </a>
        <p>Lire la documentation du projet pour comprendre les fonctionnalités et l'architecture.</p>
      </div>
      
      <div className="contact-section">
        <h3>Contact :</h3>
        <p>Pour toute question ou suggestion, contactez-nous à <a href="mailto:contact@project.com">contact@project.com</a>.</p>
      </div>
    </div>
  );
}

export default Liens;
