'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import {NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';

const handleNextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    
    if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
        const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
        nextQuestionButton.innerText = 'Submit';
    }
    if (quizData.currentQuestionIndex > 9) {
        quizData.currentQuestionIndex = 9;
      }
    showCurrentQuestion();
}
export default handleNextQuestion;
