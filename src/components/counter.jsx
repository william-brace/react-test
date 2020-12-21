import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.disableDecrement()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            <span>Delete</span>
          </button>
          {/* <ul>
          {this.state.tags.length === 0 && "Please Add a Tag"}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    return (badgeClasses +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }

  disableDecrement() {
    const { value } = this.props.counter;

    return value <= 0 ? "disabled" : false;
  }
}

export default Counter;
