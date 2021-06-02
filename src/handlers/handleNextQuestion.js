'use strict';
import creatSubmitBtn from '../views/creatSubmitElement.js';
import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';

const handleNextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    if (quizData.currentQuestionIndex = quizData.questions.length-1) {
        creatSubmitBtn();
    }

    showCurrentQuestion();
}

export default handleNextQuestion;