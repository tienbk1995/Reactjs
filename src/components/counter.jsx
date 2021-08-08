import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  // Remember to cast attribute usage from parent to constructor if you want to use 'this' attribute in derived class (eg: props)
  // There are 2 way to bind method:
  // 1. Using 'bind' method of function in the constructor
  // 2. Using Arrow function
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", this.props.counter.value);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // Object destructuring
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
