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
              <h1>ENCUESTA DE GUSTOS CINEMATOGRAFICOS</h1>
            </legend>
            <form className="formulario">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      <legend>
                        <h4>Ayudanos llenando todas las preguntas</h4>
                      </legend>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <legend>
                        <h5>aqui va la</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
                        <h5>Escriba en dólares su presupuesto estimado mensual destinado a mantener a su mascota</h5>
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
              <input type="submit" id="envio2" />
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