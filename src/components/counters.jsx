import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters - Constructed");
  }

  componentDidMount() {
    console.log("Counters - Mounted");
  }

  componentDidUpdate() {
    console.log("Counters - Updated");
  }



  render() {
    console.log("Counters - Rendered");
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <React.Fragment>
        <button className="btn-sm btn-danger m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
