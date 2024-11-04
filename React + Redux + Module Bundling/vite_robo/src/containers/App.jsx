import { Component } from "react";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "./App.css";

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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={this.handleSearchChange}
          searchfield={searchField}
        />
        {!robots.length ? (
          <h1>Loading...</h1>
        ) : (
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        )}
      </div>
    );
  }
}
export default App;
