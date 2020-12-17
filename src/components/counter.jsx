import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(3)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.length === 0 && "Please Add a Tag"}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    return (badgeClasses += this.state.count === 0 ? "warning" : "primary");
  }
}

export default Counter;
