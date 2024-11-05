import React from "react";


function Navbar() {
    return (<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
        <div className="container p-0">
          <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-light">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              <a className="nav-link text-light" href="#">About</a>
              <a className="nav-link text-light" href="#">Services</a>
              <a className="nav-link text-light" href="#">Contact</a>
            </div>
            </div>
          </div>
        </div>
      </nav>)
}

export default Navbar;