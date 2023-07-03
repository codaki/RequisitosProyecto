import React, { useState } from 'react';
import { useEffect } from 'react';
import "../styles/Quiz.scss"

const QuizComponent = () => {

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

  const [answers, setAnswers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1); // State to track the selected value
  const [perfil, setPerfil] = useState(1);
  const [cambio, setCambio] = useState(true);

  const handleRangeChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value
  };

  const quizData = [
    {
      question: "Si las películas de comedia fueran alimentos, ¿qué tan picante te gusta que sean?",
    },
    {
      question: "Si las películas de terror y thriller fueran emociones intensas, ¿qué tan dispuesto estarías a enfrentar tus miedos?",
    },
    {
        question: "Si las películas de misterio fueran enigmas por resolver, ¿qué tan intrincado te gusta que sea el rompecabezas?",
    },
    {
        question: "Si tuvieras que comparar tu emoción al ver películas de acción y aventura con la sensación de subir a una montaña rusa, ¿en qué nivel estarías?",
      },
    {
      question: "Si las películas históricas fueran puertas al pasado, ¿qué tan ansioso estarías por cruzar el umbral?",
    },
    {
        question: "Si las películas de anime fueran viajes lejanos, ¿hasta qué lejano universo estarías dispuesto a explorar?",
    },
    {
        question: "¿Cuántos corazones le darías a las comedias románticas y llenas de drama?",
    },
    {
        question: "Si las películas de animación y fantasía fueran mundos reales, ¿qué tan emocionado estarías por estar en ellos solo o con familia?",
    },
    {
        question: "Si la música fuera un viaje especial, ¿qué tanto te gustaría tu viaje musical?",
    },
    {
        question: "En una escala del 1 al 10, ¿qué tan dispuesto estarías a sacrificar horas de sueño para seguir viendo una serie adictiva?",
    },

  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);


  const handleAnswerSubmit = () => {
    const selectedValue = document.getElementById('a').value;
    
    if (selectedValue) {
      const answer = {
        question: quizData[currentQuiz].question,
        value: parseInt(selectedValue)
      };
      
      setAnswers(prevAnswers => [...prevAnswers, answer]);

      console.log("Pregunta: ", answers.length);

      if(perfil === 1 && cambio){
        
        if (selectedValue > 7){

            if(answers.length === 9){
                setPerfil(answers.length + 1);
                setCambio(false);   
            }else{
                setPerfil(answers.length + 2);
                setCambio(false);
            }
        }

      }else{
        const count = answers.filter(answer => answer.value > 7).length;

        if (count > 2) {
          console.log("More than two number are greater than 7");
          setPerfil(11);
        } else {
          console.log("No more than two numbers are greater than 7");
        }
      }

      setSelectedValue(1);
      setCurrentQuiz(currentQuiz + 1);
    }
  };
  
  

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    return (
        <div className="quiz-header">
      <h2 id="question">{currentQuizData.question}</h2>
      <ul>
        <li>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            id="a"
            className="answer"
            value={selectedValue} // Bind the selected value to the input value
            onChange={handleRangeChange} // Call the handleRangeChange function on value change
          />
          <span className="range-value">{selectedValue}</span> {/* Display the selected value */}
        </li>
      </ul>
      <button id="submit" onClick={handleAnswerSubmit}>
        Enviar
      </button>
    </div>
    );
  };

  const showResult = () => {
    
    console.log("Perfil: ", perfil);

    return (
      <div>
        <h2>¡Gracias por responder! Tu perfil se ha asignado correctamente 👀</h2>
        <button onClick={() => window.location.reload()}>Recargar</button>
      </div>
    );
  };

  return (
    <div className="quiz-container" id="quiz">
      {currentQuiz < quizData.length ? loadQuiz() : showResult()}
    </div>
  );
};

export default QuizComponent;
