import React from "react";
import "../styles/Home.css"
import { FaPlus } from 'react-icons/fa';
import Prueba from "../components/DateCalendarServerRequest";

const Home = () => {

  return (
    <div className="page">
    
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
        <h2>Películas Trending</h2>
        
        

      </div>
    </div>
  </div>
  )

}
export default Home