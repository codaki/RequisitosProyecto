import React from "react";
import "../styles/Home.css"
import { FaPlus } from 'react-icons/fa';

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
        <h2>Calendar</h2>

        <div class="calendar-container">
          <h2 class="calendar-title">Junio 2023</h2>
          <div class="calendar-grid">
            <div class="calendar-cell">1</div>
            <div class="calendar-cell">2</div>
            <div class="calendar-cell">3</div>
            <div class="calendar-cell">4</div>
            <div class="calendar-cell">5</div>
            <div class="calendar-cell">6</div>
            <div class="calendar-cell">7</div>
            <div class="calendar-cell">8</div>
            <div class="calendar-cell">9</div>
            <div class="calendar-cell">10</div>
            <div class="calendar-cell">11</div>
            <div class="calendar-cell">12</div>
            <div class="calendar-cell">13</div>
            <div class="calendar-cell">14</div>
            <div class="calendar-cell">15</div>
            <div class="calendar-cell">16</div>
            <div class="calendar-cell">17</div>
            <div class="calendar-cell">18</div>
            <div class="calendar-cell">19</div>
            <div class="calendar-cell">20</div>
            <div class="calendar-cell">21</div>
            <div class="calendar-cell">22</div>
            <div class="calendar-cell">23</div>
            <div class="calendar-cell">24</div>
            <div class="calendar-cell">25</div>
            <div class="calendar-cell">26</div>
            <div class="calendar-cell">27</div>
            <div class="calendar-cell">28</div>
            <div class="calendar-cell">29</div>
            <div class="calendar-cell">30</div>
          </div>
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