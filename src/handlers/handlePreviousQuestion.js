'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';
import {NEXT_QUESTION_BUTTON_ID } from '../constants.js';

const handlePreviousQuestion = () => {
    
if (quizData.currentQuestionIndex === quizData.questions.length -1) {
const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
 nextQuestionButton.innerText = 'Next question';   
}
    
quizData.currentQuestionIndex = quizData.currentQuestionIndex - 1;
if (quizData.currentQuestionIndex < 1) {
quizData.currentQuestionIndex = 0;
}
  showCurrentQuestion();
}

export default handlePreviousQuestion;
