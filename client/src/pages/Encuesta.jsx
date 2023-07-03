import React, { useState } from "react";
import "./Encuesta.scss";

const Encuesta = () => {
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);
  const [sliderValue4, setSliderValue4] = useState(0);
  const [sliderValue5, setSliderValue5] = useState(0);
  const [sliderValue6, setSliderValue6] = useState(0);
  const [sliderValue7, setSliderValue7] = useState(0);
  const [sliderValue8, setSliderValue8] = useState(0);
  const [sliderValue9, setSliderValue9] = useState(0);
  const [sliderValue10, setSliderValue10] = useState(0);
  const [perfil, setPerfil] = useState(1);

  // 1	Jorge -> 0 en todo por defecto
  // 2	Comediante -> puntuación alta en comedia
  // 3	Terrorífico -> puntuación alta en terror y thriller
  // 4	Misterioso -> puntuación alta en misterio y crimen
  // 5	Fantasioso -> puntuación alta en fantasía, familia y ciencia ficción, ademas de accion y aventura
  // 6	Nerd -> puntuación alta en historia, guerra y documentales
  // 7	Japones -> puntuación alta en anime
  // 8	Drama queen -> puntación alta en drama y romance
  // 9	Animado -> puntuación alta en animación y familia
  // 10	Theater kid -> puntación alta en musicales y/o tv
  // 11	Watallarin -> puntuación alta en todos o varios

  const seleccionarPerfil = () => {
    switch (true) {
      case perfilJorge():
        setPerfil(1);
        break;
      case perfilComediante():
        setPerfil(2);
        break;
      case perfilTerrorifico():
        setPerfil(3);
        break;
      case perfilMisterioso():
        setPerfil(4);
        break;
      case perfilFantasioso():
        setPerfil(5);
        break;
      case perfilNerd():
        setPerfil(6);
        break;
      case perfilJapones():
        setPerfil(7);
        break;
      case perfilDQueen():
        setPerfil(8);
        break;
      case perfilAnimado():
        setPerfil(9);
        break;
      case perfilTKid():
        setPerfil(10);
        break;
      default:
        setPerfil(11);
    }
  };
  

  const perfilJorge = () => {
    if (setSliderValue1 > 7){
      return true;
    } 

    return false;
  };

  const perfilComediante = () => {
    if (setSliderValue5 > 7){
      return true;
    } 

    return false;
  };

  const perfilTerrorifico = () => {
    if (setSliderValue2 > 7){
      return true;
    } 

    return false;
  };

  const perfilMisterioso = () => {
    if (setSliderValue10 > 7){
      return true;
    } 

    return false;
  };

  const perfilFantasioso = () => {
    if (setSliderValue1 > 7 || setSliderValue3 > 7){
      return true;
    } 

    return false;
  }

  const perfilNerd = () => {
    if (setSliderValue4 > 7){
      return true;
    } 

    return false;
  };

  const perfilJapones = () => {
    if (setSliderValue8 > 7){
      return true;
    } 

    return false;
  };

  const perfilDQueen = () => {
    if (setSliderValue6 > 7){
      return true;
    } 

    return false;
  };

  const perfilAnimado = () => {
    if (setSliderValue3 > 7){
      return true;
    } 

    return false;
  };

  const perfilTKid = () => {
    if (setSliderValue7 > 7 || setSliderValue9 > 7){
      return true;
    } 

    return false;
  };


  const handleSliderChange1 = (event) => {
    setSliderValue1(event.target.value);
  };
  const handleSliderChange2 = (event) => {
    setSliderValue2(event.target.value);
  };

  const handleSliderChange3 = (event) => {
    setSliderValue3(event.target.value);
  };

  const handleSliderChange4 = (event) => {
    setSliderValue4(event.target.value);
  };
  const handleSliderChange5 = (event) => {
    setSliderValue5(event.target.value);
  };

  const handleSliderChange6 = (event) => {
    setSliderValue6(event.target.value);
  };

  const handleSliderChange7 = (event) => {
    setSliderValue7(event.target.value);
  };
  const handleSliderChange8 = (event) => {
    setSliderValue8(event.target.value);
  };

  const handleSliderChange9 = (event) => {
    setSliderValue9(event.target.value);
  };

  const handleSliderChange10 = (event) => {
    setSliderValue10(event.target.value);
  };

  return (
    <div className="palfondo">
      <br />
      <div className="divsigjj">
        <section id="secc2">
          <fieldset id="cuentanos2">
            <legend>
              <h1>ENCUESTA</h1>
            </legend>
            <form className="formulario">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      <legend>
                        <h4>¿Qué peliculas quieres ver hoy?</h4>
                      </legend>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si tuvieras que comparar tu emoción al ver películas de acción y aventura con la sensación de subir a una montaña rusa, ¿en qué nivel estarías?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue1}
                          step="1"
                          onChange={handleSliderChange1}
                        />
                        <div className="value">
                          <div>{sliderValue1}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas de terror y thriller fueran emociones intensas, ¿qué tan dispuesto estarías a enfrentar tus miedos?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue2}
                          step="1"
                          onChange={handleSliderChange2}
                        />
                        <div className="value">
                          <div>{sliderValue2}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas de animación y fantasía fueran mundos reales, ¿qué tan emocionado estarías por estar en ellos solo o con familia?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue3}
                          step="1"
                          onChange={handleSliderChange3}
                        />
                        <div className="value">
                          <div>{sliderValue3}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas históricas fueran puertas al pasado, ¿qué tan ansioso estarías por cruzar el umbral? </h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue4}
                          step="1"
                          onChange={handleSliderChange4}
                        />
                        <div className="value">
                          <div>{sliderValue4}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas de comedia fueran alimentos, ¿qué tan picante te gusta que sean?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue5}
                          step="1"
                          onChange={handleSliderChange5}
                        />
                        <div className="value">
                          <div>{sliderValue5}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>¿Cuántos corazones le darías a las comedias románticas y llenas de drama? </h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue6}
                          step="1"
                          onChange={handleSliderChange6}
                        />
                        <div className="value">
                          <div>{sliderValue6}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si la música fuera un viaje especial, ¿qué tanto te gustaría tu viaje musical?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue7}
                          step="1"
                          onChange={handleSliderChange7}
                        />
                        <div className="value">
                          <div>{sliderValue7}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas de anime fueran viajes lejanos, ¿hasta qué lejano universo estarías dispuesto a explorar? </h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue8}
                          step="1"
                          onChange={handleSliderChange8}
                        />
                        <div className="value">
                          <div>{sliderValue8}</div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <legend>
                        <h5>En una escala del 1 al 10, ¿qué tan dispuesto estarías a sacrificar horas de sueño para seguir viendo una serie adictiva?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue9}
                          step="1"
                          onChange={handleSliderChange9}
                        />
                        <div className="value">
                          <div>{sliderValue9}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                    <td colSpan={1}>
                      <legend>
                        <h5>Si las películas de misterio fueran enigmas por resolver, ¿qué tan intrincado te gusta que sea el rompecabezas?</h5>
                      </legend>
                      <div className="range-input">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={sliderValue10}
                          step="1"
                          onChange={handleSliderChange10}
                        />
                        <div className="value">
                          <div>{sliderValue10}</div>
                        </div>
                      </div>
                    </td>
                </tbody>
              </table>
              <input type="submit" id="envio2" 
                onClick={seleccionarPerfil}
              />
            </form>
            <br />
          </fieldset>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Encuesta;