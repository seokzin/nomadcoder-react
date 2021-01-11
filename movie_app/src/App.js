import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello");
  }
  
  state = { // 바꾸고 싶은 data를 넣는다.
    count: 0
  };
  
  add = () => { // current = this.state 의미
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("good bye");
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
