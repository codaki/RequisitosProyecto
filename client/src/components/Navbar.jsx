import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FaHome, FaUser, FaPlus, FaFilm } from 'react-icons/fa';
import "../styles/NavBar.css"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const logOutGoogle = () => {
    googleLogout();
    logout();
  };
  const handleDivClick = () => {
    // Redirect to another site
    window.location.href = '/';
  };

  return (
    <div class="navbar-container">
      <nav className="navbar">
        <div className="navbar-left" onClick={handleDivClick} style={{ cursor: 'pointer' }}>
          <img src={require("../img/logo.png")} alt="Logo" />
        </div>

        <div className="navbar-right">

          <ul className="nav-items">

            <li className="items-left">

              <li className="nav-item">
                <a href="/" className="a_doble">
                  <FaHome size={25} />
                  <p>Inicio</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Peliculas" className="a_doble">
                  <FaFilm size={25} />
                  <p>Catálogo</p>
                </a>
              </li>
              <li className="nav-item">
                {currentUser ? (<li className="nav-item dropdown">
                  <a href="#" className="a_doble">
                    <FaUser size={25} className="a_icon" />
                    <p>{currentUser?.name}</p>
                  </a>

                  <div className="dropdown-content">
                    <a href="/Usuario">Perfil</a>
                    {/* <a href="#">Settings</a> */}
                    <button onClick={logOutGoogle}>Log out</button>
                  </div>
                </li>
                ) : (
                  <>
                    <a href="/Login" className="a_doble">
                      <FaUser size={25} className="a_icon" />
                      <p>Iniciar Sesión</p>
                    </a>
                  </>
                )}
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;




