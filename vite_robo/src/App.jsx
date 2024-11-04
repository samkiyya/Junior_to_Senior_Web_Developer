import { Component } from "react";
import CardList from "./CardList.jsx";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox.jsx";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }
  handleSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={this.handleSearchChange}
          searchfield={this.state.searchField}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
