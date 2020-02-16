import React from 'react';

import './search-input.scss';

const SearchInput = ({ onInputChange, searchValue, onPressKey }) => {
  return (
    <input
      className="serach-input"
      type="text"
      value={searchValue}
      placeholder="filter monsters ..."
      onChange={e => onInputChange(e)}
      onKeyDown={e => onPressKey(e)}
    />
  );
};

export default SearchInput;
