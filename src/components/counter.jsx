import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(3)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-small m-2"
        >
          <span>Danger</span>
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
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    return (badgeClasses += this.state.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
