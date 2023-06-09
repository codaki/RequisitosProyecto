import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FaHome, FaUser, FaPlus } from 'react-icons/fa';
import "../styles/NavBar.css"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const logOutGoogle = () => {
    googleLogout();
    logout();
  };

  return (
    <div class="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={require("../img/logo.png")} alt="Logo" />
        </div>

        <div className="navbar-center"></div>
        <div className="navbar-right">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="/">
                <FaHome />
              </a>
            </li>
            <li className="nav-item">
              <a href="/create-entry">
                <FaPlus />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#">
                {currentUser ? (
                  <div>
                    <img src={currentUser?.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {currentUser?.name}</p>
                    <p>Email Address: {currentUser?.email}</p>
                    <br />
                    <br />
                  </div>
                ) : (
                  <>
                    <Link className="link" to="/login">
                      Inicio Sesion
                    </Link>
                  </>
                )}
              </a>
              <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <button onClick={logOutGoogle}>Log out</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;




