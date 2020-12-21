import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
