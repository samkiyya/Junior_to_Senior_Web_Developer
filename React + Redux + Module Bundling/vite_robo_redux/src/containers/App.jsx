import { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "./App.css";
import { setSearchField, requestRobots } from "../actions.js";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //    searchField: "",
  //   };
  // }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    console.log("Search Field:", searchField); // Debugging line

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        {isPending ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
