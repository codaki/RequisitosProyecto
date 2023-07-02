import React from "react";
import axios from "axios";
import '../styles/Peliculas.css'
import YouTube from "react-youtube";
import { FaDoorClosed, FaDoorOpen, FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
const Peliculas = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b5a699c46770633c9f806dd3d4c4af86";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";


  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Peliculas" });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie?language=es`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);
    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}?language=es`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    // const data = await fetchMovie(movie.id)
    // console.log(data);
    // setSelectedMovie(movie)
    fetchMovie(movie.id);

    setMovie(movie);
    window.scrollTo(0, 0);
  };
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey)
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="lolo">
      {/* Busqueda peliculas */}

      <div className="centro">
        <form onSubmit={searchMovies}>
          <br></br>
          {/* 
          <input className="espaciobuscar " type="text" placeholder="Escribe tu pelicula..." onChange={(e) => setSearchKey(e.target.value)} />
          <button className="btnbuscar"><FaSearch size={25} /></button> */}
          <div className="gridcentrado">
            <div class="search-bar">
              <input type="text" placeholder="Buscar en MOOVIE" onChange={(e) => setSearchKey(e.target.value)} />
              <button>
                <a className="a_doble">
                  <FaSearch size={20} />
                  <p>Buscar</p>
                </a>
              </button>
            </div>
          </div>

        </form>
      </div>
      <br></br>

      {/*Trailer de la pelicula*/}
      <div className="trailer">
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton2">
                    <FaDoorClosed size={40} />
                  </button>
                </>
              ) : (
                <div className="casdf">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        <FaDoorOpen size={40} />
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <div className="bloquedes">
                      <h1 className="titulo88">{movie.title}</h1>
                      <div className="gridcentrado doscolumnas">
                        <p className="txt88">{movie.overview}</p>
                        <div className="contenedorTabla">
                        <table className="tablaDatosMovie">
                          <tr>
                            <td>Puntuación Por Usuarios: </td>
                            <td>{movie.vote_average}</td>
                          </tr>
                          <tr>
                            <td>Idioma Original: </td>
                            <td>{movie.original_language}</td>
                          </tr>
                          <tr>
                            <td>Fecha de Estreno: </td>
                            <td>{movie.release_date}</td>
                          </tr>
                          <tr>
                            <td>Duración: </td>
                            <td>{movie.runtime} minutos.</td>
                          </tr>
                        </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
      <br></br>

      {/*Peliculas*/}
      <div className="asdfasdf">
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => selectMovie(movie)} className="tamanios">
            <img src={`${URL_IMAGE + movie.poster_path}`} />
            <h4 className="text-center">{movie.title}</h4>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default Peliculas;
