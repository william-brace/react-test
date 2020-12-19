import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-small m-2"
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
}

export default Counter;
