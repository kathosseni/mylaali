import React from "react";
import "./Navbar.css";

import logo from "../../Assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbarSection bgPale">
      <div className="sm:px-4 sm:mx-10 px-2 mx-4 text-sm mt-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo Image" />
          </div>
          <ul className="hidden md:flex ml-14 space-x-12">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">Règles du jeu</a>
            </li>
          </ul>
          <button className="text-white py-2 px-3 border rounded-lg ctaButton">
            <a href="#" className="md:flex">
                Commander
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
