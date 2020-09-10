import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';

import './styles.css';

//import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div id="bla">
      <nav className="navbar">
        <div className="title">
          {/*<img src={logo} className="title-logo" alt="Logo Doce Açucarado" />*/}
          <h1>JundRatings</h1>
        </div>
        <div className="search-bar-container">
          <input
            placeholder="Pesquisar profissional..."
            className="search-bar"
          ></input>
          <button className="search-icon">
            <MdSearch size={40} color="black" />
          </button>
        </div>

        <div className="myAccount">
          <FiUser size={45} color="black" className="userIcon" />
          <Link className="loginAccount" to="/login">
            Vitor
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
