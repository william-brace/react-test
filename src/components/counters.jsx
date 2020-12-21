import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn-sm btn-danger m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
