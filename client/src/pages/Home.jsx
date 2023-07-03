import React from "react";
import "../styles/Home.css"
import { FaPlus } from 'react-icons/fa';
import Prueba from "../components/DateCalendarServerRequest";
import { useContext,useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {


  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b5a699c46770633c9f806dd3d4c4af86";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";



  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [searchKey, setSearchKey] = useState(localStorage.getItem('searchKey') || '');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Peliculas" });
  const [generoUser, setGeneroUser] = useState([]);
  const [playing, setPlaying] = useState("");
  const [numbers, setNumbers] = useState();
  const [cantidad, setCantidad]= useState("");
  const [perfil, setPerfil] = useState(localStorage.getItem('user') || '');
  const navigate = useNavigate();
  const { currentUser} = useContext(AuthContext);


  const obtenerPerfil = ()=>{
    const storedData = JSON.parse(localStorage.getItem('user'));

    // Access the value of categoria_id
    if (storedData && storedData.categoria_id) {
      setPerfil(storedData.categoria_id);
      console.log(perfil);
    }
 
  }

  const fetchCategorias = async () => {
    
    try {
      const response = await axios.get(`https://poster-users-profile.up.railway.app/api/legacy/${perfil}`);
      const categorias = response.data;
      //console.log(categorias);
  
      if (Array.isArray(categorias)) {
        const numbersC = categorias.map(item => item.genero_idtmdb);
        setNumbers(numbersC);
        setCantidad(numbersC.length);
        //console.log(cantidad);
      } else {
        console.log('categorias is not an array.');
        // Handle the error or unexpected response data
      }
    } catch (err) {
      console.log(err);
      // Handle the error
    }
  };

  const fetchMoviesByGenre = async (genreIds) => {
    try {
      const moviePromises = genreIds.map(genreId => {
        return fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=es`
        )
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al obtener las películas.');
            }
            return response.json();
          })
          .then(data => data.results.slice(0, 4))
          .catch(error => {
            console.error(error);
            return []; // Return an empty array in case of error
          });
      });
  
      const moviesArrays = await Promise.all(moviePromises);
      const movies = moviesArrays.flat(); // Flatten the arrays into a single array
  
      setMovies(movies);
    } catch (err) {
      console.error(err);
    }
  };

    const fetchMovies = async () => {
      const type = "discover"
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
        },
      });
      const limitedResults = results.slice(0, 8); // Retrieve only the first 8 results
      setMovies2(limitedResults);
      console.log(movies2);
      //   await fetchMovie(results[0].id);
      // }
    };


    const enviarCatalgo = async () => {
      navigate("/Peliculas")
    }
    useEffect(() => {
      obtenerPerfil();
       

        fetchCategorias();
        fetchMoviesByGenre(numbers)
        fetchMovies();
      

    }, [numbers]);

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
            {currentUser ? (
              <center>
                <h2>Recomendaciones para ti</h2>
              </center>
            ) : (
              <center>
                <h2>Películas Populares</h2>
              </center>
            )}
            <div className="asdfasdf">

            {currentUser ? (
              movies.map((movie) => (
                <div key={movie.id} >
                  <img src={`${URL_IMAGE + movie.poster_path}`} onClick={() => enviarCatalgo()} />
                  <h4 className="text-center">{movie.title}</h4>
                </div>
              ))
            ) : (
              movies2.map((movie) => (
                <div key={movie.id} >
                  <img src={`${URL_IMAGE + movie.poster_path}`} onClick={() => enviarCatalgo()} />
                  <h4 className="text-center">{movie.title}</h4>
                </div>
              ))
            )}

             

            </div>


          </div>
        </div>
      </div>
    )

  }
  export default Home