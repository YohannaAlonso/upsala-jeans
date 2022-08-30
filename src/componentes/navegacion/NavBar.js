import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to='/'>
            <img src="./upsala.png" width='70'/>
            <h7>Upsala Jeans</h7>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link active" aria-current="page" to='/'>
                Inicio
              </Link>
              <Link className="nav-link" to='/Hombre'>
                Hombres
              </Link>
              <Link className="nav-link" to='/Mujer'>
                Mujeres
              </Link>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
