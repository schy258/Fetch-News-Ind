import React, { Component } from 'react';
import {Link, Outlet} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg "  >
        <div className="container-fluid" style={{position:"fixed",opacity: 0.9  ,zIndex:2,backgroundColor:"black",padding:'5px',marginTop:'28px'}}>
          <Link className="navbar-brand text-warning" to=" ">FETCH NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-light"  to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light"  to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">Technology</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav></div>
    )
  }
}

<Outlet/>