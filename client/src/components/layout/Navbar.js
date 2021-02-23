import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-static-top">
        <nav className="z-depth-0">
          <div className="nav-wrapper orange">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
              
              SafePlanWeb
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
