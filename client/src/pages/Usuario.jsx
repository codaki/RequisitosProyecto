import React, { useContext, useState, useEffect } from "react";
import "../styles/Home.css"
import { AuthContext } from "../context/authContext";
import { FaPlus } from 'react-icons/fa';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Usuario = () => {
    const { currentUser, logout } = useContext(AuthContext);

    const logOutGoogle = () => {
        googleLogout();
        logout();
    };
    return (
        <div className="page">
            <div className="usuario">
                <div className="usuarioImagen">
                    <img src={currentUser?.picture} alt="user image" />
                </div>
                <div className="usuarioInfo">
                    <p>Usuario: {currentUser?.name}</p>
                    <p>Dirección de Correo: {currentUser?.email}</p>
                </div>
            </div>
        </div>
    )
}
export default Usuario