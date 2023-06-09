import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import './Login.scss';
import LogoMov from "../img/LogoMov.jpeg"
import Vaca1 from "../img/vaca1.png"
import Vaca2 from "../img/vaca2.png"
import Goo from "../img/google.png"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';




const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [signUpMode2, setSignUpMode2] = useState(false);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { loginGoogleAuth } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
    const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick2 = () => {
    setSignUpMode2(false);
  };

  const handleSignUpClick2 = () => {
    setSignUpMode2(true);
  };

    const [profile, setProfile] = useState([]);
    const [user, setUser] = useState([]);


    const loginGoogle = useGoogleLogin({
      onSuccess: (codeResponse) => { setUser(codeResponse); },
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
              try {
                loginGoogleAuth(res.data);
                navigate("/");
              } catch (err) {
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
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''} ${signUpMode2 ? 'sign-up-mode2' : ''}`}>
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <img className="logomov" src={LogoMov} alt="Ejemplo" />
          <br></br>
          <br></br>
          <h2 className="title">Iniciar Sesion</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input required
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Usuario..." />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              required
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Contraseña..." />
          </div>
          <input onClick={handleSubmit} type="submit" value="Ingresar" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" onClick={() => loginGoogle()} className="social-icon">
              <img className="goo" src={Goo} alt="Ejemplo" />
            </a>
          </div>
          <p className="account-text">
            No tienes una cuenta? <a href="#" onClick={handleSignUpClick2}>Registrate</a>
          </p>
        </form>
        <form action="" className="sign-up-form">
          <img className="logomov" src={LogoMov} alt="Ejemplo" />
          <br></br>
          <h2 className="title">Crea tu cuenta</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Usuario..." />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Correo..." />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña..." />
          </div>
          <input type="submit" value="Registrarme" className="btn" />
          <p className="social-text">O ingresa con una red social</p>
          <div className="social-media">
            <a href="#" onClick={() => loginGoogle()} className="social-icon">
              <img className="goo" src={Goo} alt="Ejemplo" />
            </a>
          </div>
          <p className="account-text">
            Ya tienes una cuenta? <a href="#" onClick={handleSignInClick2}>Iniciar sesion</a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Acaso ya tienes cuenta?</h3>
            <p>Inicia sesion con tu cuenta</p>
            <img className="vaca2" src={Vaca2} alt="Ejemplo" />
            <button className="btn" onClick={handleSignInClick}>Ingresar</button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Eres nuevo?</h3>
            <img className="vaca1" src={Vaca1} alt="Ejemplo" />
            <p>Forma parte de nuestro equipo</p>
            <button className="btn" onClick={handleSignUpClick}>Registrate</button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
};




// return (
//   <div className="auth">
//     <Link to="/">
//       <img src={Edit} alt="logo" width="350px" border="0" />
//     </Link>
//     <form>
//       <center>
//         <h1>Inicio Sesion</h1>
//       </center>
//       <center>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
//           alt="usuario"
//           width="100px"
//           border="0"
//         />
//       </center>
//       <input
//         required
//         type="text"
//         placeholder="usuario"
//         name="username"
//         onChange={handleChange}
//       />
//       <input
//         required
//         type="password"
//         placeholder="Contraseña"
//         name="password"
//         onChange={handleChange}
//       />
//       <button onClick={handleSubmit}>Iniciar Sesion</button>
//       {err && <p>{err}</p>}
//       <span>
//         No tienes una cuenta? <Link to="/register">Registrate</Link>
//       </span>
//     </form>
//         
//   </div>
// );
export default Login;
