'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  COUNTER_SPAN_ID,
  SUMMARY_ID,

 
} from '../constants.js';
import showCurrentQuestion from "../handlers/showCurrentQuestion.js";
import createDOMElement from "../utils/createDOMElement.js";
import getDOMElement from "../utils/getDOMElement.js";
import createPreviousQuestionButtonElement from "../views/createPreviousQuestionButtonElement.js";
import createNextQuestionButtonElement from "../views/createNextQuestionButtonElement.js";

import { quizData } from '../data.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import setTimeOut from '../handlers/setTimer.js';
import creatTimerElement from '../views/creatTimeElement.js';
import countCorrectAnswers from '../utils/countCurrentAnswers.js';





const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  console.log('bla');
  startButton();
};

const startButton = () => {

    const userInterfaceContainer = document.querySelector('#user-interface');
    const startBtn = document.createElement('button')
    startBtn.textContent = 'Start Quiz';
    startBtn.addEventListener('click', () => {
        clearDOMElement(userInterfaceContainer);
        setupQuizHTML();
        showCurrentQuestion();  
        setTimeOut();

    })
    userInterfaceContainer.appendChild(startBtn)
}


const setupQuizHTML = () => {
    const userInterfaceContainer = getDOMElement('user-interface');
    const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
    const questionContainer = createDOMElement('div', { id: QUESTION_CONTAINER_ID });
    const appendTimer = creatTimerElement();
    //add counter span
  const counterSpan = createDOMElement('span', { id: COUNTER_SPAN_ID });
   counterSpan.innerText = (countCorrectAnswers());
   quizContainer.appendChild(counterSpan);
    quizContainer.appendChild(appendTimer);
    quizContainer.appendChild(questionContainer);
// add a previous button
    const previousQuestionButton = createPreviousQuestionButtonElement();
    quizContainer.appendChild(previousQuestionButton);
    //Next button
    const nextQuestionButton = createNextQuestionButtonElement();
    quizContainer.appendChild(nextQuestionButton);
    //add summary div
      const summary = createDOMElement( 'div',{id:SUMMARY_ID})
      //styling
      summary.style.width = '100%'
      summary.style.height = 'auto'
    
      
      summary.style.position = 'absolute'
      summary.style.zIndex= '10'
       document.body.prepend(summary)
      
      //add restart btn
     


     
     
      
   
  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
