import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props; // Object destructuring
    return (
      <div>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
        </div>
        {counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
