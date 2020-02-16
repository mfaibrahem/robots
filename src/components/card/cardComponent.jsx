import React from 'react';

import './card.scss';

const Card = ({ monster }) => {
  return (
    <div className={`card ${monster.isHovered ? 'is-hovered' : ''}`}>
      <img
        src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}
        alt="img"
      />
      <h4 className="title">{monster.name}</h4>
      <p className="email">{monster.email}</p>
    </div>
  );
};

export default Card;
