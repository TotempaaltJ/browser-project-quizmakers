'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import {NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';
import handleSubmitButton from '../handlers/handleSubmitButton.js';

const handleNextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    
    if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
        const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
        nextQuestionButton.innerText = 'Submit';
        nextQuestionButton.addEventListener('click',handleSubmitButton, {once:true})
    }
    if (quizData.currentQuestionIndex >= quizData.questions.length) {
        quizData.currentQuestionIndex = quizData.questions.length-1;
      }
    showCurrentQuestion();
      
      

}

export default handleNextQuestion;
