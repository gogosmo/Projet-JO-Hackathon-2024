import React from 'react';
import '../styles/team.css';
import TeamCard from '../components/team/teamCard';

function Team() {
  return (
    <div>
      <div className='rectangleStyle'>
        <h2 className='titleTeam'>Infos</h2>
        <p className='textTeam'>Ce site est un projet IPSSI<br/>Nous sommes une équipe composé de 8 éleves en Master IA et BigData</p>
      </div>
      <h2 className='titleTeam'>L'équipe</h2>
      <div className='containerCard'>
        <div className="cardTeam">
          <TeamCard
            name="Bruno SA E SILVA"
            master="M1"
            description="Data visualization / Création de la BDD"
          />
          <TeamCard
            name="David CARNEIRO"
            master="M1"
            description="Développement du front"
          />
          <TeamCard
            name="Farah GARGABOU"
            master="M2"
            description="Data visualization"
          />
          <TeamCard
            name="Jugurtha"
            master="M1"
            description="Chef de projet / "
          />
          <TeamCard
            name="Lylia FAREZ"
            master="M1"
            description="Création du modèle IA"
          />
          <TeamCard
            name="Simon DANIEL"
            master="M2"
            description="Création du modèle IA"
          />
          <TeamCard
            name="Youssef AZARRAF"
            master="M2"
            description="Développement du backend"
          />
          <TeamCard
            name="Nicolas DESFORGES"
            master="M1"
            description="Développement du front"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
