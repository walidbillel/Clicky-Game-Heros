import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {

  

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Link className="navbar-brand cli" to="#">
        <h1>Clicky Game</h1>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li

          >
            <Link to="#" className="nav-link">
              {props.title}
            </Link>
          </li>
          <li

          >
            <Link to="#" className="nav-link">
              Score
          </Link>
          </li>

        </ul>
      </div>
    </nav>
  )

};

export default Navbar;