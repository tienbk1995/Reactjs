import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.originalCounters = [...this.state.counters];
    this.counterDeleted = [];
  }

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    // Because each element in the copied array is object(reference) so when you try to dereference this, it still have change into the original array => that why you need to clone the object then.
    // The 'setState()' method will re-render the 'counters' while there's any change has been made so we need to declare the local 'counters' as the same name with global 'counters' => this is feature or bug?
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    const objectDeleted = this.state.counters.find((c) => c.id === counterId);
    this.setState({ counters });
    this.counterDeleted.push(objectDeleted);
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      return { id: counter.id, value: 0 };
    });
    this.setState({ counters });
  };

  handleRestore = () => {
    if (this.counterDeleted.length > 0) {
      this.state.counters.push(this.counterDeleted.shift());
      const counters = [...this.state.counters];
      this.setState({ counters });
    } else {
      throw "Number of Button is limited";
    }
  };

  handleRestart = () => {
    const counters = [...this.originalCounters];
    this.counterDeleted = [];
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onRestore={this.handleRestore}
            onRestart={this.handleRestart}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
