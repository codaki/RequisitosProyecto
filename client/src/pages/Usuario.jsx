import React, { useContext, useState, useEffect } from "react";
import "../styles/Home.css"
import { AuthContext } from "../context/authContext";
import "../styles/Usuario.css"
import { FaHome, FaUser, FaPlus, FaFilm } from 'react-icons/fa';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Usuario = () => {
    const { currentUser, logout } = useContext(AuthContext);

    const logOutGoogle = () => {
        googleLogout();
        logout();
    };
    return (
        <div className="paginaUsuario gridcentrado">
            <div className="usuario gridcentrado">
                <div className="usuarioImagen">
                    <img src={currentUser?.picture} alt="user image" />
                </div>
                <div className="usuarioInfo">
                    <h1>{currentUser?.name}</h1>
                    <p>{currentUser?.email}</p>
                </div>
                {/* <div className="cambiarfoto">
                    <button>Cambiar foto</button>
                </div> */}
            </div>
        </div>
    )
}
export default Usuario

