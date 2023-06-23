import React from "react";
import "../styles/Home.css"
import { FaPlus } from 'react-icons/fa';
import Prueba from "../components/DateCalendarServerRequest";

const Home = () => {

  return (
    <div className="page">
    <div className="page-left">
      <div className="dashboard">
        {/* Add your calendar component and entry option here */}
        <h2>¿Has visto algo nuevo?</h2>
        <p> <FaPlus /> Agrega una entrada</p>
      </div>
    </div>
    <div className="page-center">
      <div className="dashboard">
        {/* Add your calendar component here */}
        <h2>Calendario</h2>

        <div className="calendario">
          <Prueba />
        </div>

      </div>
    </div>
    <div className="page-right">
      <div className="sidebar">
        {/* Add movie information updates here */}
        <h2>Tus Películas</h2>
        
        <div class="movie-entry">
          <img class="movie-image" src={require("../img/coraline.jpg")} alt="Movie 1"/>
          <p class="movie-name">Coraline</p>
        </div>

        <div class="movie-entry">
          <img class="movie-image" src={require("../img/jedi.jpg")} alt="Movie 2"/>
          <p class="movie-name">Star Wars: El retorno del Jedi</p>
        </div>


      </div>
    </div>
  </div>
  )

}
export default Home