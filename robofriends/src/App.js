import React from 'react';

import './App.css';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/searchbox/searchbox.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  fetchUrl = async url => {
    const res = await fetch(url);
    const users = await res.json();
    return users;
  }

  onSearchChange = (event) => {
    const searchField = event.target.value;
    this.setState({ searchField })
  }

  componentDidMount() {
    this.fetchUrl('https://jsonplaceholder.typicode.com/users').then(robots => this.setState({ robots }));
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1 className="title">ROBOFRIENDS</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
