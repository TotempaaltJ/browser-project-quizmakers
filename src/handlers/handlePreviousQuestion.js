'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';

const  handlePreviousQuestion = () => {
    if (quizData.currentQuestionIndex < 1) {
        quizData.questions[0];
      } else {
        quizData.currentQuestionIndex = quizData.currentQuestionIndex - 1;
      }

    showCurrentQuestion();
}

export default handlePreviousQuestion;