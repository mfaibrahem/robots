import React from 'react';
import Card from '../card/cardComponent';

import './card-list.scss';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} className="card" monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
