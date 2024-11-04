import { Component } from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import "./App.css";
import Scroll from "./Scroll.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ robots: users }));
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
        {this.state.robots.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        )}
      </div>
    );
  }
}
export default App;
