import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// using bootstrap to render a simple navbar.
class NavBar extends Component {
  render() {
    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
            MovieLand
          </Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
