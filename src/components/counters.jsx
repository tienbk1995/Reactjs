import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters, onRestore, onRestart } =
      this.props; // Object destructuring
    return (
      <div>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          <button onClick={onRestore} className="btn btn-info btn-sm m-2">
            Restore
          </button>
          <button onClick={onRestart} className="btn btn-success btn-sm m-2">
            Restart
          </button>
        </div>
        {counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDelete={onDelete}
              onRestore={onRestore}
              onRestart={onRestart}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
