import React from 'react';
import '../styles/team.css';
import TeamCard from '../components/team/teamCard';

function Team() {
  return (
    <div>
      <div className='container_team'>
        <img className="img_team" src="/images/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg" alt="Image d'une équipe" />
        <div className='circleStyle' />
        <div className='rectangleStyle'>
          <h2 className='titleTeam'>Titre</h2>
          <p className='textTeam'>blabla</p>
        </div>
      </div>

      <h2 className='titleTeam'>L'équipe</h2>
      <div className='containerCard'>
        <div className="cardTeam">
          <TeamCard
            name="Card 1"
            age="24 ans"
            master="M1"
            description="This is the first card."
          />
          <TeamCard
            name="Card 2"
            age="24 ans"
            master="M1"
            description="This is the second card."
          />
          <TeamCard
            name="Card 3"
            age="24 ans"
            master="M1"
            description="This is the third card."
          />
          <TeamCard
            name="Card 4"
            age="24 ans"
            master="M1"
            description="This is the fourth card."
          />
          <TeamCard
            name="Card 5"
            age="24 ans"
            master="M1"
            description="This is the fifth card."
          />
          <TeamCard
            name="Card 6"
            age="24 ans"
            master="M1"
            description="This is the sixth card."
          />
          <TeamCard
            name="Card 7"
            age="24 ans"
            master="M1"
            description="This is the seventh card."
          />
          <TeamCard
            name="Nicolas DESFORGES"
            age="24 ans"
            master="M1"
            description="Développement du front"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
