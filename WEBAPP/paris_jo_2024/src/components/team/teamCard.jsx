import React from 'react';
import { Card } from 'react-bootstrap';

const TeamCard = ({ name, description, age, master }) => {
  return (
    <Card className='teamCard' style={{ width: '18rem' }}>
      <Card.Body className='teamCardBody'>
        <Card.Title className='titleCardTeam'>{name}</Card.Title>
        {age && <Card.Text className='textCardTeam'><strong className="strongCardTeam">Age: </strong>{age}</Card.Text>}
        {master && <Card.Text className='textCardTeam'><strong className="strongCardTeam">Année de master: </strong>{master}</Card.Text>}
        <Card.Text className='textCardTeam'><strong className="strongCardTeam">Mission: </strong>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
