import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo3.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=arte">
            <h6>Calendario</h6>
          </Link>
          <Link className="link" to="/?cat=arte">
            <h6>Calendario</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Cerrar Sesion</span>
          ) : (
            <Link className="link" to="/login">
              Inicio Sesion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
