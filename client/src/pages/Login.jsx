import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Edit from "../img/logo3.png";

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { loginGoogleAuth } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);
  

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {setUser(codeResponse);},
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
            try{
              loginGoogleAuth(res.data);
              navigate("/");
            }catch (err) {
              setError(err.response.data);
            }
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );
  const logOutGoogle = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div className="auth">
      <Link to="/">
        <img src={Edit} alt="logo" width="350px" border="0" />
      </Link>
      <form>
        <center>
          <h1>Inicio Sesion</h1>
        </center>
        <center>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
            alt="usuario"
            width="100px"
            border="0"
          />
        </center>
        <input
          required
          type="text"
          placeholder="usuario"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Iniciar Sesion</button>
        <button onClick={() => loginGoogle()}>Sign in with Google 🚀 </button>
        {err && <p>{err}</p>}
        <span>
          No tienes una cuenta? <Link to="/register">Registrate</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;