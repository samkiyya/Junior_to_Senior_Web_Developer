//use tachyons css
function App(props) {
  return (
    <>
      <h1 className="f1 tc">{props.greeting}</h1>
    </>
  );
}
export default App;

// // import React from "react"; and use React.Component with the old class instead of function App() {}
// import React from "react";
// class App extends React.Component {
//   render() {
//     return <h1>{this.props.greeting}</h1>;
//   }
// }
// export default App;

// distructuring the React object and using the Component property directly.
// import { Component } from "react";
// class App extends Component {
//   render() {
//     return <h1>{this.props.greeting}</h1>;
//   }
// }
// export default App;
