'use strict';
import selectAnswer from '../utils/selectAnswers.js';
import countCorrectAnswers from '../utils/countCurrentAnswers.js';
import { quizData } from '../data.js';



function clickAnswerHandler(event) {
  
  
  
  const li = event.target;
  selectAnswer(li.dataset.questionIndex, li.dataset.answerValue);
  const countSpan = document.getElementById('counter-span');
  countSpan.textContent = countCorrectAnswers();
  const divImg = document.querySelectorAll("#results-div div");
  const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
  const userAnswer = quizData.questions[quizData.currentQuestionIndex].selected;
  const score = document.querySelector("#counter-span");
  score.innerText = `${quizData.currentQuestionIndex + 1}/10`;
  
  if (correctAnswer === userAnswer) {
    divImg[quizData.currentQuestionIndex].firstChild.src = '../public/Ok.png';
    const okAudio = document.querySelector('.ok-audio');
    okAudio.play();
  } else {
    divImg[quizData.currentQuestionIndex].firstChild.src = '../public/notOk.png';
    const audioNo = document.querySelector('.no-audio');
    audioNo.play();
  };
}

export default clickAnswerHandler;
