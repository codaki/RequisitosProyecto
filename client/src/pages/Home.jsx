import React from "react";
import "../styles/Home.css"
import { FaPlus } from 'react-icons/fa';
import Prueba from "../components/DateCalendarServerRequest";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {


  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b5a699c46770633c9f806dd3d4c4af86";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";



  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState(localStorage.getItem('searchKey') || '');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Peliculas" });
  const [generoUser, setGeneroUser]= useState([]);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  const fetchCategorias = async () => {
    try{
      const categorias = await axios.get(`/legacy/genre`);
    //console.log(categorias.data);
    setSearchKey(categorias.data[0].genero_nombre);
    console.log(generoUser);
    //const concatenatedStrings = generoUser.map(item => item.genero_nombre).join(' ');
    // setSearchKey(generoUser[0].genero_nombre);
    // console.log(searchKey)
    }
    catch(err){
      console.log(err);
    }
    
  };

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    const limitedResults = results.slice(0, 8); // Retrieve only the first 8 results
    setMovies(limitedResults);
    setMovie(results[0]);
    // if (results.length) {
    //   await fetchMovie(results[0].id);
    // }
  };

  const fetchMovies1 = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    const limitedResults = results.slice(0, 8); // Retrieve only the first 8 results
    setMovies(limitedResults);
    setMovie(results[0]);
    // if (results.length) {
    //   await fetchMovie(results[0].id);
    // }
  };

  const enviarCatalgo = async()=>{
    navigate("/Peliculas") 
  }
  useEffect(() => {
    localStorage.setItem('searchKey', searchKey); 
    fetchCategorias();
    fetchMovies(searchKey);
    
  }, [searchKey]);

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
        {searchKey? (
        <center>
          <h2>Recomendaciones para ti</h2>
        </center>
      ) : (
        <center>
          <h2>Peliculas Populares</h2>
        </center>
      )}
        <div className="asdfasdf"> 
        {movies.map((movie) => (
          <div key={movie.id} >
            <img src={`${URL_IMAGE + movie.poster_path}`}onClick={() => enviarCatalgo()} />
            <h4 className="text-center">{movie.title}</h4>
          </div>
        ))}
      </div>
        

      </div>
    </div>
  </div>
  )

}
export default Home