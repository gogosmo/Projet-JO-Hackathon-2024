import React from 'react';
import '../styles/athlete.css';
import Card from '../components/athletes/athleteCard';

const athletes = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Michael', lastName: 'Johnson' },
  { firstName: 'Emily', lastName: 'Davis' },
  { firstName: 'Chris', lastName: 'Brown' },
  { firstName: 'Jessica', lastName: 'Wilson' },
];

function Athlete() {
  return (
    <div>
      <h1>Athlète</h1>
      <div className="athlete-cards">
        {athletes.map((athlete, index) => (
          <Card key={index} athlete={athlete} />
        ))}
      </div>
    </div>
  );
}

export default Athlete;
