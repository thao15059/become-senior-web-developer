import React, { useState, useEffect } from "react";

import "./App.css";

import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/searchbox/searchbox.component";
import ErrorBoundary from "./component/error-boundary";

function App() {
  const [searchField, setSearchField] = useState("");
  let [robots, setRobots] = useState([]);

  useEffect(() => {
    fetchUrl("https://jsonplaceholder.typicode.com/users").then((robots) =>
      setRobots(robots)
    );
  }, [robots]);

  const fetchUrl = async (url) => {
    const res = await fetch(url);
    const users = await res.json();
    return users;
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">ROBOFRIENDS</h1>
      <ErrorBoundary>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
