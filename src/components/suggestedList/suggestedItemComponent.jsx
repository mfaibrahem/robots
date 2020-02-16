import React from 'react';

const SuggestedItem = ({ suggestedItem, onHovered, onLeaved }) => {
  return (
    <>
      <li
        className="suggested-item"
        onMouseOver={() => onHovered(suggestedItem)}
        onMouseOut={() => onLeaved(suggestedItem)}
      >
        <span>{suggestedItem.name}</span>
      </li>
    </>
  );
};

export default SuggestedItem;
