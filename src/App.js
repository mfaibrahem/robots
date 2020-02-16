import React, { Component } from 'react';
import CardList from './components/cardList/cardListComponent';
import SearchInput from './components/searchInput/searchInputComponent';
import SuggestedList from './components/suggestedList/suggestedListComponent';

import './App.scss';

class App extends Component {
  state = {
    monsters: [],
    searchValue: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleInputChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handlePubbleOnHovered = hoveredItem => {
    let hoveredItems = [...this.state.monsters];
    let index = hoveredItems.findIndex(item => item.id === hoveredItem.id);
    hoveredItems[index] = { ...hoveredItems[index] };
    hoveredItems[index].isHovered = true;
    this.setState({
      monsters: hoveredItems
    });
  };

  handlePubbleOnLeaved = leavedItem => {
    let leavedItems = [...this.state.monsters];
    let index = leavedItems.findIndex(item => item.id === leavedItem.id);
    leavedItems[index] = { ...leavedItems[index] };
    leavedItems[index].isHovered = false;
    this.setState({
      monsters: leavedItems
    });
  };

  handleOnPressKey = key => {
    if (key.keyCode === 27) {
      let monsters = [...this.state.monsters];
      monsters = monsters.map(monster => ({ ...monster }));
      for (let m of monsters) m.isHovered = false;
      this.setState({
        monsters,
        searchValue: ''
      });
    }
  };

  render() {
    const { monsters, searchValue } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <>
        <div className="monsters-container">
          <div className="search-suggestedResult">
            <SearchInput
              onInputChange={this.handleInputChange}
              onPressKey={this.handleOnPressKey}
              searchValue={this.state.searchValue}
            />
            {searchValue && typeof searchValue === 'string' && (
              <SuggestedList
                suggestedList={filteredMonsters}
                searchValue={searchValue}
                pubbleOnHovered={this.handlePubbleOnHovered}
                pubbleOnLeaved={this.handlePubbleOnLeaved}
              />
            )}
          </div>
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
