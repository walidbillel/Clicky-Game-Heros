import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {

  // console.log(props)

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand cli" to="#">
        <h1>Heros Clicky Game</h1>
      </Link>

      <div>
        <ul className="navbar-nav">
          <li

          >
            <Link to="#" className="nav-link">
              {props.message}
            </Link>
          </li>

          <li

          >
            <Link to="#" className="nav-link">
              Current Score: {props.currentScore}
            </Link>
          </li>
          <li

          >
            <Link to="#" className="nav-link">
              Top Score: {props.topScore}
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )

};

export default Navbar;