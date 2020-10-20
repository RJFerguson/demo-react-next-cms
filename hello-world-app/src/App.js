import React, { useEffect } from "react";
import "halfmoon/css/halfmoon-variables.min.css";
import * as halfmoon from "halfmoon";

export default function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <div className="page-wrapper with-navbar">
      <div className="sticky-alerts"></div>
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
          <li className="nav-item">
            <div href="#" className="nav-link">
              Docs
            </div>
          </li>
          <li className="nav-item">
            <div href="#" className="nav-link">
              Questions
            </div>
          </li>
          <li className="nav-item">
            <div href="#" className="nav-link">
              Sign In
            </div>
          </li>
          <li className="nav-item">
            <div href="#" className="nav-link">
              Register
            </div>
          </li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <div className="container-md">
          <ul></ul>

          <div className="card">
            <h2 className="card-title">Card title</h2>
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
