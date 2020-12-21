import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a href="#" className="navbar-brand">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
