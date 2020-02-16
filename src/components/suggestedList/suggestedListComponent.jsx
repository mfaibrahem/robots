import React from 'react';

import SuggestedItem from './suggestedItemComponent';
import './suggested-list.scss';

const SuggestedList = ({ suggestedList, pubbleOnHovered, pubbleOnLeaved }) => {
  return (
    <>
      <ul className="suggested-list-ul">
        {suggestedList.map(item => (
          <SuggestedItem
            key={item.id}
            suggestedItem={item}
            onHovered={pubbleOnHovered}
            onLeaved={pubbleOnLeaved}
          />
        ))}
      </ul>
    </>
  );
};

export default SuggestedList;
