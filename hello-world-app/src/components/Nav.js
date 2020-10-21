import React from "react";
import * as halfmoon from "halfmoon";
const Nav = (props) => {
  return (
    <nav className="navbar">
      <span className="navbar-text text-monospace">v1.0</span>
      <button
        className="btn btn-action ml-10"
        type="button"
        onClick={() => halfmoon.toggleDarkMode()}
        aria-label="Toggle dark mode"
      >
        <i className="fa fa-adjust" aria-hidden="true"></i>
      </button>
      <ul className="navbar-nav d-none d-md-flex ml-auto">
        {props.titlesToRender.map((title) => (
          <li className="nav-item" key={title}>
            <div href="#" className="nav-link">
              {title}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
